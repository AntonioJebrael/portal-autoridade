import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPostSummary } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

type BlogArticleCardProps = {
  post: BlogPostSummary;
};

export function BlogArticleCard({ post }: BlogArticleCardProps) {
  return (
    <article className="group card-hover relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#0a0a0c] p-6 sm:p-7">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-6 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-zinc-500">
        <span>{formatBlogDate(post.date)}</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] tracking-[0.2em] text-zinc-400">
          {post.readingTime}
        </span>
      </div>

      <h2 className="max-w-[18ch] text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[2rem]">
        {post.title}
      </h2>

      <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400 sm:text-[0.98rem]">
        {post.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.72rem] uppercase tracking-[0.22em] text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-all group-hover:gap-3 group-hover:text-white"
      >
        Ler artigo
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
