import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import Button from "../components/Button";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-20 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.10),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.12),_transparent_30%)]" />

      <div className="container-custom flex min-h-[calc(100vh-80px)] items-center py-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =========================
              Left content
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Subtitle */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              Full-Stack Developer · Web & Mobile
            </p>

            {/* Title */}
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
              Hello, I'm{" "}
              <span className="gradient-text">Chayma</span>{" "}
              <span className="font-light text-slate-600 dark:text-slate-400">
                Mighri
              </span>

              <motion.span
                whileHover={{ scale: 1.3, rotate: 180 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="gradient-text ml-1.5 inline-block"
              >
                ✧
              </motion.span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
              I am a Full Stack Developer who turns ideas into modern web and
              mobile applications. I combine clean interfaces, reliable
              backends, and scalable solutions to create meaningful digital
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#projects">View my projects</Button>

              <Button
                href="/CV-Chayma-Mighri.pdf"
                variant="outline"
                download
              >
                Download CV
              </Button>
            </div>

            {/* Social links */}
            <div className="mt-9 flex items-center gap-4">
              <a
                href="https://github.com/chaymamighri"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/chayma-mighri"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* =========================
              Right visual
          ========================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="group flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Glow externe au hover de la carte */}
              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{
                  opacity: 0.7,
                  scale: 1.05,
                }}
                transition={{ duration: 0.4 }}
                className="absolute -inset-6 rounded-[3rem] bg-emerald-400/10 blur-3xl"
              />

            {/* Card */}
<div className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/60 transition-shadow duration-500 group-hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/60 dark:group-hover:shadow-emerald-500/10">

  <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-6 py-7 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/40">

    {/* Avatar */}
    <div className="relative mx-auto aspect-square w-full max-w-[270px]">

      {/* Soft glow */}
      <div className="absolute -inset-5 rounded-full bg-emerald-400/15 blur-3xl" />

      {/* Animated gradient ring */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 8,
          repeat: shouldReduceMotion ? 0 : Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #10b981, #06b6d4, #8b5cf6, #ec4899, #10b981)",
        }}
      />

      {/* White/dark separator */}
      <div className="absolute inset-[5px] rounded-full bg-white dark:bg-slate-900" />

      {/* Photo */}
      <div className="absolute inset-[9px] flex items-center justify-center overflow-hidden rounded-full bg-white shadow-inner dark:bg-slate-900">
        {!imageError ? (
          <img
            src="/my_photo.png"
            alt="Chayma Mighri"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="gradient-text text-8xl font-bold leading-none">
            C
          </span>
        )}
      </div>
    </div>

    {/* Card information */}
    <div className="mt-6 text-center">

      {/* Availability */}
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-slate-900/70 dark:text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for work
      </span>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {[
          "React",
          "Node.js",
          "Spring Boot",
          "MongoDB",
          "PostgreSQL",
          "Flutter",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  </div>
</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}