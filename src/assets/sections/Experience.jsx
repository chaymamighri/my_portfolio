import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const experiences = [
  {
    period: "Feb 2026 — May 2026",
    role: "Web Developer Intern",
    company: "Benjeddou Technologie Services",
    logo: "/benjeddou.png",
    description:
      "Developed InVera, a cloud-based ERP solution for PMEs, using React.js, Spring Boot, PostgreSQL, and Flutter, featuring a multi-tenant architecture and an intelligent assistant.",
  },
  {
    period: "Jan 2025",
    role: "Web Developer Intern",
    company: "Linqubit — Cyber Park Kairouan",
    logo: "/linqubit.png",
    description:
      "Developed a medical appointment management application using the MERN stack, REST APIs, and JWT authentication",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-slate-950"
    >
      <div className="container-custom">
        <SectionTitle
          eyebrow="Experience"
          title="My professional journey"
          description="Experiences that helped me build both technical and practical development skills."
        />

        <div className="mx-auto max-w-4xl space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-slate-200
                bg-white p-6 shadow-sm transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                dark:border-slate-800 dark:bg-slate-900
                sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {/* Company logo */}
                <div className="flex h-16 w-16 shrink-0 items-center
                  justify-center overflow-hidden rounded-2xl
                  border border-slate-200 bg-white p-2
                  shadow-sm dark:border-slate-700"
                >
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Experience details */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-emerald-50 px-3 py-1
                      text-xs font-semibold text-emerald-700
                      dark:bg-emerald-400/10 dark:text-emerald-400"
                    >
                      {experience.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900
                    transition-colors group-hover:text-emerald-600
                    dark:text-white dark:group-hover:text-emerald-400"
                  >
                    {experience.role}
                  </h3>

                  <p className="mt-1 font-medium text-slate-600
                    dark:text-slate-300"
                  >
                    {experience.company}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-500
                    dark:text-slate-400 sm:text-base"
                  >
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
