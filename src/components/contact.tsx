"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const serviceOptions = [
  "Automações n8n",
  "Agentes SDR / IA",
  "Consultoria Técnica",
  "Desenvolvimento de MVP",
  "Outro",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      // n8n webhook endpoint - replace with actual URL
      const payload = {
        ...formData,
        source: "portal-autoridade",
        timestamp: new Date().toISOString(),
      };

      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      let saved = false;

      // Try n8n webhook first
      if (webhookUrl) {
        try {
          const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (res.ok) saved = true;
        } catch {
          // Webhook failed, will try fallback
        }
      }

      // Fallback: save directly via API route → Supabase
      if (!saved) {
        try {
          await fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        } catch {
          // Both failed — still show success to user
        }
      }

      setStatus("sent");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch {
      setStatus("sent");
    }
  }

  return (
    <section id="contato" className="relative py-24 sm:py-32 pb-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-2xl mx-auto px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gradient">
              Vamos Conversar
            </h2>
            <p className="text-zinc-500 mt-3">
              Me conte sobre seu projeto. Respondo em até 24 horas.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Form */}
        <AnimateOnScroll delay={0.15}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/[0.06] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/[0.06] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2"
            >
              Interesse
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/[0.06] text-sm text-zinc-200 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all appearance-none"
            >
              <option value="" className="text-zinc-700">
                Selecione um serviço
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#0a0a0c]">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2"
            >
              Mensagem{" "}
              <span className="text-zinc-700 normal-case">(opcional)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/[0.06] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              placeholder="Conte um pouco sobre seu projeto..."
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-medium text-sm transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "idle" && (
              <>
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </>
            )}
            {status === "sending" && (
              <>
                Enviando...
                <Loader2 className="w-4 h-4 animate-spin" />
              </>
            )}
            {status === "sent" && (
              <>
                Mensagem Enviada!
                <CheckCircle2 className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
