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
    <header className="apple-card px-6 py-10 sm:px-10 sm:py-14">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">
        <span>{formatBlogDate(date)}</span>
        <span className="h-1 w-1 rounded-full bg-[#86868b]" />
        <span>{readingTime}</span>
      </div>

      <h1 className="apple-display max-w-[14ch] text-4xl font-semibold text-[#1d1d1f] sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-[19px] leading-8 text-[#6e6e73]">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#e8f2ff] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#0066cc]"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
