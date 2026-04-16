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
      <main className="relative noise overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

        <section className="relative px-6 pb-20 pt-32 sm:pb-24 sm:pt-40">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o portal
            </Link>

            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.7fr)] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-blue-300">Blog</p>
                <h1 className="mt-4 max-w-[12ch] text-5xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
                  Conteúdo para gerar demanda com clareza.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                  Artigos pensados para quem quer transformar IA, automação e engenharia em
                  resultado de negócio, não em ruído técnico.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Ritmo editorial
                </p>
                <p className="mt-4 text-2xl font-semibold text-zinc-50">Lista simples, foco alto.</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Sem busca, sem filtros e sem distrações. Só o conteúdo certo para puxar a
                  conversa para WhatsApp ou consultoria.
                </p>
                <Link
                  href="/#contato"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-all hover:gap-3 hover:text-white"
                >
                  Falar sobre uma estratégia de conteúdo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Publicados agora
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-zinc-50 sm:text-3xl">
                  Leituras para destravar ação.
                </h2>
              </div>
              <p className="text-sm text-zinc-500">{posts.length} artigos</p>
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
