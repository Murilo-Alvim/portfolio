"use client";

import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const links = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#competencias", label: t.nav.competencias },
    { href: "#formacao", label: t.nav.formacao },
    { href: "#experiencia", label: t.nav.experiencia },
    { href: "#projetos", label: t.nav.projetos },
    { href: "#contato", label: t.nav.contato },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangButton = ({ className = "" }: { className?: string }) => (
    <button
      onClick={toggle}
      aria-label={t.nav.langToggleAria}
      className={`inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-bg-border/70 bg-bg-elevated/40 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-zinc-100 hover:border-brand-violet/60 transition-colors ${className}`}
    >
      <Languages size={14} className="text-brand-fuchsia" />
      <span className={lang === "pt" ? "text-zinc-100" : "text-zinc-500"}>
        PT
      </span>
      <span className="text-zinc-600">/</span>
      <span className={lang === "en" ? "text-zinc-100" : "text-zinc-500"}>
        EN
      </span>
    </button>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/70 backdrop-blur-md border-b border-bg-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between h-16 px-6 md:px-10 lg:px-16">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="gradient-text">{"<"}</span>
          <span className="text-zinc-100">murilo</span>
          <span className="text-brand-fuchsia">.</span>
          <span className="text-zinc-400">dev</span>
          <span className="gradient-text">{"/>"}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-brand-violet to-brand-fuchsia transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <LangButton />
          <a href="#contato" className="btn-primary text-sm">
            {t.nav.cta}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LangButton />
          <button
            className="text-zinc-200 p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.nav.menu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-bg-border/60 bg-bg-base/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-zinc-300 hover:text-zinc-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm w-fit"
            >
              {t.nav.cta}
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
