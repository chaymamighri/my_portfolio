import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href,
  variant = "primary",
  icon = true,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/25",

    secondary:
      "border border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600",

    outline:
      "border border-emerald-500 text-emerald-600 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white",

    dark:
      "bg-slate-900 text-white hover:-translate-y-1 hover:bg-emerald-600",
  };

  const content = (
    <>
      <span>{children}</span>

      {icon && <ArrowUpRight size={17} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}