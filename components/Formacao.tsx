"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function Formacao() {
  const { t } = useLanguage();
  const items = t.formacao.items;

  return (
    <section id="formacao" className="section-padding relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 leading-tight">
            {t.formacao.title}
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-4 mx-auto block h-[3px] w-20 rounded-full bg-gradient-to-r from-brand-violet via-brand-fuchsia to-brand-cyan"
          />
        </motion.div>

        <div className="space-y-10 sm:space-y-14">
          {items.map((item, i) => (
            <motion.div
              key={item.degree + item.institution}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="grid sm:grid-cols-[14rem_1fr] sm:gap-12 gap-3 items-start"
            >
              <div className="flex items-center gap-4">
                <span className="block w-[2px] h-12 rounded-full bg-gradient-to-b from-brand-violet to-brand-fuchsia shrink-0 shadow-[0_0_12px_rgba(139,92,246,0.5)]" />
                <span className="font-mono text-sm text-zinc-500 tracking-wide">
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 leading-tight">
                  {item.degree}
                </h3>
                <p className="mt-1.5 font-medium text-base sm:text-lg bg-gradient-to-r from-brand-violet to-brand-fuchsia bg-clip-text text-transparent">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
