const milestones = [
  {
    year: "2021",
    title: "Primeiras automações",
    description:
      "Python, web e scripts para transformar tarefas repetitivas em processos executáveis.",
  },
  {
    year: "2022",
    title: "Engenharia profissional",
    description:
      "TypeScript, React e arquitetura de sistemas em projetos reais, com foco em entrega.",
  },
  {
    year: "2023",
    title: "IA aplicada",
    description:
      "LLMs, agentes e automações conectadas a problemas comerciais e operacionais.",
  },
  {
    year: "2024",
    title: "ViaPro",
    description:
      "Produto para análise de viabilidade imobiliária, da modelagem ao deploy.",
  },
  {
    year: "2025",
    title: "AIOX Framework",
    description:
      "Sistema próprio para orquestração de agentes e desenvolvimento assistido.",
  },
  {
    year: "2026",
    title: "Consultoria de IA",
    description:
      "Portal de autoridade, serviços produtizados e execução ponta a ponta.",
  },
];

export function Timeline() {
  return (
    <section id="trajetoria" className="light-panel py-20 sm:py-28">
      <div className="apple-container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="apple-eyebrow">Trajetória</p>
          <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Uma evolução contínua em software e IA.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[19px] leading-8 text-[#6e6e73]">
            A mesma linha une cada fase: reduzir complexidade, entregar
            sistemas confiáveis e usar tecnologia onde ela cria vantagem real.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone) => (
            <article
              key={milestone.year}
              className="rounded-[28px] bg-white p-7 shadow-[0_14px_42px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0066cc]">
                  {milestone.year}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#0071e3]" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {milestone.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#6e6e73]">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
