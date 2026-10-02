export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-500 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}