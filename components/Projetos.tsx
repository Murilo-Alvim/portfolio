"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const CARD_GAP = 24; // matches Tailwind gap-6

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
  {
    stack: ["Next.js", "TypeScript", "React", "TailwindCSS"],
    image: "/projects/sabor-arte.png",
    repoUrl: "",
    liveUrl: "https://menu-delta-liard.vercel.app/",
  },
];

export default function Projetos() {
  const { t } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const projects = t.projetos.items.map((p, i) => ({
    ...p,
    ...projectMeta[i],
  }));

  const measure = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return null;
    const card = el.querySelector("article") as HTMLElement | null;
    if (!card) return null;
    return { el, step: card.offsetWidth + CARD_GAP };
  }, []);

  const scrollByCard = (dir: -1 | 1) => {
    const m = measure();
    if (!m) return;
    m.el.scrollBy({ left: m.step * dir, behavior: "smooth" });
  };

  const scrollToIndex = (idx: number) => {
    const m = measure();
    if (!m) return;
    m.el.scrollTo({ left: m.step * idx, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const m = measure();
      if (!m) return;
      const cardsPerView = Math.max(1, Math.round(m.el.clientWidth / m.step));
      const pages = Math.max(1, projects.length - cardsPerView + 1);
      setPageCount(pages);

      const idx = Math.round(m.el.scrollLeft / m.step);
      setActiveIndex(Math.max(0, Math.min(pages - 1, idx)));
      setCanPrev(m.el.scrollLeft > 8);
      setCanNext(
        m.el.scrollLeft + m.el.clientWidth < m.el.scrollWidth - 8
      );
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [measure, projects.length]);

  return (
    <section id="projetos" className="section-padding relative">
      <div className="container-narrow">
        <div className="flex items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="text-center sm:text-left flex-1 sm:flex-initial">
            <p className="font-mono text-sm text-brand-fuchsia mb-3">
              {t.projetos.tag}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 inline-flex flex-col items-center sm:items-start">
              {t.projetos.title}
              <span className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand-violet via-brand-fuchsia to-brand-cyan" />
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 pb-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label={t.projetos.prevAria}
              className="w-11 h-11 rounded-full border border-bg-border/70 bg-bg-elevated/40 flex items-center justify-center text-zinc-300 hover:text-zinc-100 hover:border-brand-violet/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label={t.projetos.nextAria}
              className="w-11 h-11 rounded-full border border-bg-border/70 bg-bg-elevated/40 flex items-center justify-center text-zinc-300 hover:text-zinc-100 hover:border-brand-violet/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-16 lg:px-16 touch-pan-x overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] glass card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-elevated">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={t.projetos.previewAlt(p.title)}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
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
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-brand-cyan transition-colors"
                      aria-label={t.projetos.repoAria(p.title)}
                    >
                      <Github size={20} />
                    </a>
                  )}
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

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={t.projetos.dotAria(i + 1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-8 bg-gradient-to-r from-brand-violet to-brand-fuchsia"
                  : "w-2 bg-bg-border hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
