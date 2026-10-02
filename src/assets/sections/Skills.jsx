import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "REST API", "JWT"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    title: "Mobile & Tools",
    skills: ["Flutter", "Dart", "Git", "GitHub", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          description="A practical stack covering frontend, backend, mobile development and development tools."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}