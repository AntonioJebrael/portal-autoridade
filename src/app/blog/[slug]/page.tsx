import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BlogArticleHeader } from "@/components/blog-article-header";
import { getAllBlogPosts, getBlogPostBySlug, getBlogPostSlugs } from "@/lib/blog";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Antonio Jebrael`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [post.ogImage],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [post.ogImage],
    },
  };
}

function buildArticleJsonLd(post: Awaited<ReturnType<typeof getBlogPostBySlug>>) {
  if (!post) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Antonio Jebrael",
    },
    publisher: {
      "@type": "Person",
      name: "Antonio Jebrael",
    },
    image: [`https://antoniojebrael.dev${post.ogImage}`],
    keywords: post.tags.join(", "),
    mainEntityOfPage: `https://antoniojebrael.dev/blog/${post.slug}`,
  };
}

function buildWhatsAppHref(title: string) {
  const phoneNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000").replace(
    /\D/g,
    "",
  );
  const message = encodeURIComponent(
    `Ola Antonio! Li seu artigo "${title}" e quero entender como aplicar isso no meu negocio.`,
  );

  return `https://wa.me/${phoneNumber}?text=${message}`;
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Content = post.Content;
  const jsonLd = buildArticleJsonLd(post);
  const relatedPosts = getAllBlogPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="relative noise overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute left-1/2 top-16 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

        <section className="relative px-6 pb-18 pt-30 sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>

            <BlogArticleHeader
              title={post.title}
              description={post.description}
              date={post.date}
              readingTime={post.readingTime}
              tags={post.tags}
            />
          </div>
        </section>

        <section className="relative px-6 pb-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <article className="rounded-[32px] border border-white/[0.08] bg-[#09090b] px-6 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:px-10 sm:py-12">
              <div className="mx-auto max-w-3xl">
                <Content />

                <div className="mt-16 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
                    Proximo passo
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
                    Transforme leitura em uma decisao pratica.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                    Se esse tema conversa com o momento da sua operacao, eu posso te mostrar onde
                    IA, automacao e engenharia entregam retorno mais rapido no seu caso.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppHref(post.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-400"
                    >
                      Falar no WhatsApp
                      <MessageCircle className="h-4 w-4" />
                    </a>
                    <Link
                      href="/#contato"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                    >
                      Ir para contato
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[28px] border border-white/[0.08] bg-[#0a0a0c] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Leitura focada</p>
                <p className="mt-4 text-lg font-semibold text-zinc-50">
                  Artigos feitos para gerar conversa comercial, nao impressao vazia.
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Cada texto aponta para uma aplicacao real no funil, no atendimento ou na
                  operacao.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/[0.08] bg-[#0a0a0c] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Continue lendo</p>
                <div className="mt-5 space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block rounded-2xl border border-white/[0.06] px-4 py-4 transition-all hover:border-blue-400/20 hover:bg-white/[0.03]"
                    >
                      <p className="text-sm font-medium text-zinc-100">{relatedPost.title}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {relatedPost.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {jsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ) : null}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
