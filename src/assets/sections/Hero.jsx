import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import Button from "../components/Button";

const technologies = [
  "React.js",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Flutter",
];

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-white pt-20 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-500/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_55%)]" />
      </div>

      <div className="container-custom relative z-10 flex min-h-[calc(100vh-80px)] items-center py-14 sm:py-16 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 xl:gap-16">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.12,
                },
              },
            }}
            className="text-center lg:text-left"
          >
            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400 sm:text-sm sm:tracking-[0.22em]"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              Full-Stack Developer · Web & Mobile
            </motion.p>

           
<motion.h1
  variants={fadeUp}
  className="mx-auto max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:mx-0 lg:text-6xl xl:text-7xl"
>
  Hi, I&apos;m{" "}
  <span className="gradient-text">Chayma</span>{" "}
  <span className="font-medium text-slate-600 dark:text-slate-300">
    Mighri
  </span>
  <motion.span
    whileHover={
      shouldReduceMotion
        ? undefined
        : { scale: 1.25, rotate: 180 }
    }
    transition={{
      type: "spring",
      stiffness: 350,
      damping: 15,
    }}
    className="gradient-text ml-2 inline-block cursor-default"
    aria-hidden="true"
  >
    ✧
  </motion.span>
</motion.h1>


            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8 lg:mx-0"
            >
              I build modern web and mobile applications by combining clean
              interfaces, reliable backends, and scalable solutions to create
              useful digital experiences.
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
            >
              <Button href="#projects" iconType="ArrowDownLeft">
                View my projects
              </Button>

              <Button
                href="/CV-Chayma-Mighri.pdf"
                variant="outline"
                download
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href="https://github.com/chaymamighri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-colors duration-200 hover:border-emerald-400 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400 dark:focus-visible:ring-offset-slate-950"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/in/chayma-mighri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-colors duration-200 hover:border-emerald-400 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400 dark:focus-visible:ring-offset-slate-950"
              >
                <FaLinkedin size={19} />
              </a>

              <span className="ml-1 text-sm text-slate-500 dark:text-slate-400">
                Connect with me
              </span>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: "easeOut",
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="group relative w-full max-w-[390px]">
              {/* Subtle background glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/15 via-teal-400/10 to-cyan-400/15 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
              />

              {/* Profile card */}
              <div
                className={`relative rounded-[2rem] border border-slate-200/80 bg-white/90 p-4 shadow-xl shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 ease-out dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20 sm:p-5 ${
                  shouldReduceMotion
                    ? ""
                    : "group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-emerald-900/10 dark:group-hover:shadow-emerald-500/5"
                }`}
              >
                <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-7 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/40 sm:px-6 sm:py-8">
                  {/* Profile photo */}
                  <div className="relative mx-auto aspect-square w-full max-w-[250px] sm:max-w-[270px]">
                    {/* Soft photo glow */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-3 rounded-full bg-emerald-400/20 blur-2xl dark:bg-emerald-400/10"
                    />

                    {/* Gradient border */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#10b981,#14b8a6,#06b6d4,#10b981)] p-[3px]"
                    >
                      <div className="h-full w-full rounded-full bg-white dark:bg-slate-900" />
                    </div>

                    {/* Photo container */}
                    <div className="absolute inset-[7px] overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md dark:border-slate-900 dark:bg-slate-800">
                      {!imageError ? (
                        <img
                          src="/my_photo.png"
                          alt="Portrait of Chayma Mighri"
                          onError={() => setImageError(true)}
                          className={`h-full w-full object-cover ${
                            shouldReduceMotion
                              ? ""
                              : "transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          }`}
                          fetchPriority="high"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="gradient-text text-8xl font-bold">
                            C
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Profile information */}
                  <div className="mt-7 text-center">
                    {/* Availability indicator */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/90 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-slate-900/90 dark:text-emerald-400">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-emerald-500"
                      />
                      Available for work
                    </div>

                    <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                      Chayma Mighri
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Full-Stack Developer
                    </p>

                    {/* Technology tags */}
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
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
