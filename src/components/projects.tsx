"use client";

import { ExternalLink, Video, Cpu } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const projects = [
  {
    title: "Viapro",
    tag: "Flagship Product",
    description:
      "Plataforma SaaS para investidores imobiliários. Gestão inteligente de leads, imóveis e automações de follow-up.",
    stack: ["Next.js", "Supabase", "Vercel", "n8n"],
    href: "https://viapro-three.vercel.app/",
    icon: Cpu,
    featured: true,
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderGlow: "hover:border-blue-500/20",
  },
  {
    title: "TechTalks Brasil",
    tag: "Content Platform",
    description:
      "Canal de conteúdo técnico sobre engenharia de software, IA e automação. Educação e posicionamento de autoridade.",
    stack: ["Content", "YouTube", "Community"],
    href: "https://www.techtalksbrasil.com.br/",
    icon: Video,
    featured: false,
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderGlow: "hover:border-emerald-500/20",
  },
  {
    title: "AIOX Framework",
    tag: "Open Source",
    description:
      "Framework proprietário de orquestração de agentes IA. Sistema multi-agente para desenvolvimento full-stack assistido.",
    stack: ["TypeScript", "Node.js", "AI Agents", "CLI"],
    href: "https://github.com/SynkraAI/aiox-core",
    icon: Sparkles,
    featured: false,
    gradient: "from-amber-500/10 to-orange-500/10",
    borderGlow: "hover:border-amber-500/20",
  },
];

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">
              Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gradient">
              Em Produção
            </h2>
            <p className="text-zinc-500 mt-3 max-w-md mx-auto">
              Produtos e projetos que demonstram capacidade técnica real — do
              conceito ao deploy.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const isExternal = project.href.startsWith("http");
            return (
              <AnimateOnScroll key={project.title} delay={i * 0.1} className={project.featured ? "md:col-span-2" : ""}>
              <a
                href={project.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`group relative rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/[0.06] ${project.borderGlow} p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 block h-full`}
              >
                {/* Inner card */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-600 uppercase tracking-wider">
                          {project.tag}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
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
