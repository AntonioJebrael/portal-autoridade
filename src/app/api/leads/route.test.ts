import { describe, expect, it } from "vitest";
import { buildTelegramLeadMessage } from "./route";

describe("lead Telegram notification", () => {
  it("formats lead details without requiring n8n", () => {
    const message = buildTelegramLeadMessage({
      name: "QA Test",
      email: "qa@example.com",
      service_interest: "Desenvolvimento de MVP",
      message: "Preciso validar o fluxo.",
      source: "portal-autoridade",
      timestamp: "2026-04-25T00:00:00.000Z",
    });

    expect(message).toContain("Novo lead no portal");
    expect(message).toContain("Nome: QA Test");
    expect(message).toContain("Email: qa@example.com");
    expect(message).toContain("Interesse: Desenvolvimento de MVP");
    expect(message).toContain("Mensagem: Preciso validar o fluxo.");
  });

  it("omits the optional message line when absent", () => {
    const message = buildTelegramLeadMessage({
      name: "QA Test",
      email: "qa@example.com",
      service_interest: "Consultoria Técnica",
      message: null,
      source: "portal-autoridade",
      timestamp: "2026-04-25T00:00:00.000Z",
    });

    expect(message).not.toContain("Mensagem:");
  });
});
