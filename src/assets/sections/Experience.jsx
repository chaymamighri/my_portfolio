import { motion, useReducedMotion } from "motion/react";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const experiences = [
  {
    period: "Feb 2026 — May 2026",
    role: "Web Developer Intern",
    company: "Benjeddou Technologie Services — Remote",
    logo: "/benjeddou.png",
    description:
      "Developed InVera, a cloud-based multi-tenant ERP system for SMEs using React.js, Spring Boot, PostgreSQL, and Flutter. Implemented sales, purchasing, inventory, supplier management, and electronic invoicing modules. Integrated JWT authentication, role-based access control, intelligent notifications, and an intelligent assistant. Developed a Flutter mobile app providing access to selected ERP features.",
  },
  {
    period: "Jan 2025",
    role: "Web Developer Intern",
    company: "Linqubit — Cyber Park Kairouan",
    logo: "/linqubit.png",
    description:
      "Developed a medical appointment management application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Implemented REST APIs, JWT-based authentication, and role-based access control to manage patients and appointments for doctors and secretaries.",
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section-padding relative isolate overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Experience"
          title="My professional journey"
          description="Experiences that helped me build both technical and practical development skills."
        />

        <motion.div
          className="mx-auto max-w-4xl space-y-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
              },
            },
          }}
        >
          {experiences.map((experience) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              variants={{
                hidden: {
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: shouldReduceMotion ? 0 : 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      transition: { duration: 0.22 },
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.99,
                      transition: { duration: 0.15 },
                    }
              }
              className="group relative touch-manipulation rounded-3xl bg-gradient-to-br from-emerald-400/50 via-slate-200 to-blue-400/50 p-px dark:via-slate-800"
            >
              {/* Card content */}
              <div
                className="relative h-full overflow-hidden rounded-[23px] border border-white/80 bg-white/95 p-5 shadow-sm transition-[border-color,box-shadow] duration-300 group-hover:border-emerald-200 group-hover:shadow-xl group-hover:shadow-emerald-500/5 group-active:border-emerald-300 dark:border-slate-800/80 dark:bg-slate-900/95 dark:group-hover:border-emerald-900/70 dark:group-active:border-emerald-800 sm:p-8"
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl transition-colors duration-300 group-hover:bg-emerald-400/20 group-active:bg-emerald-400/20"
                />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                  {/* Company logo */}
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 1.06, rotate: -3 }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 0.92 }
                    }
                    transition={{ duration: 0.2 }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-colors duration-300 group-hover:border-emerald-200 dark:border-slate-700 dark:group-hover:border-emerald-800"
                  >
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Experience details */}
                  <div className="min-w-0 flex-1">
                    {/* Metadata badges */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <motion.span
                        whileTap={
                          shouldReduceMotion
                            ? undefined
                            : { scale: 0.96 }
                        }
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-colors duration-200 group-hover:border-emerald-300 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:group-hover:border-emerald-700"
                      >
                        <CalendarDays
                          size={13}
                          aria-hidden="true"
                        />
                        {experience.period}
                      </motion.span>

                      <motion.span
                        whileTap={
                          shouldReduceMotion
                            ? undefined
                            : { scale: 0.96 }
                        }
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 group-hover:bg-slate-200/80 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-slate-700"
                      >
                        <BriefcaseBusiness
                          size={13}
                          aria-hidden="true"
                        />
                        Internship
                      </motion.span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 sm:text-2xl">
                      {experience.role}
                    </h3>

                    {/* Company */}
                    <p className="mt-1.5 font-medium text-slate-600 transition-colors duration-200 dark:text-slate-300">
                      {experience.company}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
