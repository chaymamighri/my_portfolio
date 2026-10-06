import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "InVera ERP",
    category: "Full Stack · ERP · SaaS",
    description:
      "Cloud ERP solution for PMEs covering sales, purchases, suppliers, stock, e-invoicing, intelligent assistant and notifications.",
    images: [
      "/projects/invera/invera.png",
      "/projects/invera/invera1.png",
       "/projects/invera/inveraLog.png",
      "/projects/invera/invera2.png",
      "/projects/invera/invera3.png",
      "/projects/invera/invera4.png",
    ],
    technologies: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Flutter",
      "JWT",
      "OpenRouter",
    ],
    github: "https://github.com/chaymamighri/InVera.git",
  },
  {
    title: "Medical Appointment Management",
    category: "Full Stack · MERN",
    description:
      "A web application designed to manage patients and appointments while replacing paper-based processes.",
    images: [
      "/projects/medical_office/medical1.png",
      "/projects/medical_office/medical2.png",
      "/projects/medical_office/medical3.png",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/chaymamighri/gestion_RendezVous_medicale.git",
  },
 {
  title: "AlloMaison — Home Services App",
  category: "Mobile Application · Flutter",
  description:
    "Mobile application developed with Flutter that allows users to browse and book home services such as plumbing, electricity, cleaning, painting, gardening, and babysitting. Includes administration features for managing providers, services, and reservations.",
  images: [
    "/projects/alloMaison/AlloMaison.png",
    "/projects/alloMaison/AlloMaison1.png",
    "/projects/alloMaison/AlloMaison2.png",
    "/projects/alloMaison/AlloMaison3.png",
    "/projects/alloMaison/AlloMaison4.png",
  ],
  technologies: [
    "Flutter",
    "Dart",
    "PHP",
    "MySQL",
    "REST API",
  ],
  github: "https://github.com/chaymamighri/services_domicile.git",
},
];

// Carrousel d'images (sans badge)
function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative aspect-video w-full bg-slate-100 p-3 dark:bg-slate-800/50">
      {/* 📸 Cadre autour du screenshot */}
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner dark:border-slate-700 dark:bg-slate-900">
        <img
          src={images[current]}
          alt={`${title} - aperçu ${current + 1}`}
          className="absolute inset-0 h-full w-full object-contain"
          loading="lazy"
        />

        {/* Flèches */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Image précédente"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md transition hover:bg-white hover:scale-110 dark:bg-slate-900/95 dark:text-white"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Image suivante"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md transition hover:bg-white hover:scale-110 dark:bg-slate-900/95 dark:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Points indicateurs — EN DEHORS du cadre image */}
      {total > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current
                  ? "w-5 bg-emerald-600 dark:bg-emerald-400"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-slate-50/70 dark:bg-slate-950"
    >
      <div className="container-custom">
        <SectionTitle
          eyebrow="Projects"
          title="Some things I've built"
          description="Projects that demonstrate my experience in web, backend, mobile and business applications."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-950/60"
            >
              {/* 🎠 Carrousel */}
              <ImageCarousel
                images={project.images}
                title={project.title}
              />

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {project.category}
                </p>

                <h3 className="mt-1.5 text-lg font-bold leading-snug text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                {project.github && (
                  <div className="mt-auto pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600"
                    >
                      <FaGithub size={15} />
                      Code
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}