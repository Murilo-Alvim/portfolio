"use client";

import { motion } from "framer-motion";
import { GraduationCap, Layers, Rocket } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "6º período",
    label: "Sistemas de Informação · UNISANTA",
  },
  {
    icon: Layers,
    value: "Full-stack",
    label: "Web, APIs, banco e desktop (.NET)",
  },
  {
    icon: Rocket,
    value: "Foco em produto",
    label: "UX, performance e código limpo",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="section-padding relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-4">
            <p className="font-mono text-sm text-brand-fuchsia mb-3">
              # sobre
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
              Pronto para entregar <br />
              <span className="gradient-text">software de verdade</span>.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              Sou <span className="text-zinc-100 font-medium">Murilo Alvim</span>
              , desenvolvedor full-stack e estudante do{" "}
              <span className="text-zinc-100 font-medium">6º período</span> de
              Sistemas de Informação na{" "}
              <span className="text-zinc-100 font-medium">
                UNISANTA — Universidade Santa Cecília
              </span>
              .
            </p>
            <p>
              Posso atuar em todo o ciclo de uma aplicação: modelar o banco,
              construir APIs REST, desenvolver interfaces responsivas e
              colocar tudo em produção. Trabalho confortavelmente com{" "}
              <span className="text-brand-violet">TypeScript / JavaScript</span>{" "}
              no front e back, com{" "}
              <span className="text-brand-fuchsia">C# / .NET</span> em
              aplicações desktop e backend, e com{" "}
              <span className="text-brand-cyan">SQL</span> em bancos
              relacionais.
            </p>
            <p>
              Estou em busca da minha primeira oportunidade como desenvolvedor
              para somar com um time, aprender com pessoas mais experientes e
              entregar valor desde o primeiro dia.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass card-hover rounded-2xl p-5"
                >
                  <s.icon className="text-brand-violet mb-3" size={22} />
                  <div className="text-zinc-100 font-semibold">{s.value}</div>
                  <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
