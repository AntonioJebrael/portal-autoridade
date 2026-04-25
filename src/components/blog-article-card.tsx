import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPostSummary } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

type BlogArticleCardProps = {
  post: BlogPostSummary;
};

export function BlogArticleCard({ post }: BlogArticleCardProps) {
  return (
    <article className="apple-card group flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.1)]">
      <div className="mb-7 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">
        <span>{formatBlogDate(post.data)}</span>
        <span className="rounded-full border border-[#d2d2d7] px-3 py-1 text-[0.7rem] tracking-[0.12em]">
          {post.readingTime}
        </span>
      </div>

      <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight text-[#1d1d1f]">
        {post.titulo}
      </h2>

      <p className="mt-4 flex-1 text-[17px] leading-7 text-[#6e6e73]">
        {post.descricao}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {post.etiquetas.map((etiqueta) => (
          <span
            key={etiqueta}
            className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#424245]"
          >
            {etiqueta}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="apple-link mt-8 inline-flex items-center gap-2 text-sm"
      >
        Ler artigo
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
