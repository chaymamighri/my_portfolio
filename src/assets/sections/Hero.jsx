
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
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  // Un tour à gauche, une pause, puis un tour à droite.
  const starAnimation = shouldReduceMotion
    ? { rotate: 0, scale: 1 }
    : {
        rotate: [0, -360, -360, 0],
        scale: [1, 1.1, 1.1, 1],
        transition: {
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: ["easeInOut", "linear", "easeInOut"],
            times: [0, 0.42, 0.52, 1],
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

  // Flottement et inclinaison subtils de la card.
  const cardAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -5, 0, 5, 0],
        rotate: [0, 1.2, 0, -1.2, 0],
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  // Halo lumineux doux en arrière-plan.
  const glowAnimation = shouldReduceMotion
    ? {}
    : {
        opacity: [0.55, 0.9, 0.55],
        scale: [1, 1.04, 1],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen w-full
        overflow-x-clip bg-white pt-20
        dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
          -z-10 overflow-hidden"
      >
        <div
          className="absolute -right-24 -top-24 h-64 w-64
            rounded-full bg-emerald-300/20 blur-3xl
            sm:-right-32 sm:-top-32 sm:h-96 sm:w-96
            dark:bg-emerald-500/10"
        />

        <div
          className="absolute -bottom-24 -left-24 h-64 w-64
            rounded-full bg-teal-300/20 blur-3xl
            sm:-bottom-32 sm:-left-32 sm:h-96 sm:w-96
            dark:bg-teal-500/10"
        />

        <div
          className="absolute inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.06),transparent_55%)]
            dark:bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_55%)]"
        />
      </div>

      {/* Main container */}
      <div
        className="container-custom relative z-10 mx-auto
          flex min-h-[calc(100svh-80px)] w-full
          items-center py-10 sm:py-14 lg:py-16"
      >
        <div
          className="grid w-full min-w-0 grid-cols-1
            items-center gap-10 sm:gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-10 xl:gap-16"
        >
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="min-w-0 text-center lg:text-left"
          >
            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="mb-5 flex w-full flex-wrap
                items-center justify-center gap-x-2 gap-y-1
                text-center text-[11px] font-semibold
                uppercase leading-relaxed tracking-[0.12em]
                text-emerald-700 dark:text-emerald-400
                sm:text-xs sm:tracking-[0.18em]
                lg:justify-start lg:text-sm
                lg:tracking-[0.2em]"
            >
              <motion.span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full
                  bg-emerald-500"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: [1, 0.5, 1] }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span>
                Full-Stack Developer · Web &amp; Mobile
              </span>
            </motion.p>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="mx-auto max-w-3xl text-4xl
                font-bold leading-[1.12] tracking-tight
                text-slate-900 dark:text-white
                sm:text-5xl md:text-6xl
                lg:mx-0 lg:text-6xl xl:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Chayma</span>{" "}
              <span
                className="font-medium text-slate-600
                  dark:text-slate-300"
              >
                Mighri
              </span>

              {/* Star rotation */}
              <motion.span
                animate={starAnimation}
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.25 }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 1.4 }
                }
                className="gradient-text ml-1 inline-block
                  cursor-pointer sm:ml-2"
                aria-hidden="true"
              >
                ✧
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl
                text-sm leading-7 text-slate-600
                dark:text-slate-300
                sm:mt-6 sm:text-base sm:leading-8
                lg:mx-0 lg:text-lg"
            >
              I build modern web and mobile applications
              by combining clean interfaces, reliable
              backends, and scalable solutions to create
              useful digital experiences.
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap
                items-center justify-center gap-3
                sm:mt-8 sm:gap-4 lg:justify-start"
            >
              <motion.div
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.96 }
                }
                className="max-w-full"
              >
                <Button
                  href="#projects"
                  iconType="ArrowDownLeft"
                >
                  View my projects
                </Button>
              </motion.div>

              <motion.div
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.96 }
                }
                className="max-w-full"
              >
                <Button
                  href="/CV-Chayma-Mighri.pdf"
                  variant="outline"
                  download
                >
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap
                items-center justify-center gap-3
                sm:mt-8 lg:justify-start"
            >
              <motion.a
                href="https://github.com/chaymamighri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -3, scale: 1.05 }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 0.92 }
                }
                className="inline-flex h-11 w-11 shrink-0
                  items-center justify-center rounded-full
                  border border-slate-200 bg-white/80
                  text-slate-600 shadow-sm
                  transition-colors duration-200
                  hover:border-emerald-400 hover:text-emerald-600
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-emerald-500
                  dark:border-slate-700 dark:bg-slate-900/80
                  dark:text-slate-300 dark:hover:border-emerald-500
                  dark:hover:text-emerald-400"
              >
                <FaGithub size={19} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/chayma-mighri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -3, scale: 1.05 }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 0.92 }
                }
                className="inline-flex h-11 w-11 shrink-0
                  items-center justify-center rounded-full
                  border border-slate-200 bg-white/80
                  text-slate-600 shadow-sm
                  transition-colors duration-200
                  hover:border-emerald-400 hover:text-emerald-600
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-emerald-500
                  dark:border-slate-700 dark:bg-slate-900/80
                  dark:text-slate-300 dark:hover:border-emerald-500
                  dark:hover:text-emerald-400"
              >
                <FaLinkedin size={19} />
              </motion.a>

              <span
                className="text-xs text-slate-500
                  dark:text-slate-400 sm:text-sm"
              >
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
            className="flex min-w-0 justify-center
              lg:justify-end"
          >
            {/* Interactive profile card */}
            <motion.div
              className="group relative w-full
                max-w-[340px] sm:max-w-[390px]"
              animate={cardAnimation}
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.015 }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.985 }
              }
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 20,
              }}
            >
              {/* Animated background glow */}
              <motion.div
                aria-hidden="true"
                animate={glowAnimation}
                className="pointer-events-none absolute
                  -inset-3 rounded-[2rem]
                  bg-gradient-to-br from-emerald-400/15
                  via-teal-400/10 to-cyan-400/15
                  blur-2xl transition-opacity duration-300
                  group-hover:opacity-80
                  sm:-inset-4 sm:rounded-[2.5rem]"
              />

              {/* Profile card */}
              <div
                className="relative rounded-[1.5rem]
                  border border-slate-200/80
                  bg-white/90 p-3 shadow-xl
                  shadow-slate-200/50 backdrop-blur-sm
                  dark:border-slate-800
                  dark:bg-slate-900/90 dark:shadow-black/20
                  sm:rounded-[2rem] sm:p-5"
              >
                <div
                  className="rounded-[1.2rem]
                    bg-gradient-to-br from-emerald-50
                    via-white to-teal-50 px-3 py-5
                    dark:from-emerald-950/40
                    dark:via-slate-900 dark:to-teal-950/40
                    sm:rounded-[1.5rem] sm:px-6 sm:py-8"
                >
                  {/* Profile photo */}
                  <div
                    className="relative mx-auto aspect-square
                      w-full max-w-[220px] sm:max-w-[270px]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-3 rounded-full
                        bg-emerald-400/20 blur-2xl
                        dark:bg-emerald-400/10"
                    />

                    {/* Gradient border */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full
                        bg-[conic-gradient(from_180deg,#10b981,#14b8a6,#06b6d4,#10b981)] p-[3px]"
                    >
                      <div
                        className="h-full w-full rounded-full
                          bg-white dark:bg-slate-900"
                      />
                    </div>

                    {/* Photo */}
                    <div
                      className="absolute inset-[7px]
                        overflow-hidden rounded-full
                        border-4 border-white bg-slate-100
                        shadow-md dark:border-slate-900
                        dark:bg-slate-800"
                    >
                      {!imageError ? (
                        <motion.img
                          src="/my_photo.png"
                          alt="Portrait of Chayma Mighri"
                          onError={() => setImageError(true)}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { scale: 1.07 }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? undefined
                              : { scale: 1.1 }
                          }
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                          }}
                          className="h-full w-full object-cover"
                          fetchPriority="high"
                        />
                      ) : (
                        <div
                          className="flex h-full w-full
                            items-center justify-center"
                        >
                          <span
                            className="gradient-text
                              text-7xl font-bold sm:text-8xl"
                          >
                            C
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Profile information */}
                  <div className="mt-5 text-center sm:mt-7">
                    <div
                      className="inline-flex max-w-full
                        items-center justify-center gap-2
                        rounded-full border border-emerald-200/80
                        bg-white/90 px-3 py-2 text-[11px]
                        font-semibold text-emerald-700 shadow-sm
                        dark:border-emerald-800
                        dark:bg-slate-900/90 dark:text-emerald-400
                        sm:px-4 sm:text-xs"
                    >
                      <motion.span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0
                          rounded-full bg-emerald-500"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : { scale: [1, 1.2, 1] }
                        }
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      Available for work
                    </div>

                    <h2
                      className="mt-4 break-words
                        text-xl font-bold tracking-tight
                        text-slate-900 dark:text-white
                        sm:text-2xl"
                    >
                      Chayma Mighri
                    </h2>

                    <p
                      className="mt-1 text-sm
                        text-slate-500 dark:text-slate-400"
                    >
                      Full-Stack Developer
                    </p>

                    {/* Technology tags */}
                    <div
                      className="mt-5 flex flex-wrap
                        justify-center gap-2"
                    >
                      {technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={
                            shouldReduceMotion
                              ? false
                              : { opacity: 0, y: 8 }
                          }
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.3,
                            delay: shouldReduceMotion
                              ? 0
                              : 0.4 + index * 0.06,
                          }}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { y: -2, scale: 1.04 }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? undefined
                              : { scale: 0.94 }
                          }
                          className="max-w-full rounded-full
                            border border-slate-200/90
                            bg-white/90 px-2.5 py-1.5
                            text-[11px] font-medium text-slate-600
                            transition-colors duration-200
                            hover:border-emerald-300 hover:text-emerald-700
                            dark:border-slate-700 dark:bg-slate-800/90
                            dark:text-slate-300
                            dark:hover:border-emerald-600
                            dark:hover:text-emerald-400
                            sm:px-3 sm:text-xs"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
