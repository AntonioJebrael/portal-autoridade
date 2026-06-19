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
  MessagesSquare,
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
  title: "TechTalks Lab IA — Automações e agentes para WhatsApp, vendas e atendimento",
  description:
    "Landing comercial da TechTalks Lab IA: automações com n8n, agentes de IA, WhatsApp, SDR digital e integrações para PMEs e operações B2B.",
  alternates: {
    canonical: "/techtalks-lab",
  },
  openGraph: {
    title: "TechTalks Lab IA — Automações e agentes para negócios",
    description:
      "Pacotes rápidos de automação, agentes de IA e integrações com n8n para tirar vendas e atendimento do manual.",
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
      "Um fluxo simples para eliminar uma tarefa manual recorrente em planilha, email, formulário, Telegram ou API.",
    items: ["Escopo fechado", "Entrega demonstrável", "Vídeo curto de operação"],
  },
  {
    icon: MessageCircle,
    title: "Agente WhatsApp Starter",
    price: "R$ 997",
    summary:
      "Atendimento inicial com IA para responder dúvidas, capturar leads e avisar o time quando houver oportunidade real.",
    items: ["FAQ + triagem", "Registro de lead", "Alerta para humano"],
    featured: true,
  },
  {
    icon: Workflow,
    title: "Integração n8n Pro",
    price: "R$ 2.497+",
    summary:
      "Automação multi-etapas com classificação, roteamento, CRM, base de conhecimento, dashboard ou integrações de negócio.",
    items: ["10 dias úteis", "Documentação operacional", "Passagem assistida"],
  },
];

const clients = [
  "Consultorias e serviços B2B",
  "Clínicas, estética e saúde privada",
  "Imobiliárias e corretores",
  "Escolas, cursos e mentorias",
  "Operações que vendem por WhatsApp",
  "PMEs com atendimento manual lento",
];

const workflows = [
  "SDR com handoff humano",
  "Classificação de lead com IA",
  "RAG para base de conhecimento",
  "Agente de atendimento IA",
  "Transcrição de áudio WhatsApp",
  "Publicação e rotina de conteúdo",
];

const steps = [
  {
    title: "Diagnóstico do processo",
    text: "Mapeio onde o lead, atendimento ou backoffice trava hoje e defino o menor fluxo vendável.",
  },
  {
    title: "MVP operando",
    text: "Construo a automação com n8n, APIs e IA, priorizando entrega rápida e demonstração clara.",
  },
  {
    title: "Handoff e evolução",
    text: "Documentação curta, orientação operacional e próximos incrementos quando o uso real aparecer.",
  },
];

const channels: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: MessagesSquare,
    title: "Workana e 99Freelas",
    text: "Demanda quente buscando implementação.",
  },
  {
    icon: Route,
    title: "LinkedIn e B2B local",
    text: "Abordagem consultiva por segmento.",
  },
  {
    icon: Bot,
    title: "Instagram",
    text: "Prova visual curta com antes/depois.",
  },
  {
    icon: ShieldCheck,
    title: "Portal próprio",
    text: "Página de confiança para converter indicação.",
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
                Automações e agentes para vender, atender e responder mais rápido.
              </h1>
              <p className="mt-6 max-w-xl text-[19px] leading-8 text-[#d2d2d7]">
                Uma linha comercial dentro do portal Antonio Jebrael para criar
                fluxos com n8n, IA, WhatsApp, CRM, Telegram e APIs sem projeto
                infinito.
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
                  Prova visual real do workspace n8n
                </p>
                <p className="text-xs text-[#a1a1a6]">
                  Fluxos próprios, sem expor credenciais.
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
                Clientes que já têm demanda, mas ainda operam no braço.
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
              <p className="apple-eyebrow">Pacotes comerciais</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                Oferta simples para abrir conversa e fechar rápido.
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
                Fluxos reais, vendáveis e demonstráveis.
              </h2>
              <p className="mt-5 text-[19px] leading-8 text-[#6e6e73]">
                O material comercial usa automações já organizadas no n8n para
                mostrar capacidade prática sem expor chaves, dados privados ou
                detalhes sensíveis do ambiente.
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
              <p className="apple-eyebrow text-[#86868b]">Método</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold text-white sm:text-5xl">
                Construção curta, com escopo e handoff.
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
          <div className="apple-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="apple-eyebrow">Canais de aquisição</p>
              <h2 className="apple-display mt-3 text-4xl font-semibold sm:text-5xl">
                A venda começa onde a dor já aparece.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {channels.map(({ icon: Icon, title, text }) => {
                return (
                  <article
                    key={title}
                    className="rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] p-6"
                  >
                    <Icon className="h-5 w-5 text-[#0071e3]" />
                    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
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
                Diagnóstico de automação sem compromisso longo.
              </h2>
              <p className="mt-4 text-[17px] leading-7 text-[#6e6e73]">
                Envie o processo manual, canais usados e onde o atendimento
                perde velocidade. A resposta vem com escopo, prazo e pacote
                recomendado.
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
