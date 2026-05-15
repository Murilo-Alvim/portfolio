"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] bg-brand-violet/40 -top-40 -left-40" />
      <div className="glow-orb w-[450px] h-[450px] bg-brand-fuchsia/30 top-20 -right-32" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-cyan/25 bottom-0 left-1/3" />

      <div className="container-narrow relative z-10 px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 chip mb-8"
        >
          <Sparkles size={14} className="text-brand-fuchsia" />
          <span>Disponível para novas oportunidades</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="block text-zinc-100">Olá, eu sou</span>
          <span className="block gradient-text mt-2">Murilo Alvim</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Desenvolvedor{" "}
          <span className="text-zinc-100 font-medium">full-stack</span> e
          estudante de{" "}
          <span className="text-zinc-100 font-medium">
            Sistemas de Informação
          </span>
          . Construo soluções ponta a ponta com{" "}
          <span className="text-brand-violet">TypeScript</span>,{" "}
          <span className="text-brand-fuchsia">Node.js</span>,{" "}
          <span className="text-brand-cyan">.NET</span> e bancos relacionais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projetos" className="btn-primary">
            Ver projetos <ArrowRight size={16} />
          </a>
          <a href="#contato" className="btn-ghost">
            Entrar em contato
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
              href="https://www.linkedin.com/in/murilo-alvim-a49226313/"
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
          <div className="flex flex-col items-center gap-2 text-zinc-500 text-xs">
            <span className="font-mono uppercase tracking-widest">
              role para ver mais
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-brand-violet/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
