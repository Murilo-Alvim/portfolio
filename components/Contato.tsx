"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "muriloalvim16@gmail.com",
    href: "mailto:muriloalvim16@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Murilo-Alvim",
    href: "https://github.com/Murilo-Alvim",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/murilo-alvim",
    href: "https://www.linkedin.com/in/murilo-alvim-a49226313/",
  },
];

export default function Contato() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="section-padding relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 0%, rgba(139,92,246,0.18), transparent 55%), radial-gradient(120% 120% at 100% 100%, rgba(34,211,238,0.18), transparent 55%), rgba(15,15,20,0.7)",
            border: "1px solid rgba(139,92,246,0.18)",
          }}
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-violet/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-fuchsia/30 rounded-full blur-3xl" />

          <div className="relative">
            <p className="font-mono text-sm text-brand-fuchsia mb-3">
              {t.contato.tag}
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-100 leading-tight">
              {t.contato.titleA} <br />
              <span className="gradient-text">{t.contato.titleB}</span>
            </h2>
            <p className="mt-5 text-zinc-300 max-w-xl mx-auto text-base sm:text-lg">
              {t.contato.subtitle}
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="glass card-hover rounded-2xl p-5 text-left group"
                >
                  <c.icon className="text-brand-violet mb-3" size={20} />
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-mono">
                    {c.label}
                  </div>
                  <div className="mt-1 text-zinc-100 font-medium text-sm break-all">
                    {c.value}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.contato.open} <ArrowRight size={12} />
                  </div>
                </a>
              ))}
            </div>

            <a
              href="mailto:muriloalvim16@gmail.com"
              className="btn-primary mt-10"
            >
              {t.contato.send} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
