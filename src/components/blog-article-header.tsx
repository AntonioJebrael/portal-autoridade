import { formatBlogDate } from "@/lib/blog";

type BlogArticleHeaderProps = {
  titulo: string;
  descricao: string;
  data: string;
  readingTime: string;
  etiquetas: string[];
};

export function BlogArticleHeader({
  titulo,
  descricao,
  data,
  readingTime,
  etiquetas,
}: BlogArticleHeaderProps) {
  return (
    <header className="apple-card px-6 py-10 sm:px-10 sm:py-14">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">
        <span>{formatBlogDate(data)}</span>
        <span className="h-1 w-1 rounded-full bg-[#86868b]" />
        <span>{readingTime}</span>
      </div>

      <h1 className="apple-display max-w-[14ch] text-4xl font-semibold text-[#1d1d1f] sm:text-5xl lg:text-6xl">
        {titulo}
      </h1>

      <p className="mt-6 max-w-3xl text-[19px] leading-8 text-[#6e6e73]">
        {descricao}
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {etiquetas.map((etiqueta) => (
          <span
            key={etiqueta}
            className="rounded-full bg-[#e8f2ff] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#0066cc]"
          >
            {etiqueta}
          </span>
        ))}
      </div>
    </header>
  );
}
