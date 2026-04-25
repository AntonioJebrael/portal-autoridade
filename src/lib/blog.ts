import { cache } from "react";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { ComponentType } from "react";

export type BlogFrontmatter = {
  titulo: string;
  descricao: string;
  data: string;
  etiquetas: string[];
  imagem_capa: string;
};

export type BlogPostSummary = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type BlogPost = BlogPostSummary & {
  Content: ComponentType<Record<string, unknown>>;
};

const BLOG_DIRECTORY = path.join(process.cwd(), "src", "content", "blog");

function formatReadingTime(minutes: number) {
  const rounded = Math.max(1, Math.round(minutes));
  return `${rounded} min de leitura`;
}

function compareByDateDesc(a: BlogPostSummary, b: BlogPostSummary) {
  return new Date(b.data).getTime() - new Date(a.data).getTime();
}

function parsePostFile(filename: string): BlogPostSummary {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(BLOG_DIRECTORY, filename);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  const frontmatter = data as Partial<BlogFrontmatter>;

  if (
    !frontmatter.titulo ||
    !frontmatter.descricao ||
    !frontmatter.data ||
    !Array.isArray(frontmatter.etiquetas) ||
    !frontmatter.imagem_capa
  ) {
    throw new Error(`Invalid frontmatter in blog post: ${filename}`);
  }

  return {
    titulo: frontmatter.titulo,
    descricao: frontmatter.descricao,
    data: frontmatter.data,
    etiquetas: frontmatter.etiquetas,
    imagem_capa: frontmatter.imagem_capa,
    slug,
    readingTime: formatReadingTime(readingTime(content).minutes),
  };
}

export const getAllBlogPosts = cache(() => {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(parsePostFile)
    .sort(compareByDateDesc);
});

export const getBlogPostSlugs = cache(() => {
  return getAllBlogPosts().map((post) => post.slug);
});

export const getBlogPostBySlug = cache(async (slug: string) => {
  const summary = getAllBlogPosts().find((post) => post.slug === slug);

  if (!summary) {
    return null;
  }

  const postModule = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: ComponentType<Record<string, unknown>>;
  };

  return {
    ...summary,
    Content: postModule.default,
  } satisfies BlogPost;
});

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
