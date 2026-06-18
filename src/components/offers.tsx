"use client";

import { ArrowRight, CheckCircle2, Clock3, MessageSquareText, Workflow } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const offers = [
  {
    icon: Clock3,
    title: "Automação Express 48h",
    price: "R$ 497+",
    description:
      "Para destravar uma tarefa manual com n8n, API, planilha, email, formulário ou alerta.",
    features: ["1 fluxo simples", "Entrega em até 48h", "Vídeo curto da entrega"],
    bestFor: "Melhor para primeiro projeto rápido",
  },
  {
    icon: MessageSquareText,
    title: "Agente WhatsApp Starter",
    price: "R$ 997",
    description:
      "Agente de atendimento para responder FAQ, capturar lead e avisar a equipe.",
    features: ["WhatsApp + IA", "Lead no Sheets", "Email/Telegram de alerta"],
    bestFor: "PMEs que perdem conversa no atendimento",
  },
  {
    icon: Workflow,
    title: "Integração n8n Pro",
    price: "R$ 2.497+",
    description:
      "Fluxo com classificação, roteamento, CRM, dashboard ou integrações de negócio.",
    features: ["Escopo fechado", "10 dias úteis", "Documentação operacional"],
    bestFor: "Processos com mais de uma ferramenta",
  },
];

export function Offers() {
  return (
    <section id="pacotes" className="white-panel py-20 sm:py-28">
      <div className="apple-container">
        <AnimateOnScroll>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="apple-eyebrow">Pacotes rápidos</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                Automação vendável, com escopo claro.
              </h2>
            </div>
            <p className="max-w-2xl text-[19px] leading-8 text-[#6e6e73] lg:justify-self-end">
              Se você já sabe onde o processo trava, eu transformo esse ponto em
              fluxo operando, com prazo curto e entrega demonstrável.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-5 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <AnimateOnScroll key={offer.title} delay={index * 0.08}>
                <article className="flex h-full flex-col rounded-[28px] border border-[#d2d2d7] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:p-8">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ff] text-[#0071e3]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-semibold text-[#424245]">
                      {offer.bestFor}
                    </p>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-[#0071e3]">
                    {offer.price}
                  </p>
                  <p className="mt-4 text-[17px] leading-7 text-[#6e6e73]">
                    {offer.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {offer.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm font-medium text-[#424245]"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#147a3d]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className="apple-pill mt-8 inline-flex items-center justify-center gap-2 bg-[#0071e3] px-6 text-[16px] font-semibold text-white transition hover:bg-[#0066cc]"
                  >
                    Pedir diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
