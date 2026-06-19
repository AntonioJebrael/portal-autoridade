import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "TechTalks Lab IA — Pare de perder venda por demora no atendimento",
  description:
    "Automações e agentes de IA que respondem na hora, qualificam leads e avisam seu time no WhatsApp. Comece em 48h, veja funcionando e escale quando fizer sentido.",
  alternates: {
    canonical: "/techtalks-lab",
  },
  openGraph: {
    title: "TechTalks Lab IA — Atendimento e vendas no automático",
    description:
      "IA, WhatsApp e n8n trabalhando no seu atendimento: captura lead, responde dúvida e avisa o time. Sem projeto longo e sem complicação técnica.",
    type: "website",
    locale: "pt_BR",
    url: "https://antoniojebrael.pro/techtalks-lab",
  },
};

const packages = [
  {
    icon: Clock3,
    title: "Automação Express 48h",
    price: "R$ 497+",
    summary:
      "Elimina aquela tarefa manual que rouba seu tempo todo dia — planilha, email, formulário, Telegram ou API — em até 48 horas.",
    items: ["Escopo fechado, sem surpresa", "Você vê funcionando", "Vídeo curto de como operar"],
  },
  {
    icon: MessageCircle,
    title: "Agente WhatsApp Starter",
    price: "R$ 997",
    summary:
      "IA que responde na hora, tira a dúvida do cliente, registra o lead e chama você só quando aparece oportunidade de verdade.",
    items: ["Responde dúvidas 24/7", "Captura e organiza o lead", "Avisa o time na hora certa"],
    featured: true,
  },
  {
    icon: Workflow,
    title: "Integração n8n Pro",
    price: "R$ 2.497+",
    summary:
      "Para quem precisa conectar tudo: qualificação de lead, roteamento, CRM, base de conhecimento e os sistemas que você já usa.",
    items: ["Pronto em ~10 dias úteis", "Documentação pra você operar", "Acompanhamento na virada"],
  },
];

const clients = [
  "Consultorias e serviços B2B",
  "Clínicas, estética e saúde privada",
  "Imobiliárias e corretores",
  "Escolas, cursos e mentorias",
  "Quem vende e atende pelo WhatsApp",
  "PMEs que perdem lead por demora",
];

const workflows = [
  "Atendimento e qualificação por IA",
  "Lead que cai direto no time certo",
  "IA que responde pela sua base de conhecimento",
  "Agente de atendimento no WhatsApp",
  "Áudio do WhatsApp virando texto",
  "Conteúdo publicado no automático",
];

const steps = [
  {
    title: "Diagnóstico do processo",
    text: "Mapeio onde você perde tempo, lead ou venda hoje e aponto o menor fluxo que já traz resultado.",
  },
  {
    title: "Construo e você vê rodando",
    text: "Monto a automação com IA, WhatsApp e n8n priorizando entrega rápida e prova clara de que funciona.",
  },
  {
    title: "Entrega e evolução",
    text: "Documentação curta, orientação pra operar e próximos passos quando o uso real mostrar onde crescer.",
  },
];

const faqs: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: Bot,
    title: "Preciso entender de tecnologia?",
    text: "Não. Cuido da parte técnica de ponta a ponta e te entrego algo simples de operar, com orientação passo a passo.",
  },
  {
    icon: MessageCircle,
    title: "Funciona com o WhatsApp que já uso?",
    text: "Sim. A automação conversa com o seu número e suas ferramentas atuais — sem te obrigar a trocar de sistema.",
  },
  {
    icon: Route,
    title: "E se eu não souber qual automação preciso?",
    text: "Por isso começamos pelo diagnóstico. Eu mapeio onde você perde tempo ou lead e indico o menor fluxo que já gera resultado.",
  },
  {
    icon: ShieldCheck,
    title: "Meus dados e dos meus clientes ficam seguros?",
    text: "Ficam. Trabalho sem expor chaves, senhas ou dados sensíveis, e tudo roda em ambiente controlado.",
  },
  {
    icon: Clock3,
    title: "Quanto tempo até estar funcionando?",
    text: "Pacotes a partir de 48h e integrações maiores em cerca de 10 dias úteis. Você vê funcionando antes de escalar.",
  },
  {
    icon: BadgeCheck,
    title: "Vou ficar dependente de você?",
    text: "Não. Entrego documentação curta e te deixo no controle. Você me chama pra evoluir, não porque ficou preso.",
  },
];

