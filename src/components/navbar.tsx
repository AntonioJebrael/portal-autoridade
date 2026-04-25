"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Blog", href: "/blog", external: true },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const resolveHref = (href: string, external?: boolean) => {
    if (external) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const useLightChrome = scrolled || open || pathname !== "/";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        useLightChrome ? "glass-nav text-[#1d1d1f]" : "text-white"
      }`}
    >
      <div className="apple-container flex h-12 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
          aria-label="Antonio Jebrael"
        >
          Antonio Jebrael
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) =>
            link.external ? (
              <Link
                key={link.href}
                href={resolveHref(link.href, link.external)}
                className="rounded-full px-3 py-1.5 text-xs font-medium opacity-78 transition hover:bg-black/5 hover:opacity-100"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                className="rounded-full px-3 py-1.5 text-xs font-medium opacity-78 transition hover:bg-black/5 hover:opacity-100"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href={resolveHref("#contato")}
            className="apple-pill ml-3 inline-flex min-h-8 items-center bg-[#0071e3] px-4 text-xs font-semibold text-white transition hover:bg-[#0066cc]"
          >
            Fale comigo
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#d2d2d7]/70 bg-white/95 px-4 pb-5 pt-2 text-[#1d1d1f] backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-sm space-y-1">
            {links.map((link) =>
              link.external ? (
                <Link
                  key={link.href}
                  href={resolveHref(link.href, link.external)}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[17px] font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[17px] font-medium"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
