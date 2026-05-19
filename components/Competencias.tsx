"use client";

import { motion } from "framer-motion";
import { Code2, Boxes, Database, Cog } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const meta = [
  { icon: Code2, color: "from-brand-violet to-brand-fuchsia" },
  { icon: Boxes, color: "from-brand-fuchsia to-brand-cyan" },
  { icon: Database, color: "from-brand-cyan to-brand-emerald" },
  { icon: Cog, color: "from-brand-violet to-brand-cyan" },
];

export default function Competencias() {
  const { t } = useLanguage();

  const groups = t.competencias.groups.map((g, i) => ({
    ...g,
    icon: meta[i].icon,
    color: meta[i].color,
  }));

  return (
    <section id="competencias" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      <div className="container-narrow relative">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-brand-fuchsia mb-3">
            {t.competencias.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            {t.competencias.titleA}{" "}
            <span className="gradient-text">{t.competencias.titleB}</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            {t.competencias.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${g.color} flex items-center justify-center text-white`}
                >
                  <g.icon size={16} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {g.title}
                </span>
              </div>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-300 flex items-center gap-2"
                  >
                    <span
                      className={`w-1 h-1 rounded-full bg-gradient-to-r ${g.color}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
