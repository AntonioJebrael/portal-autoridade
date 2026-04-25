import { after, NextResponse } from "next/server";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

type LeadPayload = {
  name: string;
  email: string;
  service_interest: string;
  message: string | null;
  source: string;
  timestamp: string;
};

const workspaceEnv = new Map<string, string>();
let workspaceEnvLoaded = false;

function getStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function loadWorkspaceEnv() {
  if (workspaceEnvLoaded) {
    return;
  }

  const candidates = [
    resolve(/* turbopackIgnore: true */ process.cwd(), ".env.local"),
    resolve(/* turbopackIgnore: true */ process.cwd(), ".env"),
    resolve(/* turbopackIgnore: true */ process.cwd(), ".env.example"),
    resolve(/* turbopackIgnore: true */ process.cwd(), "../.env.local"),
    resolve(/* turbopackIgnore: true */ process.cwd(), "../.env"),
    resolve(/* turbopackIgnore: true */ process.cwd(), "../.env.example"),
  ];

  for (const filePath of candidates) {
    if (!existsSync(filePath)) {
      continue;
    }

    const content = readFileSync(filePath, "utf8");
    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) {
        continue;
      }

      const separatorIndex = line.indexOf("=");
      if (separatorIndex === -1) {
        continue;
      }

      const key = line.slice(0, separatorIndex).trim();
      let value = line.slice(separatorIndex + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (!workspaceEnv.has(key) && value) {
        workspaceEnv.set(key, value);
      }
    }
  }

  workspaceEnvLoaded = true;
}

function getEnvValue(key: string) {
  const value = process.env[key];
  if (value) {
    return value;
  }

  loadWorkspaceEnv();
  return workspaceEnv.get(key);
}

function normalizeLeadPayload(body: Record<string, unknown>): LeadPayload | null {
  const name = getStringValue(body.name);
  const email = getStringValue(body.email);
  const serviceInterest = getStringValue(
    body.service_interest ?? body.service
  );
  const message = getStringValue(body.message);
  const source = getStringValue(body.source) || "portal-autoridade";
  const timestamp = getStringValue(body.timestamp) || new Date().toISOString();

  if (!name || !email || !serviceInterest) {
    return null;
  }

  return {
    name,
    email,
    service_interest: serviceInterest,
    message: message || null,
    source,
    timestamp,
  };
}

async function persistLead(lead: LeadPayload) {
  const supabaseUrl =
    getEnvValue("SUPABASE_URL") || getEnvValue("NEXT_PUBLIC_SUPABASE_URL");
  const supabaseKey =
    getEnvValue("SUPABASE_SERVICE_ROLE_KEY") ||
    getEnvValue("SUPABASE_ANON_KEY") ||
    getEnvValue("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase credentials not configured for lead capture");
    return NextResponse.json(
      { error: "Serviço temporariamente indisponível." },
      { status: 503 }
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      service_interest: lead.service_interest,
      message: lead.message,
      source: lead.source,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Supabase insert failed:", errorText);
    return NextResponse.json(
      { error: "Não foi possível salvar seu contato agora." },
      { status: 500 }
    );
  }

  return null;
}

export function buildTelegramLeadMessage(lead: LeadPayload) {
  const message = lead.message ? `\nMensagem: ${lead.message}` : "";

  return [
    "Novo lead no portal",
    `Nome: ${lead.name}`,
    `Email: ${lead.email}`,
    `Interesse: ${lead.service_interest}`,
    `Origem: ${lead.source}`,
    `Data: ${lead.timestamp}`,
    message,
  ]
    .filter(Boolean)
    .join("\n");
}

async function notifyLeadTelegram(lead: LeadPayload) {
  const botToken = getEnvValue("TELEGRAM_BOT_TOKEN");
  const chatId = getEnvValue("TELEGRAM_CHAT_ID");

  if (!botToken || !chatId) {
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: buildTelegramLeadMessage(lead),
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Telegram notification failed:", errorText);
    }
  } catch (error) {
    console.error("Telegram notification error:", error);
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const startedAt = Date.now();

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const lead = normalizeLeadPayload(body);

    if (!lead) {
      return NextResponse.json(
        { error: "Nome, e-mail e interesse são obrigatórios." },
        { status: 400 }
      );
    }

    const persistError = await persistLead(lead);
    if (persistError) {
      return persistError;
    }

    after(() => notifyLeadTelegram(lead));

    return NextResponse.json({
      success: true,
      processing_ms: Date.now() - startedAt,
    });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar seu contato." },
      { status: 500 }
    );
  }
}
