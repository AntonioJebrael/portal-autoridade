"use client";

import { AnimateOnScroll } from "./animate-on-scroll";
import { Quote, ShieldCheck } from "lucide-react";

export type TestimonialEntry = {
  initials: string;
  name: string;
  role: string;
  company: string;
  reviewBody: string;
};

export const testimonialEntries: TestimonialEntry[] = [
  {
    initials: "MS",
    name: "Marina S.",
    role: "Lider de Operacoes",
    company: "Consultoria B2B",
    reviewBody:
      "A principal diferenca foi a clareza para transformar uma demanda confusa em execucao objetiva. O projeto ganhou ritmo sem perder criterio tecnico.",
  },
  {
    initials: "RC",
    name: "Rafael C.",
    role: "Head de Growth",
    company: "Empresa de Servicos Digitais",
    reviewBody:
      "A entrega combinou velocidade com boa leitura de negocio. Nao foi so implementacao: houve preocupacao real com impacto operacional e priorizacao.",
  },
  {
    initials: "AL",
    name: "Ana L.",
    role: "Diretora Comercial",
    company: "Operacao Regional de Vendas",
    reviewBody:
      "O trabalho trouxe mais organizacao para a operacao e melhor visibilidade do que precisava acontecer primeiro. Passou seguranca de execucao desde o inicio.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[200px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll>
          <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.58fr)] lg:items-end">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
                O que dizem
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gradient sm:text-4xl">
                Confianca nasce de execucao consistente.
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-500">
                Feedbacks que representam o tipo de percepcao que mais importa em projetos
                tecnicos: clareza, ritmo de entrega e criterio para decidir o que vem primeiro.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/[0.06] bg-[#0a0a0c] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                  <ShieldCheck className="h-4 w-4 text-blue-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-100">Sinal de credibilidade</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    Uma seção mais institucional, pensada para reforcar confianca sem exagero de
                    tom nem marketing artificial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonialEntries.map((entry, index) => (
            <AnimateOnScroll key={entry.name} delay={index * 0.08}>
              <article className="group card-hover relative flex h-full flex-col rounded-[28px] border border-white/[0.06] bg-[#0a0a0c] p-6 sm:p-7">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Quote className="mb-8 h-6 w-6 text-zinc-700 transition-colors duration-300 group-hover:text-blue-300/80" />

                <p className="flex-1 text-sm leading-7 text-zinc-400">{entry.reviewBody}</p>

                <div className="mt-8 flex items-center gap-4 border-t border-white/[0.05] pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-sm font-semibold text-zinc-100">
                    {entry.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{entry.name}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                      {entry.role}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">{entry.company}</p>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
