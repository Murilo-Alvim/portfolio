"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [GraduationCap, Briefcase, Sparkles];

export default function Sobre() {
  const { lang, t } = useLanguage();

  const stats = t.sobre.stats.map((s, i) => ({ ...s, icon: icons[i] }));

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
              {t.sobre.tag}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight inline-flex flex-col">
              {t.sobre.title}
              <span className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand-violet via-brand-fuchsia to-brand-cyan" />
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 relative w-56 h-56 sm:w-64 sm:h-64"
            >
              <div className="absolute -inset-3 rounded-full bg-brand-violet/25 blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/murilo.png"
                alt="Murilo Alvim"
                className="relative w-full h-full object-cover rounded-full ring-4 ring-brand-violet shadow-[0_0_40px_rgba(139,92,246,0.45)]"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  el.parentElement?.classList.add(
                    "before:content-['Adicione_public/murilo.png']",
                    "before:absolute",
                    "before:inset-0",
                    "before:rounded-full",
                    "before:bg-bg-elevated",
                    "before:ring-4",
                    "before:ring-brand-violet/40",
                    "before:flex",
                    "before:items-center",
                    "before:justify-center",
                    "before:text-xs",
                    "before:text-zinc-500",
                    "before:text-center",
                    "before:px-4"
                  );
                }}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
            {lang === "pt" ? (
              <>
                <p>
                  Sou{" "}
                  <span className="text-zinc-100 font-medium">
                    Murilo Alvim
                  </span>
                  , desenvolvedor em formação e estudante do{" "}
                  <span className="text-zinc-100 font-medium">
                    6º período
                  </span>{" "}
                  de Sistemas de Informação na{" "}
                  <span className="text-zinc-100 font-medium">
                    UNISANTA — Universidade Santa Cecília
                  </span>
                  . Atuo como{" "}
                  <span className="text-zinc-100 font-medium">
                    Jovem Aprendiz no Hospital Sírio-Libanês
                  </span>
                  , uma das instituições de saúde mais reconhecidas do país,
                  onde vivencio diariamente um ambiente corporativo exigente,
                  dinâmico e que demanda postura profissional desde o primeiro
                  dia.
                </p>

                <p>
                  Encaro cada projeto como uma oportunidade de aprender algo
                  novo e entregar valor de verdade. Gosto de entender o
                  problema antes de partir para a solução, prezo por
                  organização, clareza e atenção ao detalhe — porque acredito
                  que escolhas pequenas se acumulam e definem a qualidade do
                  resultado final. Valorizo decisões bem pensadas, processos
                  estruturados e o cuidado em comunicar o que é feito.
                </p>

                <p>
                  Sou comunicativo, colaborativo e movido por curiosidade.
                  Acredito que bons produtos nascem do diálogo entre quem
                  constrói, quem usa e quem decide, por isso prezo trabalho em
                  equipe e troca constante de feedback. Tenho facilidade para
                  me adaptar a novos contextos, busco aprender com pessoas
                  mais experientes e estou pronto para contribuir com energia,
                  comprometimento e visão de futuro desde o primeiro dia.
                </p>
              </>
            ) : (
              <>
                <p>
                  I'm{" "}
                  <span className="text-zinc-100 font-medium">
                    Murilo Alvim
                  </span>
                  , a developer in training and a{" "}
                  <span className="text-zinc-100 font-medium">
                    6th-semester
                  </span>{" "}
                  Information Systems student at{" "}
                  <span className="text-zinc-100 font-medium">
                    UNISANTA — Universidade Santa Cecília
                  </span>
                  . I work as a{" "}
                  <span className="text-zinc-100 font-medium">
                    Young Apprentice at Hospital Sírio-Libanês
                  </span>
                  , one of the most respected healthcare institutions in the
                  country, where I experience daily a demanding, dynamic
                  corporate environment that calls for professionalism from
                  day one.
                </p>

                <p>
                  I treat every project as a chance to learn something new and
                  deliver real value. I like to understand the problem before
                  jumping to the solution, and I care about organization,
                  clarity and attention to detail — because I believe small
                  choices add up and define the quality of the final result.
                  I value well-thought-out decisions, structured processes,
                  and clearly communicating what's being done.
                </p>

                <p>
                  I'm communicative, collaborative and driven by curiosity. I
                  believe great products come from the dialogue between those
                  who build, those who use and those who decide, which is why
                  I value teamwork and constant feedback. I adapt easily to
                  new contexts, learn from more experienced people, and I'm
                  ready to contribute with energy, commitment and a
                  forward-looking mindset from day one.
                </p>
              </>
            )}

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
                  {s.icon ? (
                    <s.icon className="text-brand-violet mb-3" size={22} />
                  ) : null}
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
