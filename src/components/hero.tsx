import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-pulse-glow delay-500" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
            Arquiteto de IA e Engenharia de Software
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-gradient">Construindo o futuro</span>
          <br />
          <span className="text-gradient">com </span>
          <span className="text-gradient-accent">IA</span>
          <span className="text-gradient"> e </span>
          <span className="text-gradient-accent">Engenharia</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo negócios com automações inteligentes, agentes de IA e
          arquitetura de software de alto nível.{" "}
          <span className="text-zinc-300">Do conceito à produção.</span>
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-medium text-sm transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            Agende uma consultoria
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projetos"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.08] text-zinc-300 font-medium text-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.03] hover:text-white"
          >
            Conheça o ViaPro
          </a>
        </div>

        {/* Floating code window */}
        <div className="animate-fade-in-up delay-500 mt-16 sm:mt-20 max-w-lg mx-auto hidden sm:block">
          <div className="rounded-xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="text-[11px] text-zinc-600 font-mono ml-2">
                arquiteto.ts
              </span>
            </div>
            {/* Code content */}
            <pre className="px-4 py-4 text-[13px] leading-6 font-mono text-left overflow-x-auto">
              <code>
                <span className="text-zinc-500">{"// "}</span>
                <span className="text-zinc-600">Antonio Jebrael</span>
                {"\n"}
                <span className="text-blue-400">const</span>{" "}
                <span className="text-cyan-300">arquiteto</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-zinc-500">{"{"}</span>
                {"\n"}
                <span className="text-zinc-400">{"  pilha"}</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-amber-300">
                  {'"Next.js + Supabase + n8n"'}
                </span>
                <span className="text-zinc-500">,</span>
                {"\n"}
                <span className="text-zinc-400">{"  foco"}</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-amber-300">
                  {'"Automação com IA"'}
                </span>
                <span className="text-zinc-500">,</span>
                {"\n"}
                <span className="text-zinc-400">{"  status"}</span>
                <span className="text-zinc-500">:</span>{" "}
                <span className="text-emerald-400">
                  {'"Construindo o futuro"'}
                </span>
                {"\n"}
                <span className="text-zinc-500">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
        <div className="w-5 h-8 rounded-full border border-white/[0.1] flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-zinc-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
