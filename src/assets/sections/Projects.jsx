import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "InVera ERP",
    category: "Full Stack · ERP · SaaS",
    description:
      "Cloud ERP solution for PMEs covering sales, purchases, suppliers, stock, e-invoicing, intelligent assistant and notifications.",
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Flutter",
      "JWT",
      "OpenRouter",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Medical Appointment Management",
    category: "Full Stack · MERN",
    description:
      "A web application designed to manage patients and appointments while replacing paper-based processes.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    gradient: "from-teal-500 to-cyan-400",
  },
  {
    title: "Training Center Payroll",
    category: "Academic Project",
    description:
      "Payroll management application with OCR support for extracting banking information from documents.",
    technologies: ["React", "Node.js","Express.js", "MongoDB", "JWT", "Tesseract.js"],
    gradient: "from-emerald-600 to-green-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50/70">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Projects"
          title="Some things I've built"
          description="Projects that demonstrate my experience in web, backend, mobile and business applications."
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div
                className={`relative h-56 bg-gradient-to-br ${project.gradient} p-6`}
              >
                <div className="absolute inset-6 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm" />

                <div className="relative flex h-full items-end">
                  <div>
                    <p className="text-sm font-medium text-white/80">
                      {project.category}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-7 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600"
                  >
                    Live
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}