import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { ArrowRight, Info, Sparkles } from "lucide-react";

type CalloutTone = "info" | "action";

type CalloutProps = {
  title: string;
  tone?: CalloutTone;
  children: React.ReactNode;
};

const toneStyles: Record<CalloutTone, { border: string; icon: string; Icon: typeof Info }> = {
  info: {
    border: "border-cyan-400/20 bg-cyan-500/[0.08]",
    icon: "text-cyan-300",
    Icon: Info,
  },
  action: {
    border: "border-blue-400/20 bg-blue-500/[0.08]",
    icon: "text-blue-300",
    Icon: Sparkles,
  },
};

function Callout({ title, tone = "info", children }: CalloutProps) {
  const { border, icon, Icon } = toneStyles[tone];

  return (
    <aside className={`my-10 rounded-3xl border px-5 py-5 sm:px-6 ${border}`}>
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-100">
        <Icon className={`h-4 w-4 ${icon}`} />
        <span>{title}</span>
      </div>
      <div className="text-sm leading-7 text-zinc-300">{children}</div>
    </aside>
  );
}

function InlineCode(props: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className="rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[0.92em] text-blue-200"
    />
  );
}

function Pre(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      {...props}
      className="my-8 overflow-x-auto rounded-[28px] border border-white/10 bg-[#08080b] p-5 text-sm leading-7 text-zinc-200 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
    />
  );
}

function Link(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="inline-flex items-center gap-1 text-blue-300 underline decoration-white/10 underline-offset-4 transition-colors hover:text-white"
    />
  );
}

function buildWhatsAppHref(message?: string) {
  const phoneNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000").replace(
    /\D/g,
    "",
  );
  const text = encodeURIComponent(
    message ||
      "Olá Antonio! Li seu artigo e quero entender como aplicar isso no meu negócio.",
  );

  return `https://wa.me/${phoneNumber}?text=${text}`;
}

export const blogMdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 {...props} className="mt-12 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl" />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-14 border-t border-white/[0.06] pt-10 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl"
    />
  ),
  h3: (props) => <h3 {...props} className="mt-10 text-xl font-semibold text-zinc-100 sm:text-2xl" />,
  p: (props) => <p {...props} className="mt-6 text-[1.02rem] leading-8 text-zinc-300" />,
  ul: (props) => <ul {...props} className="mt-6 space-y-3 pl-6 text-zinc-300" />,
  ol: (props) => <ol {...props} className="mt-6 space-y-3 pl-6 text-zinc-300" />,
  li: (props) => <li {...props} className="pl-1 leading-8 marker:text-blue-300" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="my-8 rounded-r-3xl border-l-2 border-blue-400/40 bg-white/[0.02] px-6 py-4 text-lg italic text-zinc-100"
    />
  ),
  hr: () => <hr className="my-12 border-white/[0.08]" />,
  pre: Pre,
  code: InlineCode,
  a: Link,
  strong: (props) => <strong {...props} className="font-semibold text-zinc-50" />,
  Callout,
  CTAInline: ({
    href,
    kind = "link",
    message,
    children,
  }: {
    href?: string;
    kind?: "link" | "whatsapp";
    message?: string;
    children: React.ReactNode;
  }) => {
    const resolvedHref = kind === "whatsapp" ? buildWhatsAppHref(message) : href;

    if (!resolvedHref) {
      throw new Error("CTAInline requires href for link mode");
    }

    return (
      <a
        href={resolvedHref}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition-all hover:gap-3 hover:bg-blue-500/15 hover:text-white"
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  },
};
