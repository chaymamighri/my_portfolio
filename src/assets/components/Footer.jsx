import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <motion.footer
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 12 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="relative overflow-hidden border-t
        border-slate-200/80 bg-white
        transition-colors duration-300
        dark:border-slate-800 dark:bg-slate-950"
    >
      {/* Subtle gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0
          top-0 h-px bg-gradient-to-r
          from-transparent via-emerald-500/60 to-transparent"
      />

      <div
        className="container-custom flex flex-col
          items-center justify-between gap-5
          py-7 sm:py-8 md:flex-row"
      >
        {/* Copyright */}
        <p
          className="text-center text-sm leading-relaxed
            text-slate-500 dark:text-slate-400
            md:text-left"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            Chayma Mighri
          </span>

          <span className="mx-1.5 text-slate-300 dark:text-slate-700">
            |
          </span>

          <span>All rights reserved.</span>
        </p>

        {/* Social links and back-to-top button */}
        <nav
          aria-label="Social media and page navigation"
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
                  : { y: -3, scale: 1.05 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.93 }
              }
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 20,
              }}
              className="group flex h-10 w-10
                touch-manipulation items-center justify-center
                rounded-xl border border-slate-200
                bg-slate-50/80 text-slate-500 shadow-sm
                transition-colors duration-300
                hover:border-emerald-400/60
                hover:bg-emerald-50 hover:text-emerald-700
                active:bg-emerald-100
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-500
                focus-visible:ring-offset-2
                dark:border-slate-800 dark:bg-slate-900
                dark:text-slate-400
                dark:hover:border-emerald-500/50
                dark:hover:bg-emerald-500/10
                dark:hover:text-emerald-400
                dark:focus-visible:ring-offset-slate-950"
            >
              <Icon
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300
                  group-hover:scale-110"
              />
            </motion.a>
          ))}

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -3, scale: 1.06 }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : { scale: 0.92, y: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 20,
            }}
            className="group flex h-10 w-10
              touch-manipulation items-center justify-center
              rounded-xl border border-emerald-400/40
              bg-gradient-to-br from-emerald-500 to-teal-600
              text-white shadow-md shadow-emerald-500/20
              transition-[border-color,box-shadow,background-image]
              duration-300
              hover:border-blue-400/60
              hover:shadow-lg hover:shadow-emerald-500/30
              active:from-blue-500 active:to-emerald-500
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-emerald-500
              focus-visible:ring-offset-2
              dark:border-emerald-400/30
              dark:focus-visible:ring-offset-slate-950"
          >
            <ArrowUp
              size={19}
              strokeWidth={2.5}
              aria-hidden="true"
              className="transition-transform duration-300
                group-hover:-translate-y-0.5
                group-active:-translate-y-0.5"
            />
          </motion.button>
        </nav>
      </div>
    </motion.footer>
  );
}
