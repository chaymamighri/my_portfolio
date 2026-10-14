
import { GraduationCap, CalendarDays, BookOpen } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const education = [
  {
    degree:
      "Professional Master's Degree in Software Engineering and Rapid Application Development",
    school:
      "Higher Institute of Technological Studies of Sousse (ISET Sousse)",
    period: "2026 — 2027",
    status: "In Progress",
    description:
      "Application design and development, software architecture, agile methodologies, and advanced study of modern software development technologies.",
  },
  {
    degree:
      "Bachelor's Degree in Information Technology — Information Systems Development",
    school:
      "Higher Institute of Technological Studies of Kairouan (ISET Kairouan)",
    period: "2023 — 2026",
    status: "Completed",
    description:
      "Web and mobile application development, object-oriented programming, database management, and information systems design through practical projects.",
  },
  {
    degree: "High School Diploma in Experimental Sciences",
    school: "Ibn Sina High School — Nasrallah, Kairouan",
    period: "2023",
    status: "Completed",
    description: "",
  },
];

export default function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden
        bg-slate-50/70 dark:bg-slate-950"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20
          h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10
          h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Education"
          title="Academic Background"
          description="My academic journey and the foundations of my technical skills."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 22 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              className="group relative rounded-3xl p-px
                bg-gradient-to-br from-emerald-400/50
                via-slate-200 to-blue-400/50
                dark:via-slate-800"
            >
              <div
                className="relative flex h-full gap-4 rounded-[23px]
                  border border-white/80 bg-white/95 p-5 shadow-sm
                  transition-all duration-300
                  group-hover:shadow-xl
                  group-hover:shadow-emerald-500/5
                  dark:border-slate-800/80 dark:bg-slate-900/95
                  sm:gap-5 sm:p-7"
              >
                {/* Education icon */}
                <div
                  className="flex h-12 w-12 shrink-0 items-center
                    justify-center rounded-2xl
                    border border-emerald-100
                    bg-gradient-to-br from-emerald-50 to-blue-50
                    text-emerald-600
                    transition-transform duration-300
                    group-hover:scale-105
                    dark:border-emerald-400/10
                    dark:from-emerald-400/10 dark:to-blue-400/10
                    dark:text-emerald-400"
                >
                  <GraduationCap size={24} aria-hidden="true" />
                </div>

                {/* Education details */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5
                        rounded-full border border-emerald-200/70
                        bg-emerald-50 px-3 py-1.5 text-xs
                        font-semibold text-emerald-700
                        dark:border-emerald-400/20
                        dark:bg-emerald-400/10
                        dark:text-emerald-400"
                    >
                      <CalendarDays size={13} aria-hidden="true" />
                      {item.period}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs
                        font-medium ${
                          item.status === "In Progress"
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-400"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3
                    className="mt-3 text-base font-bold leading-relaxed
                      text-slate-900 transition-colors duration-300
                      group-hover:text-emerald-600
                      dark:text-white
                      dark:group-hover:text-emerald-400
                      sm:text-lg"
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="mt-2 flex items-start gap-2 text-sm
                      font-medium leading-6 text-slate-600
                      dark:text-slate-300"
                  >
                    <BookOpen
                      size={16}
                      className="mt-1 shrink-0 text-emerald-600
                        dark:text-emerald-400"
                      aria-hidden="true"
                    />
                    <span>{item.school}</span>
                  </p>

                  {item.description && (
                    <p
                      className="mt-3 text-sm leading-7
                        text-slate-500 dark:text-slate-400"
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
