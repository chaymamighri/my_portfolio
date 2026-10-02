import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
      title={darkMode ? "Mode clair" : "Mode sombre"}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
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