export default function TechTalksLabPage() {
  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000"
  ).replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    "Olá, Antonio! Quero um diagnóstico da TechTalks Lab IA para automação com n8n, IA ou WhatsApp."
  );

  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <section className="relative overflow-hidden bg-[#101114] pt-28 text-white sm:pt-32">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f5f7] to-transparent" />
          <div className="apple-container relative grid gap-12 pb-18 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#d2d2d7]">
                <Sparkles className="h-3.5 w-3.5 text-[#35c759]" />
                TechTalks Lab IA
              </p>
              <h1 className="apple-display mt-6 text-5xl font-semibold sm:text-6xl lg:text-7xl">
                Pare de perder venda por demora no atendimento.
              </h1>
              <p className="mt-6 max-w-xl text-[19px] leading-8 text-[#d2d2d7]">
                Coloco IA, WhatsApp e n8n para trabalhar no seu atendimento e
                backoffice — capturando lead, respondendo dúvida na hora e
                avisando seu time. Sem projeto longo e sem complicação técnica.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-pill inline-flex items-center justify-center gap-2 bg-[#35c759] px-6 text-[16px] font-semibold text-[#061408] transition hover:bg-[#30b753]"
                >
                  Pedir diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#pacotes"
                  className="apple-pill inline-flex items-center justify-center gap-2 border border-white/18 bg-white/8 px-6 text-[16px] font-semibold text-white transition hover:bg-white/14"
                >
                  Ver pacotes
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/12 bg-white/8 p-3 shadow-[0_35px_100px_rgba(0,0,0,0.38)] backdrop-blur">
              <Image
                src="/techtalks-lab/n8n-workspace-overview.png"
                alt="Workspace n8n com fluxos de automação selecionados para prova comercial"
                width={1440}
                height={900}
                priority
                className="aspect-[16/10] rounded-[20px] object-cover"
              />
              <div className="flex flex-col gap-1 px-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-white">
                  Automações reais rodando no n8n
                </p>
                <p className="text-xs text-[#a1a1a6]">
                  Fluxos de verdade, sem expor nenhuma credencial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="white-panel py-16 sm:py-20">
          <div className="apple-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="apple-eyebrow">Para quem é</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                Você já tem demanda. Só ainda faz tudo no braço.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex min-h-16 items-center gap-3 rounded-[18px] border border-[#d2d2d7] bg-[#f5f5f7] px-4 py-3"
                >
                  <Building2 className="h-4 w-4 shrink-0 text-[#0071e3]" />
                  <span className="text-sm font-semibold text-[#424245]">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pacotes" className="light-panel py-16 sm:py-24">
          <div className="apple-container">
            <div className="mb-10 max-w-3xl">
              <p className="apple-eyebrow">Pacotes</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                Comece pequeno, veja funcionando e escale quando fizer sentido.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {packages.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`flex h-full flex-col rounded-[28px] border p-7 shadow-sm ${
                      item.featured
                        ? "border-[#0071e3] bg-white shadow-[0_24px_70px_rgba(0,113,227,0.12)]"
                        : "border-[#d2d2d7] bg-white"
                    }`}
                  >
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2ff] text-[#0071e3]">
                        <Icon className="h-5 w-5" />
                      </div>
                      {item.featured ? (
                        <span className="rounded-full bg-[#e8f2ff] px-3 py-1.5 text-xs font-semibold text-[#0066cc]">
                          Entrada ideal
                        </span>
                      ) : null}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-3xl font-semibold text-[#0071e3]">
                      {item.price}
                    </p>
                    <p className="mt-4 text-[17px] leading-7 text-[#6e6e73]">
                      {item.summary}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {item.items.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm font-medium text-[#424245]"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#147a3d]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="white-panel py-16 sm:py-24">
          <div className="apple-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="rounded-[28px] border border-[#d2d2d7] bg-[#f5f5f7] p-3 shadow-sm">
              <Image
                src="/techtalks-lab/n8n-workflow-sdr-handoff.png"
                alt="Canvas real do n8n com fluxo SDR e handoff humano"
                width={1440}
                height={900}
                className="aspect-[16/10] rounded-[20px] object-cover"
              />
            </div>
            <div>
              <p className="apple-eyebrow">Prova operacional</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                Automações reais, rodando de verdade — não slide bonito.
              </h2>
              <p className="mt-5 text-[19px] leading-8 text-[#6e6e73]">
                Você vê fluxos já montados no n8n funcionando na prática — a
                prova concreta do que dá para construir no seu negócio, sem
                expor chaves, dados ou nada sensível.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {workflows.map((workflow) => (
                  <div
                    key={workflow}
                    className="flex items-center gap-2 rounded-[16px] bg-[#f5f5f7] px-4 py-3 text-sm font-semibold text-[#424245]"
                  >
                    <BadgeCheck className="h-4 w-4 shrink-0 text-[#147a3d]" />
                    {workflow}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="dark-panel py-16 sm:py-24">
          <div className="apple-container">
            <div className="mb-10 max-w-3xl">
              <p className="apple-eyebrow text-[#86868b]">Como funciona</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold text-white sm:text-5xl">
                Escopo fechado, entrega rápida e você no controle.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[28px] border border-white/10 bg-white/6 p-7"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1d1d1f] text-sm font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-[17px] leading-7 text-[#a1a1a6]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="white-panel py-16 sm:py-24">
          <div className="apple-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="apple-eyebrow">Perguntas frequentes</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                As dúvidas que travam antes de começar.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.map(({ icon: Icon, title, text }) => {
                return (
                  <article
                    key={title}
                    className="rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] p-6"
                  >
                    <Icon className="h-5 w-5 text-[#0071e3]" />
                    <h3 className="mt-4 text-lg font-semibold leading-snug">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                      {text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf3ff] py-16 sm:py-20">
          <div className="apple-container flex flex-col gap-6 rounded-[28px] border border-[#b9d7ff] bg-white p-7 shadow-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="apple-eyebrow">Próximo passo</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold">
                Diagnóstico gratuito, sem compromisso.
              </h2>
              <p className="mt-4 text-[17px] leading-7 text-[#6e6e73]">
                Me conte qual processo é manual hoje e onde o atendimento perde
                velocidade. Você recebe de volta escopo, prazo e o pacote
                recomendado — sem enrolação.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-pill inline-flex shrink-0 items-center justify-center gap-2 bg-[#0071e3] px-7 text-[17px] font-semibold text-white transition hover:bg-[#0066cc]"
            >
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "TechTalks Lab IA",
              provider: {
                "@type": "Person",
                name: "Antonio Jebrael",
              },
              areaServed: "Brasil",
              serviceType:
                "Automação com n8n, agentes de IA, WhatsApp e integrações",
              url: "https://antoniojebrael.pro/techtalks-lab",
            }),
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
