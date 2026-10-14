
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "InVera ERP",
    category: "Full Stack · ERP · SaaS",
    description:
      "Cloud-based multi-tenant ERP solution for SMEs, featuring sales, purchasing, supplier management, inventory tracking, electronic invoicing, intelligent notifications, and an AI-powered assistant, with a complementary Flutter mobile application.",
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
   /* github: "https://github.com/chaymamighri/InVera.git",*/
  },
  {
    title: "Medical Appointment Management",
    category: "Full Stack · MERN",
    description:
      "A web application designed to digitize medical office workflows, manage patient records and appointments, and simplify scheduling for doctors and secretaries.",
    images: [
      "/projects/medical_office/medical1.png",
      "/projects/medical_office/medical2.png",
      "/projects/medical_office/medical3.png",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github:
      "https://github.com/chaymamighri/gestion_RendezVous_medicale.git",
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
    technologies: ["Flutter", "Dart", "PHP", "MySQL", "REST API"],
    github: "https://github.com/chaymamighri/services_domicile.git",
  },
];

function ImageCarousel({ images, title, reduceMotion }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = () => {
    setCurrent((previous) => (previous + 1) % total);
  };

  const prev = () => {
    setCurrent((previous) => (previous - 1 + total) % total);
  };

  return (
    <div className="relative w-full bg-slate-50/80 p-3 dark:bg-slate-950/60 sm:p-4">
      {/* Screenshot frame */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-700/80 dark:bg-slate-900">
        <img
          src={images[current]}
          alt={`${title} — screenshot ${current + 1} of ${total}`}
          className={`absolute inset-0 h-full w-full object-contain ${
            reduceMotion
              ? ""
              : "transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          }`}
          loading="lazy"
        />

        {/* Image counter */}
        {total > 1 && (
          <span className="absolute right-3 top-3 z-10 rounded-full border border-white/60 bg-white/90 px-2.5 py-1 text-xs font-medium tabular-nums text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200">
            {current + 1} / {total}
          </span>
        )}

        {/* Previous / next controls */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label={`Previous screenshot of ${title}`}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-slate-800 shadow-md transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900/95 dark:text-white dark:hover:border-emerald-700 dark:hover:bg-emerald-950/80 dark:hover:text-emerald-400"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={`Next screenshot of ${title}`}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-slate-800 shadow-md transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900/95 dark:text-white dark:hover:border-emerald-700 dark:hover:bg-emerald-950/80 dark:hover:text-emerald-400"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Carousel indicators */}
      {total > 1 && (
        <div
          className="mt-3 flex items-center justify-center gap-1.5"
          aria-label="Choose a screenshot"
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show screenshot ${index + 1} of ${title}`}
              aria-current={current === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
                current === index
                  ? "w-6 bg-emerald-600 dark:bg-emerald-400"
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="section-padding relative isolate overflow-hidden bg-slate-50/70 dark:bg-slate-950"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/5" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl dark:bg-teal-500/5" />
      </div>

      <div className="container-custom">
        <SectionTitle
          eyebrow="Projects"
          title="Some things I've built"
          description="Projects that demonstrate my experience in web, backend, mobile and business applications."
        />

        <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: { duration: 0.2 },
                    }
              }
              className="group relative flex h-full flex-col rounded-3xl p-px"
            >
              {/* Gradient border */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-teal-400/15 to-cyan-400/30 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Card content */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] border border-slate-200/70 bg-white/95 shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-emerald-900/5 dark:border-slate-800/80 dark:bg-slate-900/95 dark:group-hover:shadow-emerald-500/5">
                <ImageCarousel
                  images={project.images}
                  title={project.title}
                  reduceMotion={shouldReduceMotion}
                />

                {/* Project details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  {project.github && (
                    <div className="mt-auto pt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 dark:focus-visible:ring-offset-slate-900"
                      >
                        <FaGithub size={16} />
                        View source code
                        <ExternalLink size={14} />
                      </a>
                    </div>
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
