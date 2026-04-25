"use client";

import { Cpu, ExternalLink, Layers3, Video } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const projects = [
  {
    title: "ViaPro",
    tag: "Produto principal",
    description:
      "Análise de viabilidade para parcelamento de solo, conectando dados, processos e decisão imobiliária.",
    stack: ["Next.js", "Supabase", "Vercel", "Automação"],
    href: "https://viapro-three.vercel.app/",
    icon: Cpu,
    featured: true,
    visual: "Viabilidade",
  },
  {
    title: "TechTalks Brasil",
    tag: "Conteúdo técnico",
    description:
      "Canal de educação sobre engenharia de software, IA e automação para posicionamento de autoridade.",
    stack: ["YouTube", "Comunidade", "Educação"],
    href: "https://www.techtalksbrasil.com.br/",
    icon: Video,
    featured: false,
    visual: "Mídia",
  },
  {
    title: "AIOX Framework",
    tag: "Sistema de agentes",
    description:
      "Orquestração multi-agente para desenvolvimento full-stack assistido por IA e workflows governados.",
    stack: ["TypeScript", "CLI", "Agentes IA"],
    href: "https://github.com/SynkraAI/aiox-core",
    icon: Layers3,
    featured: false,
    visual: "AIOX",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="light-panel py-20 sm:py-28">
      <div className="apple-container">
        <AnimateOnScroll>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="apple-eyebrow">Projetos</p>
            <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Produtos reais, não promessas.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[19px] leading-8 text-[#6e6e73]">
              Um portfólio enxuto para demonstrar execução: produto SaaS,
              conteúdo técnico e framework próprio de agentes.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <AnimateOnScroll
                key={project.title}
                delay={index * 0.08}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`apple-card group grid h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.1)] ${
                    project.featured ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
                  }`}
                >
                  <div className="flex min-h-[280px] flex-col justify-between p-7 sm:p-9">
                    <div>
                      <div className="mb-7 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#86868b]" />
                      </div>
                      <p className="apple-eyebrow">{project.tag}</p>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-[17px] leading-7 text-[#6e6e73]">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#d2d2d7] px-3 py-1.5 text-xs font-semibold text-[#424245]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden bg-[#000000]">
                    <div className="absolute inset-8 rounded-[34px] bg-[#f5f5f7] shadow-2xl" />
                    <div className="absolute inset-x-14 top-16 rounded-[26px] bg-white p-5">
                      <div className="h-3 w-20 rounded-full bg-[#d2d2d7]" />
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        <div className="h-20 rounded-2xl bg-[#1d1d1f]" />
                        <div className="h-20 rounded-2xl bg-[#0071e3]" />
                        <div className="h-20 rounded-2xl bg-[#e8e8ed]" />
                      </div>
                    </div>
                    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1d1d1f] shadow-xl">
                      {project.visual}
                    </div>
                  </div>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
