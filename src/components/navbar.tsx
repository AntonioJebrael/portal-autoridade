"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Blog", href: "/blog", external: true },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Tecnologias", href: "#stack" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const resolveHref = (href: string, external?: boolean) => {
    if (external) {
      return href;
    }

    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">AJ</span>
          </div>
          <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors hidden sm:inline">
            Antonio Jebrael
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            link.external ? (
              <Link
                key={link.href}
                href={resolveHref(link.href, link.external)}
                className="px-3.5 py-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                className="px-3.5 py-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href={resolveHref("#contato")}
            className="ml-3 px-4 py-2 text-sm font-medium text-white bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all"
          >
            Fale comigo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/[0.04] px-6 py-4 space-y-1">
          {links.map((link) => (
            link.external ? (
              <Link
                key={link.href}
                href={resolveHref(link.href, link.external)}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href={resolveHref("#contato")}
            onClick={() => setOpen(false)}
            className="block px-3 py-2.5 text-sm font-medium text-primary"
          >
            Fale comigo
          </a>
        </div>
      )}
    </nav>
  );
}
