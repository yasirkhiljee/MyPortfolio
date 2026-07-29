export default function TimelineItem({ year, role, company, description }) {
  return (
    <li className="relative pl-8 pb-8">
      <span className="absolute left-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-black"> </span>
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">{year}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{role}</h3>
      <p className="text-sm text-slate-400">{company}</p>
      {description ? <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p> : null}
    </li>
  )
}
