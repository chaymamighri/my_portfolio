import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const DURATION_MS = 3400;
const REDUCED_DURATION_MS = 1200;

export default function SplashScreen({ onFinish }) {
  const shouldReduceMotion = useReducedMotion();
  const hasFinished = useRef(false);

  // Lock scrolling during the intro and finish automatically (only once)
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(
      () => {
        if (hasFinished.current) return;
        hasFinished.current = true;
        onFinish?.();
      },
      shouldReduceMotion ? REDUCED_DURATION_MS : DURATION_MS
    );

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldReduceMotion, onFinish]);

  // Reusable text animation
  const textVariant = (delay) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-white px-4 dark:bg-slate-950"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-500/15 sm:h-96 sm:w-96" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-300/25 blur-3xl dark:bg-teal-500/15 sm:h-96 sm:w-96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.06),transparent_55%)]" />
      </div>

      {/* Circular animation */}
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="splash-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Outer rotating ring */}
          <motion.g
            style={{ transformOrigin: "100px 100px" }}
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="100"
              cy="100"
              r="94"
              className="stroke-slate-300 dark:stroke-slate-700"
              strokeWidth="1"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Middle rotating arc */}
          <motion.g
            style={{ transformOrigin: "100px 100px" }}
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="100"
              cy="100"
              r="82"
              stroke="url(#splash-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="90 430"
              opacity="0.7"
            />
          </motion.g>

          {/* Inner track */}
          <circle
            cx="100"
            cy="100"
            r="70"
            className="stroke-slate-200 dark:stroke-slate-800"
            strokeWidth="3"
          />

          {/* Animated progress ring */}
          <g transform="rotate(-90 100 100)">
            <motion.circle
              cx="100"
              cy="100"
              r="70"
              stroke="url(#splash-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 2.6,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>

        {/* Orbiting dot */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-[8%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-500 shadow-[0_0_12px_3px_rgba(16,185,129,0.5)] dark:bg-emerald-400 dark:shadow-[0_0_12px_3px_rgba(52,211,153,0.7)]" />
          </motion.div>
        )}

        {/* CM monogram */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.3,
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-3xl border border-emerald-700/30 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 shadow-lg shadow-emerald-500/20 sm:h-28 sm:w-28"
        >
          <svg
            viewBox="0 0 40 40"
            className="h-20 w-20 sm:h-24 sm:w-24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M25.5 10.5 A12 12 0 1 0 25.5 29.5"
              stroke="#5EEAD4"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M15 27 V17 L21 23 L27 17 V27"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Name and role */}
      <div className="relative mt-8 text-center sm:mt-10">
        <motion.h1
          {...textVariant(0.9)}
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
        >
          <span className="gradient-text">Chayma</span>{" "}
          <span className="font-medium text-slate-600 dark:text-slate-300">
            Mighri
          </span>
        </motion.h1>

        <motion.p
          {...textVariant(1.3)}
          className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 sm:text-sm sm:tracking-[0.28em]"
        >
          Full-Stack Developer
        </motion.p>

        <motion.p
          {...textVariant(1.6)}
          className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm"
        >
          Web &amp; Mobile
        </motion.p>
      </div>
    </motion.div>
  );
}