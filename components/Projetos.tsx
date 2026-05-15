"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Network,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  icon: typeof Network;
  accent: string;
  image: string;
  repoUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "ProcessMap",
    subtitle: "Mapeamento de processos empresariais",
    description:
      "Plataforma full-stack para mapear áreas, processos e subprocessos de uma organização em hierarquia ilimitada, com visualização interativa em fluxograma e dashboard analítico.",
    highlights: [
      "Hierarquia infinita de processos com algoritmo de layout próprio",
      "Visualização em fluxograma interativo (React Flow)",
      "Dashboard com métricas agregadas em tempo real",
      "Validação ponta-a-ponta com Zod e transações Prisma",
    ],
    stack: [
      "Next.js / React",
      "TypeScript",
      "Node.js + Express",
      "Prisma",
      "PostgreSQL",
      "React Flow",
      "TailwindCSS",
    ],
    icon: Network,
    accent: "from-brand-violet to-brand-fuchsia",
    image: "/projects/processmap.png",
    repoUrl: "https://github.com/Murilo-Alvim/case-processos",
    liveUrl: "#",
  },
  {
    title: "Catálogo de Produtos",
    subtitle: "CRUD com autenticação JWT",
    description:
      "Aplicação full-stack para gerenciamento de catálogo de produtos com sistema de autenticação completo (cadastro, login e sessão), construída com foco em segurança e organização.",
    highlights: [
      "Autenticação JWT com bcrypt para hash de senhas",
      "CRUD completo de produtos protegido por middleware",
      "Sessão persistente via Context API + localStorage",
      "Interceptor Axios para inclusão automática do token",
    ],
    stack: [
      "React + Vite",
      "Node.js + Express",
      "PostgreSQL (Neon)",
      "JWT",
      "bcrypt",
      "TailwindCSS",
    ],
    icon: ShoppingBag,
    accent: "from-brand-fuchsia to-brand-cyan",
    image: "/projects/catalogo.png",
    repoUrl: "https://github.com/Murilo-Alvim/catalogo-produtos",
    liveUrl: "#",
  },
  {
    title: "Dra. Carla",
    subtitle: "Landing page profissional",
    description:
      "Landing page institucional para uma profissional da área da saúde, com 8 seções (hero, sobre, especialidades, serviços, depoimentos e contato) e formulário integrado por email.",
    highlights: [
      "Design responsivo e mobile-first",
      "Integração com EmailJS para envio de mensagens",
      "Componentização limpa em React Server Components",
      "Otimização de imagens e fontes via next/image e next/font",
    ],
    stack: ["Next.js 14", "React", "TailwindCSS", "EmailJS"],
    icon: Stethoscope,
    accent: "from-brand-cyan to-brand-emerald",
    image: "/projects/dra-carla.png",
    repoUrl: "https://github.com/Murilo-Alvim/dra-carla",
    liveUrl: "#",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="section-padding relative">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-brand-fuchsia mb-3">
            # projetos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Coisas que eu <span className="gradient-text">construí</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Cada projeto foi pensado de ponta a ponta — modelagem, API,
            interface e deploy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`glass card-hover rounded-2xl overflow-hidden flex flex-col ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden bg-gradient-to-br ${p.accent}`}
                style={{ aspectRatio: i === 0 ? "21/9" : "16/10" }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  <p.icon size={i === 0 ? 96 : 64} strokeWidth={1.2} />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`Preview do projeto ${p.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/95 via-bg-surface/20 to-transparent pointer-events-none" />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center text-white shrink-0`}
                    >
                      <p.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-xs text-brand-violet font-mono mt-0.5">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
                      aria-label="Repositório no GitHub"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
                      aria-label="Demo ao vivo"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed">{p.description}</p>

                <ul className="mt-5 space-y-2 flex-1">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2.5 text-sm text-zinc-300 leading-relaxed"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.accent} shrink-0`}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-bg-border/60 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
