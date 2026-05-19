"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Experiencia() {
  const { t } = useLanguage();
  const jobs = t.experiencia.jobs;

  return (
    <section id="experiencia" className="section-padding relative">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-brand-fuchsia mb-3">
            {t.experiencia.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            {t.experiencia.titleA}{" "}
            <span className="gradient-text">{t.experiencia.titleB}</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-violet via-brand-fuchsia to-brand-cyan opacity-40 hidden sm:block" />

          {jobs.map((job, i) => (
            <motion.article
              key={job.role + job.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative sm:pl-16 mb-8 last:mb-0"
            >
              <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br from-brand-violet to-brand-fuchsia items-center justify-center text-white shadow-lg shadow-brand-violet/30">
                <Briefcase size={16} />
              </div>

              <div className="glass card-hover rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">
                      {job.role}
                    </h3>
                    <p className="text-brand-violet font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={12} /> {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed mb-4">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-violet to-brand-fuchsia shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
