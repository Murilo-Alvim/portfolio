"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      onMouseMove={handleMove}
      className="group relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] bg-brand-violet/40 -top-40 -left-40" />
      <div className="glow-orb w-[450px] h-[450px] bg-brand-fuchsia/30 top-20 -right-32" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-cyan/25 bottom-0 left-1/3" />

      <div
        aria-hidden
        className="pointer-events-none absolute hidden md:block w-[600px] h-[600px] rounded-full opacity-0 group-hover:opacity-100 transition-[opacity,left,top] duration-300 ease-out"
        style={{
          left: "var(--mx, -50%)",
          top: "var(--my, -50%)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(217,70,239,0.20), rgba(139,92,246,0.10) 35%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      <div className="container-narrow relative z-10 px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 chip mb-8"
        >
          <Sparkles size={14} className="text-brand-fuchsia" />
          <span>{t.hero.available}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-bold tracking-tight leading-[1.05]"
        >
          <span className="block text-zinc-400 text-2xl sm:text-3xl font-medium">
            {t.hero.greeting}
          </span>
          <span className="block gradient-text mt-3 text-5xl sm:text-7xl lg:text-8xl">
            Murilo Alvim
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-xl sm:text-2xl text-zinc-300 font-light tracking-wide"
        >
          {t.hero.role}{" "}
          <span className="font-semibold">{t.hero.roleHighlight}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projetos" className="btn-primary">
            {t.hero.ctaProjects} <ArrowRight size={16} />
          </a>
          <a href="#contato" className="btn-ghost">
            {t.hero.ctaContact}
          </a>
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com/Murilo-Alvim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:border-brand-violet/60 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/murilo-francisco-alvim-a49226313/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-300 hover:text-white hover:border-brand-violet/60 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#sobre"
            aria-label={t.hero.scroll}
            className="group inline-flex items-center justify-center w-12 h-12 rounded-full text-brand-violet hover:text-brand-fuchsia transition-colors"
          >
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="drop-shadow-[0_0_12px_rgba(139,92,246,0.55)] group-hover:drop-shadow-[0_0_14px_rgba(217,70,239,0.6)] transition-[filter]"
            >
              <ChevronDown size={34} strokeWidth={2.25} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
