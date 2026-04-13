"use client";

import { Workflow, BotMessageSquare, Code2, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const services = [
  {
    icon: Workflow,
    title: "Automações n8n",
    subtitle: "Para negócios locais",
    description:
      "Workflows inteligentes que conectam seus sistemas e eliminam trabalho manual. Qualificação de leads, follow-ups automáticos e integrações com WhatsApp.",
    features: [
      "Workflows customizados",
      "Integração WhatsApp",
      "Qualificação automática de leads",
    ],
    cta: "Automatize seu Negócio",
    ctaHref: "#contato",
    accent: "blue",
  },
  {
    icon: BotMessageSquare,
    title: "Agentes SDR",
    subtitle: "Prospecção inteligente",
    description:
      "Agentes de IA que prospectam, qualificam e agendam reuniões automaticamente. SDR 24/7 que nunca para de trabalhar para você.",
    features: [
      "Prospecção automatizada",
      "Qualificação com IA",
      "Agendamento inteligente",
    ],
    cta: "Conheça os Agentes",
    ctaHref: "#contato",
    accent: "cyan",
  },
  {
    icon: Code2,
    title: "Engenharia de Software",
    subtitle: "Consultoria técnica",
    description:
      "Arquitetura de sistemas, code review, mentoria técnica e desenvolvimento assistido por IA. Do MVP à escala com as melhores práticas.",
    features: [
      "Arquitetura de sistemas",
      "Code review & mentoria",
      "MVP to Scale",
    ],
    cta: "Agende Consultoria",
    ctaHref: "#contato",
    accent: "emerald",
  },
];

const accentColors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  blue: {
    border: "group-hover:border-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]",
  },
  cyan: {
    border: "group-hover:border-cyan-500/20",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]",
  },
  emerald: {
    border: "group-hover:border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]",
  },
};

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gradient">
              Como Posso Ajudar
            </h2>
            <p className="text-zinc-500 mt-3 max-w-lg mx-auto">
              Soluções de curto e médio prazo com foco em resultado mensurável e
              tecnologia de ponta.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const colors = accentColors[service.accent];
            return (
              <AnimateOnScroll key={service.title} delay={i * 0.1}>
              <div
                className={`group relative rounded-2xl border border-white/[0.06] ${colors.border} ${colors.glow} bg-[#0a0a0c] p-6 sm:p-8 transition-all duration-300 flex flex-col h-full`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-wider mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-zinc-400"
                      >
                        <div className={`w-1 h-1 rounded-full ${colors.text} opacity-60`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={service.ctaHref}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} transition-all group-hover:gap-3`}
                >
                  {service.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
