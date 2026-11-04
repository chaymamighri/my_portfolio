import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Affiche le bouton après 400px de défilement
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: 0.9 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
          whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.06 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
          className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-11 w-11 touch-manipulation items-center justify-center rounded-xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-emerald-400/30 dark:focus-visible:ring-offset-slate-950 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        >
          <ArrowUp
            size={20}
            strokeWidth={2.5}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}