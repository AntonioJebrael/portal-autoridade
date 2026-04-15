import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://antoniojebrael.dev"),
  title: "Antonio Jebrael — The AI Architect",
  description:
    "Engenharia de Software e IA para negócios. Automações inteligentes, agentes SDR e consultoria técnica de alto nível.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Antonio Jebrael",
    "AI Architect",
    "Engenharia de Software",
    "Inteligência Artificial",
    "Automação",
    "n8n",
    "Consultoria IA",
    "Next.js",
    "Supabase",
  ],
  authors: [{ name: "Antonio Jebrael" }],
  openGraph: {
    title: "Antonio Jebrael — The AI Architect",
    description:
      "Engenharia de Software e IA para negócios. Automações inteligentes e consultoria técnica.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Jebrael — The AI Architect",
    description:
      "Engenharia de Software e IA para negócios.",
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
              jobTitle: "AI Architect & Software Engineer",
              description:
                "Especialista em Engenharia de Software e IA, criador do Viapro e AIOX Framework.",
              knowsAbout: [
                "Artificial Intelligence",
                "Software Engineering",
                "Automation",
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
