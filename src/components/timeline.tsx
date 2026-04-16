const milestones = [
  {
    year: "2021",
    title: "Início na Programação",
    description:
      "Primeiros passos com Python e desenvolvimento web. Foco em automação e scripts.",
  },
  {
    year: "2022",
    title: "Engenharia de Software",
    description:
      "Transição para desenvolvimento profissional. TypeScript, React e arquitetura de sistemas.",
  },
  {
    year: "2023",
    title: "IA e Automação",
    description:
      "Mergulho em Inteligência Artificial, n8n, agentes autônomos e LLMs para negócios.",
  },
  {
    year: "2024",
    title: "ViaPro e Produtos",
    description:
      "Lançamento do ViaPro - software de análise de viabilidade para parcelamento de solo.",
  },
  {
    year: "2025",
    title: "AIOX Framework",
    description:
      "Criação do framework de orquestração de agentes de IA. TechTalks Brasil e Maya AI.",
  },
  {
    year: "2026",
    title: "O Arquiteto de IA",
    description:
      "Portal de autoridade, consultoria técnica e expansão do ecossistema de produtos.",
  },
];

export function Timeline() {
  return (
    <section id="trajetoria" className="relative py-24 sm:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">
            Trajetória
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-gradient">
            Experiência Profissional
          </h2>
          <p className="text-zinc-500 mt-3 max-w-md mx-auto">
            Do primeiro script ao ecossistema de produtos, cada ano uma evolução.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative overflow-hidden">
          {/* Vertical line — centered on md+, left-aligned on mobile */}
          <div className="absolute top-0 bottom-0 left-5 md:left-1/2 md:-translate-x-px w-px bg-white/[0.06]" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className="relative flex items-start md:items-center"
                >
                  {/* Blue dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 mt-1.5 md:mt-0" />

                  {/* Mobile: always right of line */}
                  {/* Desktop: alternate left/right */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isLeft
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="group rounded-2xl border border-white/[0.06] bg-[#0a0a0c] p-5 sm:p-6 transition-all duration-300 hover:border-primary/20">
                      <span className="inline-block font-mono text-sm text-primary bg-primary/10 rounded-lg px-3 py-1 mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-100 mb-1.5">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
