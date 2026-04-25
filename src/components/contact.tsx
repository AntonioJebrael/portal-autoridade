"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const serviceOptions = [
  "Automações com n8n",
  "Agentes de IA / SDR",
  "Consultoria Técnica",
  "Desenvolvimento de MVP",
  "Outro",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceInterest: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");

  function updateField<K extends keyof typeof formData>(
    field: K,
    value: (typeof formData)[K]
  ) {
    setStatus("idle");
    setFeedback("");
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        service_interest: formData.serviceInterest,
        message: formData.message || null,
        source: "portal-autoridade",
        timestamp: new Date().toISOString(),
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errorMessage = "Não foi possível enviar sua mensagem agora.";

        try {
          const data = (await response.json()) as { error?: string };
          if (data.error) errorMessage = data.error;
        } catch {
          // Keep default message when the error payload is unavailable.
        }

        throw new Error(errorMessage);
      }

      setFeedback("Mensagem enviada com sucesso. Retorno em até 24 horas.");
      setStatus("sent");
      setFormData({ name: "", email: "", serviceInterest: "", message: "" });
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem agora."
      );
      setStatus("error");
    }
  }

  const isSubmitting = status === "sending";
  const isSuccess = status === "sent";
  const isError = status === "error";

  function renderButtonLabel() {
    if (isSubmitting) {
      return (
        <>
          Enviando
          <Loader2 className="h-4 w-4 animate-spin" />
        </>
      );
    }

    if (isSuccess) {
      return (
        <>
          Mensagem enviada
          <CheckCircle2 className="h-4 w-4" />
        </>
      );
    }

    if (isError) {
      return (
        <>
          Tentar novamente
          <Send className="h-4 w-4" />
        </>
      );
    }

    return (
      <>
        Enviar mensagem
        <Send className="h-4 w-4" />
      </>
    );
  }

  const fieldClass =
    "w-full rounded-[18px] border border-[#86868b] bg-white px-4 py-3.5 text-[17px] text-[#1d1d1f] transition placeholder:text-[#86868b] focus:border-[#0071e3] focus:outline-none focus:ring-4 focus:ring-[#0071e3]/10";

  return (
    <section id="contato" className="dark-panel py-20 sm:py-28">
      <div className="apple-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
            <p className="apple-eyebrow text-[#86868b]">Contato</p>
            <h2 className="apple-display mt-3 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Vamos tirar sua operação do manual.
            </h2>
            <p className="mt-5 max-w-xl text-[19px] leading-8 text-[#a1a1a6]">
              Envie o contexto do projeto. Eu recebo o lead direto no banco e
              sou avisado no Telegram.
            </p>
            <div className="mt-8 rounded-[28px] bg-[#1d1d1f] p-6 text-[#d2d2d7]">
              <p className="text-sm font-semibold text-white">
                Resposta em até 24 horas.
              </p>
              <p className="mt-2 text-sm leading-6">
                Melhor se você enviar objetivo, prazo e sistema atual. Mensagem
                curta funciona.
              </p>
            </div>
        </div>

        <form
            onSubmit={handleSubmit}
            className="rounded-[32px] bg-[#f5f5f7] p-5 text-[#1d1d1f] shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#6e6e73]"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={fieldClass}
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#6e6e73]"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={fieldClass}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="serviceInterest"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#6e6e73]"
              >
                Interesse
              </label>
              <select
                id="serviceInterest"
                required
                value={formData.serviceInterest}
                onChange={(e) =>
                  updateField("serviceInterest", e.target.value)
                }
                className={`${fieldClass} appearance-none`}
              >
                <option value="">Selecione um serviço</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#6e6e73]"
              >
                Mensagem <span className="normal-case">(opcional)</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`${fieldClass} resize-none`}
                placeholder="Conte o que você quer construir ou automatizar."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="apple-pill mt-5 flex w-full items-center justify-center gap-2 bg-[#0071e3] px-7 text-[17px] font-semibold text-white transition hover:bg-[#0066cc] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {renderButtonLabel()}
            </button>

            {feedback ? (
              <p
                className={`mt-4 text-[15px] font-medium ${
                  isError ? "text-[#d70015]" : "text-[#147a3d]"
                }`}
              >
                {feedback}
              </p>
            ) : null}
        </form>
      </div>
    </section>
  );
}
