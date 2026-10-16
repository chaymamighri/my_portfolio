import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/chaymamighri",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chayma-mighri/",
      icon: FaLinkedin,
    },
  ];

  return (
    <motion.footer
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 12 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      className="relative overflow-hidden border-t border-slate-200/80 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
    >
      {/* Subtle gradient accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"
      />

      <div className="container-custom flex flex-col items-center justify-between gap-5 py-7 sm:py-8 md:flex-row">

    
<p className="text-center text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-left">
  © {new Date().getFullYear()}{" "}
  <span className="font-semibold text-slate-900 dark:text-white">
    Chayma Mighri
  </span>

  <span className="mx-1.5 text-slate-300 dark:text-slate-700">
    |
  </span>

  <span>All rights reserved.</span>
</p>

        {/* Social links */}
        <nav
          aria-label="Social media links"
          className="flex items-center gap-3"
        >
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${name} profile`}
              title={name}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, scale: 1.04 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.96 }
              }
              transition={{ duration: 0.2 }}
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 text-slate-500 shadow-sm transition-colors duration-300 hover:border-emerald-400/60 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 dark:focus-visible:ring-offset-slate-950"
            >
              <Icon
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.footer>
  );
}