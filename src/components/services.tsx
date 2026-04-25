"use client";

import { ArrowRight, BotMessageSquare, Code2, Workflow } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const services = [
  {
    icon: Workflow,
    title: "Automação operacional",
    description:
      "Integrações, captura de leads, alertas e rotinas que removem tarefas manuais do dia a dia.",
    features: ["Processos conectados", "Alertas automáticos", "Métricas de execução"],
  },
  {
    icon: BotMessageSquare,
    title: "Agentes de IA",
    description:
      "Assistentes comerciais e operacionais que qualificam, respondem e encaminham demandas com contexto.",
    features: ["SDR digital", "Triagem inteligente", "Atendimento 24/7"],
  },
  {
    icon: Code2,
    title: "MVP e arquitetura",
    description:
      "Produtos web com base técnica sólida: Next.js, Supabase, APIs, deploy e observabilidade.",
    features: ["Arquitetura limpa", "Entrega incremental", "Pronto para escalar"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="white-panel py-20 sm:py-28">
      <div className="apple-container">
        <AnimateOnScroll>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="apple-eyebrow">Serviços</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                Da ideia ao sistema operando.
              </h2>
            </div>
            <p className="max-w-2xl text-[19px] leading-8 text-[#6e6e73] lg:justify-self-end">
              Consultoria e implementação com foco em uma coisa: transformar
              oportunidade de negócio em produto funcional, medido e mantível.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimateOnScroll key={service.title} delay={index * 0.08}>
                <article className="h-full rounded-[28px] bg-[#f5f5f7] p-7 transition duration-300 hover:-translate-y-1 sm:p-8">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0071e3] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-7 text-[#6e6e73]">
                    {service.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center justify-between border-t border-[#d2d2d7] pt-3 text-sm font-medium text-[#424245]"
                      >
                        {feature}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]" />
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="apple-link mt-8 inline-flex items-center gap-1 text-[17px]"
                  >
                    Conversar sobre isso
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
