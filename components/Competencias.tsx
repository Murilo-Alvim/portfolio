"use client";

import { motion } from "framer-motion";
import { Code2, Boxes, Database, Cog } from "lucide-react";

const groups = [
  {
    title: "Linguagens",
    icon: Code2,
    color: "from-brand-violet to-brand-fuchsia",
    items: [
      "TypeScript",
      "JavaScript",
      "C# / .NET",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Bibliotecas",
    icon: Boxes,
    color: "from-brand-fuchsia to-brand-cyan",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "ASP.NET",
      "Prisma",
      "TailwindCSS",
      "TanStack Query",
    ],
  },
  {
    title: "Banco & Infra",
    icon: Database,
    color: "from-brand-cyan to-brand-emerald",
    items: ["PostgreSQL", "Neon", "REST APIs", "JWT", "Vercel", "Render", "Git", "GitHub"],
  },
  {
    title: "Práticas",
    icon: Cog,
    color: "from-brand-violet to-brand-cyan",
    items: [
      "Clean Code",
      "Tipagem estrita",
      "Validação ponta-a-ponta",
      "Componentização",
      "Versionamento Git",
      "Acessibilidade",
    ],
  },
];

export default function Competencias() {
  return (
    <section id="competencias" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      <div className="container-narrow relative">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-brand-fuchsia mb-3">
            # competências
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            O que eu trago para a{" "}
            <span className="gradient-text">mesa</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Linguagens, frameworks e práticas que uso para construir e entregar
            software de qualidade.
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
