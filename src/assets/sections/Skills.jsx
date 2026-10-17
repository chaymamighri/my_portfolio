
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Database,
  Layers3,
  Wrench,
  Globe,
  Coffee,
  FileCode2,
  Smartphone,
  GitBranch,
  Send,
  Leaf,
  Braces,
  ShieldCheck,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Building modern interfaces",
    icon: Layers3,
    skills: [
      { name: "React.js", icon: Code2, color: "text-cyan-500" },
      { name: "JavaScript", icon: Braces, color: "text-yellow-500" },
      { name: "HTML5", icon: Globe, color: "text-orange-500" },
      { name: "CSS3", icon: FileCode2, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: Layers3, color: "text-teal-500" },
    ],
  },
  {
    title: "Backend",
    subtitle: "Building reliable APIs",
    icon: Code2,
    skills: [
      { name: "Java", icon: Coffee, color: "text-red-500" },
      { name: "Spring Boot", icon: Leaf, color: "text-green-600" },
      {
        name: "Spring Security",
        icon: ShieldCheck,
        color: "text-emerald-600",
      },
      { name: "Node.js", icon: Code2, color: "text-green-500" },
      {
        name: "Express.js",
        icon: Send,
        color: "text-gray-600 dark:text-gray-300",
      },
      { name: "REST API", icon: Send, color: "text-violet-500" },
      { name: "JWT", icon: ShieldCheck, color: "text-pink-500" },
    ],
  },
  {
    title: "Databases",
    subtitle: "Managing application data",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database, color: "text-sky-600" },
      { name: "MongoDB", icon: Database, color: "text-green-600" },
      { name: "SQL", icon: FileCode2, color: "text-indigo-500" },
    ],
  },
  {
    title: "Mobile Development",
    subtitle: "Building cross-platform applications",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: Smartphone, color: "text-sky-500" },
      { name: "Dart", icon: Code2, color: "text-blue-500" },
    ],
  },
  {
    title: "Development Tools",
    subtitle: "Tools for an efficient workflow",
    icon: Wrench,
    skills: [
      { name: "VS Code", icon: Code2, color: "text-blue-500" },
      { name: "IntelliJ IDEA", icon: Coffee, color: "text-red-500" },
      { name: "Git", icon: GitBranch, color: "text-orange-500" },
      {
        name: "GitHub",
        icon: GitBranch,
        color: "text-gray-800 dark:text-white",
      },
      { name: "Postman", icon: Send, color: "text-orange-500" },
      { name: "Android Studio", icon: Smartphone, color: "text-green-500" },
      { name: "npm", icon: Code2, color: "text-red-600" },
      { name: "Maven", icon: Coffee, color: "text-red-700" },
    ],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="section-padding relative isolate overflow-hidden bg-slate-50/70 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/5" />

        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl dark:bg-teal-500/5" />
      </div>

      <div className="container-custom">
        <SectionTitle
          eyebrow="My Tech Stack"
          title="Technologies I work with"
          description="The technologies and tools I use to build modern web and mobile applications."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
              },
            },
          }}
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                key={group.title}
                variants={reveal}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.22 },
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
                className="group relative h-full rounded-3xl p-px"
              >
                {/* Gradient border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/35 via-teal-400/15 to-cyan-400/30 opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                />

                {/* Main card */}
                <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] border border-slate-200/70 bg-white/95 p-5 shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-emerald-900/5 dark:border-slate-800/80 dark:bg-slate-900/95 dark:group-hover:shadow-emerald-500/5 sm:p-7">
                  {/* Decorative glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl transition-colors duration-300 group-hover:bg-emerald-400/20 group-active:bg-emerald-400/20"
                  />

                  <div className="relative">
                    {/* Group heading */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : { rotate: -5, scale: 1.06 }
                        }
                        whileTap={
                          shouldReduceMotion
                            ? undefined
                            : { scale: 0.92 }
                        }
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 transition-colors duration-300 group-hover:border-emerald-200 dark:border-emerald-900/60 dark:from-emerald-950/60 dark:to-teal-950/40 dark:text-emerald-400 dark:group-hover:border-emerald-700/70"
                      >
                        <GroupIcon size={23} strokeWidth={1.8} />
                      </motion.div>

                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Technology items */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {group.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;

                        return (
                          <motion.div
                            key={skill.name}
                            initial={{
                              opacity: 0,
                              y: shouldReduceMotion ? 0 : 12,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.1,
                            }}
                            transition={{
                              duration: shouldReduceMotion ? 0 : 0.35,
                              delay: shouldReduceMotion
                                ? 0
                                : Math.min(skillIndex * 0.04, 0.2),
                              ease: "easeOut",
                            }}
                            whileHover={
                              shouldReduceMotion
                                ? undefined
                                : {
                                    y: -4,
                                    scale: 1.025,
                                    transition: { duration: 0.18 },
                                  }
                            }
                            whileTap={
                              shouldReduceMotion
                                ? undefined
                                : {
                                    scale: 0.94,
                                    transition: { duration: 0.12 },
                                  }
                            }
                            className="group/skill flex min-h-[88px] touch-manipulation flex-col items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 px-2 py-4 text-center transition-[border-color,background-color,box-shadow] duration-200 hover:border-emerald-200 hover:bg-emerald-50/70 hover:shadow-md hover:shadow-emerald-900/5 active:border-emerald-300 active:bg-emerald-50 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-emerald-900 dark:hover:bg-emerald-950/30 dark:active:border-emerald-700/70 dark:active:bg-emerald-950/50"
                          >
                            <motion.div
                              whileHover={
                                shouldReduceMotion
                                  ? undefined
                                  : { rotate: 5, scale: 1.12 }
                              }
                              whileTap={
                                shouldReduceMotion
                                  ? undefined
                                  : { scale: 0.85 }
                              }
                              transition={{ duration: 0.18 }}
                            >
                              <SkillIcon
                                size={26}
                                strokeWidth={1.8}
                                aria-hidden="true"
                                className={skill.color}
                              />
                            </motion.div>

                            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 sm:text-sm">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
