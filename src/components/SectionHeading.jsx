export default function SectionHeading({ label, title, description }) {
  return (
    <div className="space-y-4">
      <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">{label}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
