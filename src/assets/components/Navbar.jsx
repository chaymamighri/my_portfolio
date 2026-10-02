import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Détecter la section visible
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Navigation vers une section
  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90"
          : "bg-white/70 backdrop-blur-md dark:bg-slate-950/70"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavigation("home")}
            className="group flex items-center text-[22px] font-bold tracking-[-0.03em] text-slate-900 dark:text-white"
            aria-label="Go to home"
          >
          <span>Chayma</span>
<span className="ml-1 font-light text-slate-500 dark:text-slate-500">
  Mighri
</span>

<motion.span
  whileHover={{ scale: 1.3, rotate: 180 }}
  transition={{ type: "spring", stiffness: 400, damping: 15 }}
  className="gradient-text ml-1.5"
>
  ✧
</motion.span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-emerald-500"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <a
              href="/CV-Chayma-Mighri.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        id="mobile-navigation"
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden"
      >
        <nav className="container-custom flex flex-col py-4">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className={`relative rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-400"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute left-1 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-emerald-500" />
                )}
              </button>
            );
          })}

          {/* Mobile Theme Toggle */}
          <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Appearance
            </span>

            <ThemeToggle />
          </div>

          {/* Mobile CV */}
          <a
            href="/CV-Chayma-Mighri.pdf"
            download
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            <Download size={16} />
            Download CV
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}