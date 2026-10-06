import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-custom flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">

        {/* Copyright + nom */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            Chayma
          </span>{" "}
          <span className="text-slate-900 dark:text-white">
            Mighri
          </span>
          <motion.span
            whileHover={{ scale: 1.3, rotate: 180 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="gradient-text ml-1 inline-block"
          >
            ✧
          </motion.span>
          {" "}· All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/chaymamighri"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-sm dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/chayma-mighri"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-sm dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}