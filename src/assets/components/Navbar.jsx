
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Download, Menu, X } from "lucide-react";
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

const CV_PATH = "/CV-Chayma-Mighri.pdf";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Detect page scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect the currently visible section
  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape and lock background scrolling
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // Close the mobile menu when switching to desktop layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navigate to a section
  const handleNavigation = (id) => {
    setMobileOpen(false);

    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section not found: #${id}`);
      return;
    }

    setActiveSection(id);

    const headerOffset = 80;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, sectionTop - headerOffset),
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const headerAnimation = shouldReduceMotion
    ? {}
    : {
        initial: { y: -24, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: {
          duration: 0.45,
          ease: "easeOut",
        },
      };

  const mobilePanelAnimation = shouldReduceMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.2, ease: "easeOut" },
      };

  const getLinkClass = (isActive) =>
    [
      "relative rounded-lg px-3 py-2 text-sm font-medium",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
      "dark:focus-visible:ring-offset-slate-950",
      isActive
        ? "text-emerald-700 dark:text-emerald-400"
        : "text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400",
    ].join(" ");

  const mobileLinkClass = (isActive) =>
    [
      "relative w-full rounded-xl px-4 py-3 text-left text-sm font-medium",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
      isActive
        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
        : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-400",
    ].join(" ");

  return (
    <motion.header
      {...headerAnimation}
      className={[
        "fixed inset-x-0 top-0 z-50",
        "border-b transition-all duration-300",
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90"
          : "border-transparent bg-white/75 backdrop-blur-md dark:bg-slate-950/75",
      ].join(" ")}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between gap-3">


{/* Personal brand logo */}
<button
  type="button"
  onClick={() => handleNavigation("home")}
  aria-label="Go to home section"
  className="group inline-flex shrink-0 items-center gap-2.5 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
>
  {/* Custom CM monogram */}
  <span
    aria-hidden="true"
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-700/20 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 shadow-sm transition-all duration-300 group-hover:border-emerald-400/60 group-hover:shadow-md group-hover:shadow-emerald-500/10"
  >
    <svg
      viewBox="0 0 40 40"
      className="h-9 w-9"
      fill="none"
    >
      {/* C */}
      <path
        d="M25.5 10.5 A12 12 0 1 0 25.5 29.5"
        stroke="#5EEAD4"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* M */}
      <path
        d="M15 27 V17 L21 23 L27 17 V27"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>

  {/* Name */}
  <span className="flex flex-col">
    <span className="whitespace-nowrap text-base font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400 sm:text-lg">
      Chayma{" "}
      <span className="font-medium text-slate-500 dark:text-slate-300">
        Mighri
      </span>
    </span>

    <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
      Full-Stack Developer
    </span>
  </span>
</button>


          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 lg:flex xl:gap-1"
          >
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={getLinkClass(isActive)}
                >
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-500"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }
                      }
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <ThemeToggle />

            <a
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 lg:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
          >
            {mobileOpen ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              key="mobile-backdrop"
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.18,
              }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-x-0 bottom-0 top-20 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
            />

            {/* Menu panel */}
            <motion.div
              key="mobile-panel"
              id="mobile-navigation"
              {...mobilePanelAnimation}
              className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-xl lg:hidden dark:border-slate-800 dark:bg-slate-950"
            >
              <nav
                aria-label="Mobile navigation"
                className="container-custom flex flex-col gap-1 py-4"
              >
                {links.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleNavigation(link.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={mobileLinkClass(isActive)}
                    >
                      {link.label}

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-2 left-1 top-2 w-1 rounded-full bg-emerald-500"
                        />
                      )}
                    </button>
                  );
                })}

                {/* Appearance */}
                <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    Appearance
                  </span>

                  <ThemeToggle />
                </div>

                {/* Mobile CV button */}
                <a
                  href={CV_PATH}
                  download
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                >
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}