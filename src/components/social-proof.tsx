"use client";

import { AnimateOnScroll } from "./animate-on-scroll";
import { AnimatedCounter } from "./animated-counter";

const stats = [
  { value: "4+", label: "Projetos em Produção" },
  { value: "10+", label: "Tecnologias Dominadas" },
  { value: "3+", label: "Anos com IA & Automação" },
  { value: "∞", label: "Linhas de Código" },
];

const techStack = [
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "n8n", category: "automation" },
  { name: "Vercel", category: "infra" },
  { name: "Docker", category: "infra" },
  { name: "Git", category: "tools" },
  { name: "OpenAI", category: "ai" },
  { name: "Claude AI", category: "ai" },
  { name: "ComfyUI", category: "ai" },
  { name: "Langchain", category: "ai" },
];

const categoryColors: Record<string, string> = {
  frontend: "text-blue-400/80 border-blue-500/10 bg-blue-500/5",
  language: "text-amber-400/80 border-amber-500/10 bg-amber-500/5",
  backend: "text-emerald-400/80 border-emerald-500/10 bg-emerald-500/5",
  automation: "text-purple-400/80 border-purple-500/10 bg-purple-500/5",
  infra: "text-cyan-400/80 border-cyan-500/10 bg-cyan-500/5",
  tools: "text-zinc-400/80 border-zinc-500/10 bg-zinc-500/5",
  ai: "text-pink-400/80 border-pink-500/10 bg-pink-500/5",
};

export function SocialProof() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary tracking-widest uppercase">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gradient">
              Stack & Números
            </h2>
            <p className="text-zinc-500 mt-3 max-w-md mx-auto">
              As tecnologias que uso para transformar ideias em produtos reais.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        {/* Tech Stack Wall */}
        <AnimateOnScroll direction="up" delay={0.2}>
        <div className="rounded-2xl border border-white/[0.06] bg-[#0a0a0c] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-zinc-500">
              tech_stack.config
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-3.5 py-2 text-xs font-mono rounded-lg border transition-all hover:scale-105 cursor-default ${
                  categoryColors[tech.category]
                }`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-6 pt-5 border-t border-white/[0.04]">
            {[
              { label: "Frontend", cat: "frontend" },
              { label: "Backend", cat: "backend" },
              { label: "Languages", cat: "language" },
              { label: "AI/ML", cat: "ai" },
              { label: "Automation", cat: "automation" },
              { label: "Infra", cat: "infra" },
            ].map((item) => (
              <div key={item.cat} className="flex items-center gap-1.5">
                <div
                  className={`w-2 h-2 rounded-sm ${categoryColors[item.cat]
                    .split(" ")
                    .find((c) => c.startsWith("bg-"))}`}
                />
                <span className="text-[10px] text-zinc-600 font-mono">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
