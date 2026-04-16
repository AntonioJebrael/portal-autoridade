import { formatBlogDate } from "@/lib/blog";

type BlogArticleHeaderProps = {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export function BlogArticleHeader({
  title,
  description,
  date,
  readingTime,
  tags,
}: BlogArticleHeaderProps) {
  return (
    <header className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0a0a0c] px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_42%)]" />
      <div className="relative">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-zinc-500">
          <span>{formatBlogDate(date)}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span>{readingTime}</span>
        </div>

        <h1 className="max-w-[14ch] text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{description}</p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-400/15 bg-blue-500/10 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.24em] text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
