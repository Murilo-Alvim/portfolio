"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const projectMeta = [
  {
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "React Flow",
      "TailwindCSS",
    ],
    image: "/projects/processmap.png",
    repoUrl: "https://github.com/Murilo-Alvim/case-processos",
    liveUrl: "https://case-processos.vercel.app/",
  },
  {
    stack: [
      "React",
      "Vite.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "TailwindCSS",
    ],
    image: "/projects/catalogo.png",
    repoUrl: "https://github.com/Murilo-Alvim/catalogo-produtos",
    liveUrl: "https://catalogo-produtos-flame.vercel.app/",
  },
  {
    stack: ["Next.js", "React", "TailwindCSS", "EmailJS"],
    image: "/projects/dra-carla.png",
    repoUrl: "https://github.com/Murilo-Alvim/dra-carla",
    liveUrl: "https://dra-carla.vercel.app/",
  },
];

export default function Projetos() {
  const { t } = useLanguage();

  const projects = t.projetos.items.map((p, i) => ({
    ...p,
    ...projectMeta[i],
  }));

  return (
    <section id="projetos" className="section-padding relative">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-brand-fuchsia mb-3">
            {t.projetos.tag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 inline-flex flex-col items-center">
            {t.projetos.title}
            <span className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand-violet via-brand-fuchsia to-brand-cyan" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-elevated">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={t.projetos.previewAlt(p.title)}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                  {p.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm flex-1">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-brand-cyan/40 text-brand-cyan bg-brand-cyan/[0.04] transition-colors hover:bg-brand-cyan/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-bg-border/60 flex items-center gap-4">
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-brand-cyan transition-colors"
                    aria-label={t.projetos.repoAria(p.title)}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-brand-cyan transition-colors"
                    aria-label={t.projetos.liveAria(p.title)}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
