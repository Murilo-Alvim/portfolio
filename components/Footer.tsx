"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-bg-border/60 py-10 px-6">
      <div className="container-narrow flex flex-col items-center gap-8">
        <button
          onClick={scrollToTop}
          aria-label={t.footer.backToTop}
          className="group inline-flex items-center gap-2 h-10 px-4 rounded-full border border-bg-border/70 bg-bg-elevated/40 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-zinc-100 hover:border-brand-violet/60 transition-colors"
        >
          <ArrowUp
            size={14}
            className="text-brand-fuchsia transition-transform group-hover:-translate-y-0.5"
          />
          <span>{t.footer.backToTop}</span>
        </button>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Murilo Alvim · {t.footer.builtWith}{" "}
          <span className="text-brand-fuchsia" aria-label={t.footer.coffeeAria}>
            ☕
          </span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Murilo-Alvim"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/murilo-alvim-a49226313/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:muriloalvim16@gmail.com"
            className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
