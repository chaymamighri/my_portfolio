import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const experiences = [
  {
    period: "Feb 2026 — May 2026",
    role: "Web Developer Intern",
    company: "Benjeddou Technologie Services",
    description:
      "Development of InVera, a cloud ERP solution for PMEs, with React, Spring Boot, PostgreSQL and Flutter.",
  },
  {
    period: "Jan 2025",
    role: "Web Developer Intern",
    company: "Linqubit — Cyber Park Kairouan",
    description:
      "Development of a medical appointment management application with MERN, REST APIs and JWT authentication.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  {experience.period}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {experience.role}
                </h3>

                <p className="mt-1 font-medium text-slate-600">
                  {experience.company}
                </p>

                <p className="mt-4 leading-7 text-slate-500">
                  {experience.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}