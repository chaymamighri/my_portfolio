import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import Button from "../components/Button";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.10),_transparent_30%)]" />

      <div className="container-custom flex min-h-[calc(100vh-80px)] items-center py-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Sous-titre au-dessus */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              Full-Stack Developer · Web & Mobile
            </p>

            {/* Titre */}
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
              Hello, I'm{" "}
              <span className="gradient-text">Chayma</span>{" "}
              <span className="font-light text-slate-500 dark:text-slate-400">
                Mighri
              </span>
              <motion.span
                whileHover={{ scale: 1.3, rotate: 180 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="gradient-text ml-1.5 inline-block"
              >
                ✧
              </motion.span>
            </h1>

            {/* Description personnalisée */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl dark:text-slate-400">
              I turn ideas into working web and mobile apps — designing clean
              interfaces, building reliable backends, and shipping products
              that actually work.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#projects">View my projects</Button>

              <Button href="/CV-Chayma-Mighri.pdf" variant="outline">
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

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[3rem] bg-emerald-400/10 blur-3xl" />

              {/* Card */}
              <div className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/60">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/40">

                  {/* Avatar avec photo + fallback lettre C */}
                  <div className="mx-auto flex aspect-square max-w-[280px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 p-1 shadow-xl">
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white dark:bg-slate-900">
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

                  {/* Text */}
                  <div className="mt-7 text-center">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      Chayma{" "}
                      <span className="text-slate-900 dark:text-white">
                        Mighri
                      </span>
                    </p>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Full-Stack Developer · Web & Mobile
                    </p>

                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                      React · Node.js · Express · Spring Boot · Flutter
                    </p>
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