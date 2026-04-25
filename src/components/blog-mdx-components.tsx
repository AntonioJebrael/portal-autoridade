import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { ArrowRight, Info, Sparkles } from "lucide-react";

type CalloutTone = "info" | "action";

type CalloutProps = {
  title: string;
  tone?: CalloutTone;
  children: React.ReactNode;
};

const toneStyles: Record<CalloutTone, { shell: string; icon: string; Icon: typeof Info }> = {
  info: {
    shell: "border-[#d2d2d7] bg-[#f5f5f7]",
    icon: "text-[#0066cc]",
    Icon: Info,
  },
  action: {
    shell: "border-[#b8d7ff] bg-[#e8f2ff]",
    icon: "text-[#0066cc]",
    Icon: Sparkles,
  },
};

function Callout({ title, tone = "info", children }: CalloutProps) {
  const { shell, icon, Icon } = toneStyles[tone];

  return (
    <aside className={`my-10 rounded-3xl border px-5 py-5 sm:px-6 ${shell}`}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#1d1d1f]">
        <Icon className={`h-4 w-4 ${icon}`} />
        <span>{title}</span>
      </div>
      <div className="text-sm leading-7 text-[#424245]">{children}</div>
    </aside>
  );
}

function InlineCode(props: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className="rounded-md border border-[#d2d2d7] bg-[#f5f5f7] px-1.5 py-0.5 font-mono text-[0.92em] text-[#0066cc]"
    />
  );
}

function Pre(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      {...props}
      className="my-8 overflow-x-auto rounded-[28px] bg-[#1d1d1f] p-5 text-sm leading-7 text-[#f5f5f7] shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
    />
  );
}

function Link(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className="inline-flex items-center gap-1 text-[#0066cc] underline decoration-[#0066cc]/20 underline-offset-4 transition-colors hover:text-[#0071e3]"
    />
  );
}

function buildWhatsAppHref(message?: string) {
  const phoneNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000"
  ).replace(/\D/g, "");
  const text = encodeURIComponent(
    message ||
      "Olá Antonio! Li seu artigo e quero entender como aplicar isso no meu negócio."
  );

  return `https://wa.me/${phoneNumber}?text=${text}`;
}

export const blogMdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 {...props} className="mt-12 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl" />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-14 border-t border-[#d2d2d7] pt-10 text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl"
    />
  ),
  h3: (props) => <h3 {...props} className="mt-10 text-xl font-semibold text-[#1d1d1f] sm:text-2xl" />,
  p: (props) => <p {...props} className="mt-6 text-[1.02rem] leading-8 text-[#424245]" />,
  ul: (props) => <ul {...props} className="mt-6 space-y-3 pl-6 text-[#424245]" />,
  ol: (props) => <ol {...props} className="mt-6 space-y-3 pl-6 text-[#424245]" />,
  li: (props) => <li {...props} className="pl-1 leading-8 marker:text-[#0071e3]" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="my-8 rounded-r-3xl border-l-2 border-[#0071e3] bg-[#f5f5f7] px-6 py-4 text-lg italic text-[#1d1d1f]"
    />
  ),
  hr: () => <hr className="my-12 border-[#d2d2d7]" />,
  pre: Pre,
  code: InlineCode,
  a: Link,
  strong: (props) => <strong {...props} className="font-semibold text-[#1d1d1f]" />,
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
        className="apple-pill mt-6 inline-flex items-center gap-2 bg-[#0071e3] px-5 text-sm font-semibold text-white transition hover:bg-[#0066cc]"
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  },
};
