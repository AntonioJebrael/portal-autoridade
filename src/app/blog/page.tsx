import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BlogArticleCard } from "@/components/blog-article-card";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Antonio Jebrael",
  description:
    "Artigos sobre IA aplicada, automação e engenharia para transformar leitura em ação comercial.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Antonio Jebrael",
    description:
      "Artigos sobre IA aplicada, automação e engenharia para transformar leitura em ação comercial.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    title: "Blog | Antonio Jebrael",
    description:
      "Artigos sobre IA aplicada, automação e engenharia para transformar leitura em ação comercial.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Navbar />
      <main className="light-panel overflow-hidden">
        <section className="px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#424245] transition-colors hover:text-[#0066cc]"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o portal
            </Link>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.7fr)] lg:items-end">
              <div>
                <p className="apple-eyebrow text-[#0066cc]">Blog</p>
                <h1 className="apple-display mt-4 max-w-[12ch] text-5xl font-semibold text-[#1d1d1f] sm:text-6xl">
                  Conteúdo para gerar demanda com clareza.
                </h1>
                <p className="mt-6 max-w-2xl text-[19px] leading-8 text-[#6e6e73]">
                  Artigos pensados para quem quer transformar IA, automação e
                  engenharia em resultado de negócio, não em ruído técnico.
                </p>
              </div>

              <div className="rounded-[30px] bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.06)]">
                <p className="apple-eyebrow">Ritmo editorial</p>
                <p className="mt-4 text-2xl font-semibold text-[#1d1d1f]">
                  Lista simples, foco alto.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">
                  Sem busca, sem filtros e sem distrações. Só o conteúdo certo
                  para puxar a conversa para WhatsApp ou consultoria.
                </p>
                <Link
                  href="/#contato"
                  className="apple-link mt-6 inline-flex items-center gap-2 text-sm"
                >
                  Falar sobre uma estratégia de conteúdo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="apple-eyebrow">Publicados agora</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#1d1d1f]">
                  Leituras para destravar ação.
                </h2>
              </div>
              <p className="text-sm font-medium text-[#6e6e73]">
                {posts.length} artigos
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post) => (
                <BlogArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
