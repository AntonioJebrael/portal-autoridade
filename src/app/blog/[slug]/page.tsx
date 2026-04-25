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
    title: `${post.titulo} | Antonio Jebrael`,
    description: post.descricao,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.titulo,
      description: post.descricao,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.data,
      images: [post.imagem_capa],
    },
    twitter: {
      title: post.titulo,
      description: post.descricao,
      images: [post.imagem_capa],
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
    headline: post.titulo,
    description: post.descricao,
    datePublished: post.data,
    author: {
      "@type": "Person",
      name: "Antonio Jebrael",
    },
    publisher: {
      "@type": "Person",
      name: "Antonio Jebrael",
    },
    image: [`https://antoniojebrael.dev${post.imagem_capa}`],
    keywords: post.etiquetas.join(", "),
    mainEntityOfPage: `https://antoniojebrael.dev/blog/${post.slug}`,
  };
}

function buildWhatsAppHref(title: string) {
  const phoneNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000").replace(
    /\D/g,
    "",
  );
  const message = encodeURIComponent(
    `Olá Antonio! Li seu artigo "${title}" e quero entender como aplicar isso no meu negócio.`,
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
      <main className="light-panel overflow-hidden">
        <section className="px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#424245] transition-colors hover:text-[#0066cc]"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o blog
            </Link>

            <BlogArticleHeader
              titulo={post.titulo}
              descricao={post.descricao}
              data={post.data}
              readingTime={post.readingTime}
              etiquetas={post.etiquetas}
            />
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <article className="apple-card px-6 py-8 sm:px-10 sm:py-12">
              <div className="mx-auto max-w-3xl">
                <Content />

                <div className="mt-16 rounded-[28px] bg-[#f5f5f7] p-6 sm:p-8">
                  <p className="apple-eyebrow text-[#0066cc]">
                    Próximo passo
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-[#1d1d1f]">
                    Transforme leitura em uma decisão prática.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e6e73]">
                    Se esse tema conversa com o momento da sua operação, eu posso te mostrar onde
                    IA, automação e engenharia entregam retorno mais rápido no seu caso.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppHref(post.titulo)}
                      target="_blank"
                      rel="noreferrer"
                      className="apple-pill inline-flex items-center justify-center gap-2 bg-[#0071e3] px-5 text-sm font-semibold text-white transition hover:bg-[#0066cc]"
                    >
                      Falar no WhatsApp
                      <MessageCircle className="h-4 w-4" />
                    </a>
                    <Link
                      href="/#contato"
                      className="apple-pill inline-flex items-center justify-center gap-2 border border-[#d2d2d7] px-5 text-sm font-semibold text-[#1d1d1f] transition hover:border-[#86868b]"
                    >
                      Ir para contato
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[28px] bg-white p-6 shadow-[0_14px_42px_rgba(0,0,0,0.05)]">
                <p className="apple-eyebrow">Leitura focada</p>
                <p className="mt-4 text-lg font-semibold text-[#1d1d1f]">
                  Artigos feitos para gerar conversa comercial, não impressão vazia.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6e6e73]">
                  Cada texto aponta para uma aplicação real no funil, no atendimento ou na
                  operação.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-6 shadow-[0_14px_42px_rgba(0,0,0,0.05)]">
                <p className="apple-eyebrow">Continue lendo</p>
                <div className="mt-5 space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block rounded-2xl border border-[#d2d2d7] px-4 py-4 transition hover:border-[#0071e3]/35"
                    >
                      <p className="text-sm font-semibold text-[#1d1d1f]">{relatedPost.titulo}</p>
                      <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                        {relatedPost.descricao}
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
