import { Lightbulb, Code2, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const cards = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    text: "I enjoy analyzing problems and developing practical solutions that meet user needs.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "Hands-on experience in web and mobile development using React, Java, Spring Boot, Flutter, and other technologies listed in my Tech Stack section.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    text: "Motivated to explore new technologies and continuously improve my development skills.",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-padding relative isolate overflow-hidden bg-slate-50/70 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/5" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl dark:bg-teal-500/5" />
      </div>

      <div className="container-custom">
        {/* Section heading */}
        <SectionTitle
          eyebrow="About me"
          title="Turning ideas into practical digital solutions."
          description="Information Systems Development graduate passionate about full-stack web and mobile development."
        />

        {/* Personal introduction */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I&apos;m a graduate with a Bachelor&apos;s degree in Information
            Systems Development.
            <br />
            <span className="mt-3 inline-block">
              Through academic projects and internship experiences,
              I&apos;ve gained practical experience in web and mobile
              development, backend integration, and database management.
              I&apos;m currently seeking a Junior Full-Stack Developer
              opportunity where I can apply my skills, contribute to
              real-world projects, and continue growing professionally.
            </span>
          </p>
        </motion.div>

        {/* Personal qualities */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.1 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                className="group relative h-full rounded-3xl p-px"
              >
                {/* Gradient border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-teal-400/15 to-cyan-400/30 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Card content */}
                <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1px)] border border-slate-200/70 bg-white/95 p-7 shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-emerald-900/5 dark:border-slate-800/80 dark:bg-slate-900/95 dark:group-hover:shadow-emerald-500/5 sm:p-8">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center self-start rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 transition-colors duration-300 group-hover:border-emerald-200 dark:border-emerald-900/60 dark:from-emerald-950/60 dark:to-teal-950/40 dark:text-emerald-400 dark:group-hover:border-emerald-700/70">
                    <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                    {card.text}
                  </p>

                  {/* Decorative accent */}
                  <div
                    aria-hidden="true"
                    className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 group-hover:w-16"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}