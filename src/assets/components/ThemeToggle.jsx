import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

const STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Thème initial : choix sauvegardé, sinon mode clair par défaut
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    root.classList.toggle("dark", saved === "dark");

    // Synchronise toutes les instances (desktop + mobile) avec <html>
    const sync = () => setDarkMode(root.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", next);

    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        darkMode ? "Activer le mode clair" : "Activer le mode sombre"
      }
      title={darkMode ? "Mode sombre" : "Mode clair"}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
    >
      <motion.div
        key={darkMode ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {darkMode ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
    </button>
  );
}