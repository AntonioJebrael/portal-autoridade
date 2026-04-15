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
        let errorMessage = "Nao foi possivel enviar sua mensagem agora.";

        try {
          const data = (await response.json()) as { error?: string };
          if (data.error) {
            errorMessage = data.error;
          }
        } catch {
          // Keep default message when the error payload is unavailable.
        }

        throw new Error(errorMessage);
      }

      setFeedback("Mensagem enviada com sucesso. Retorno em ate 24 horas.");
      setStatus("sent");
      setFormData({ name: "", email: "", serviceInterest: "", message: "" });
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar sua mensagem agora."
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
          Enviando...
          <Loader2 className="w-4 h-4 animate-spin" />
        </>
      );
    }

    if (isSuccess) {
      return (
        <>
          Mensagem Enviada!
          <CheckCircle2 className="w-4 h-4" />
        </>
      );
    }

    if (isError) {
      return (
        <>
          Tentar Novamente
          <Send className="w-4 h-4" />
        </>
      );
    }

    return (
      <>
        Enviar Mensagem
        <Send className="w-4 h-4" />
      </>
    );
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
                  updateField("name", e.target.value)
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
                  updateField("email", e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/[0.06] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="serviceInterest"
              className="block text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2"
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
                updateField("message", e.target.value)
              }
              className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/[0.06] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              placeholder="Conte um pouco sobre seu projeto..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-medium text-sm transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {renderButtonLabel()}
          </button>
          {feedback ? (
            <p
              className={`text-sm ${
                isError ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
