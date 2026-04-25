import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Arquitetura full-stack",
  "Agentes de IA",
  "Automação comercial",
];

export function Hero() {
  return (
    <section className="dark-panel relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f5f5f7] to-transparent" />

      <div className="apple-container relative z-10 grid min-h-[680px] items-center gap-12 pb-24 lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="apple-eyebrow animate-fade-in-up text-[#86868b]">
            Arquiteto de IA e Engenharia de Software
          </p>
          <h1 className="apple-display mt-5 animate-fade-in-up delay-100 text-5xl font-semibold text-white sm:text-6xl lg:text-[76px]">
            Sistemas inteligentes. Simples de usar. Prontos para produção.
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-in-up delay-200 text-[19px] leading-8 text-[#a1a1a6] sm:text-[21px]">
            Eu projeto e construo automações, agentes de IA e produtos digitais
            que transformam processos manuais em operações mensuráveis.
          </p>

          <div className="mt-9 flex animate-fade-in-up delay-300 flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="apple-pill inline-flex items-center justify-center gap-2 bg-[#0071e3] px-7 text-[17px] font-semibold text-white transition hover:bg-[#0066cc]"
            >
              Começar projeto
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projetos"
              className="apple-pill inline-flex items-center justify-center border border-white/18 px-7 text-[17px] font-semibold text-white transition hover:bg-white/10"
            >
              Ver trabalhos
            </a>
          </div>

          <div className="mt-9 grid animate-fade-in-up delay-500 gap-3 text-sm text-[#f5f5f7] sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3 py-2 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-[#2997ff]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="product-sheen relative aspect-[0.82] overflow-hidden rounded-[44px] border border-white/10 shadow-[0_38px_110px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-x-8 top-7 h-7 rounded-full bg-white/8" />
            <div className="absolute left-7 right-7 top-20 rounded-[28px] bg-[#f5f5f7] p-5 text-[#1d1d1f] shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">
                Lead System
              </p>
              <div className="mt-5 space-y-3">
                {["Captura", "Supabase", "Telegram"].map((label, index) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-3"
                  >
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="rounded-full bg-[#e8f2ff] px-3 py-1 text-xs font-semibold text-[#0066cc]">
                      {index === 0 ? "form" : index === 1 ? "db" : "alert"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 left-7 right-7 rounded-[32px] bg-[#1d1d1f] p-5">
              <p className="text-sm font-semibold text-white">
                Automação sem atrito
              </p>
              <p className="mt-2 text-sm leading-6 text-[#a1a1a6]">
                Dados persistidos primeiro. Notificações depois. Operação não
                depende de ferramenta externa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
