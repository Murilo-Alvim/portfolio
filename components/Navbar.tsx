"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#competencias", label: "Competências" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <a href="#contato" className="hidden md:inline-flex btn-primary text-sm">
          Vamos conversar
        </a>

        <button
          className="md:hidden text-zinc-200 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
              Vamos conversar
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
