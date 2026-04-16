import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://antoniojebrael.dev"),
  title: "Antonio Jebrael — Arquiteto de IA",
  description:
    "Engenharia de software e IA para negócios. Automações inteligentes, agentes de IA e consultoria técnica de alto nível.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Antonio Jebrael",
    "Arquiteto de IA",
    "Engenharia de software",
    "Inteligência artificial",
    "Automação",
    "n8n",
    "Consultoria em IA",
    "Next.js",
    "Supabase",
  ],
  authors: [{ name: "Antonio Jebrael" }],
  openGraph: {
    title: "Antonio Jebrael — Arquiteto de IA",
    description:
      "Engenharia de software e IA para negócios. Automações inteligentes e consultoria técnica.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Jebrael — Arquiteto de IA",
    description:
      "Engenharia de software e IA para negócios.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Antonio Jebrael",
              jobTitle: "Arquiteto de IA e engenheiro de software",
              description:
                "Especialista em engenharia de software e IA, criador do ViaPro e do AIOX Framework.",
              knowsAbout: [
                "Inteligência artificial",
                "Engenharia de software",
                "Automação",
                "Next.js",
                "Supabase",
                "n8n",
                "Python",
                "TypeScript",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
