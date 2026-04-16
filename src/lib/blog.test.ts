import { describe, expect, it } from "vitest";
import sitemap from "../app/sitemap";
import { getAllBlogPosts, getBlogPostSlugs } from "./blog";

describe("blog content source", () => {
  it("loads the seed posts from the content directory", () => {
    const posts = getAllBlogPosts();
    const slugs = posts.map((post) => post.slug);
    const titles = posts.map((post) => post.title);

    expect(posts.length).toBeGreaterThanOrEqual(2);
    expect(slugs).toContain("o-que-e-vibe-coding-e-por-que-voce-deveria-adotar");
    expect(slugs).toContain("como-automatizar-seu-negocio-com-n8n");
    expect(titles).toContain(
      "Como a Inteligencia Artificial Transforma o Atendimento de Vendas no WhatsApp",
    );
    expect(titles).toContain(
      "Automatizando Processos Internos: Como Escalar sua Empresa sem Aumentar a Equipe",
    );
  });

  it("exposes the same slugs used for static generation", () => {
    const posts = getAllBlogPosts();
    const slugs = getBlogPostSlugs();

    expect(slugs).toEqual(posts.map((post) => post.slug));
  });

  it("extends the sitemap with blog routes", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain("https://antoniojebrael.dev/blog");
    expect(urls).toContain(
      "https://antoniojebrael.dev/blog/o-que-e-vibe-coding-e-por-que-voce-deveria-adotar",
    );
    expect(urls).toContain(
      "https://antoniojebrael.dev/blog/como-automatizar-seu-negocio-com-n8n",
    );
  });
});
