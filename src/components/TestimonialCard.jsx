export default function TestimonialCard({ quote, author, role, company }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_80px_-52px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-6 text-sm text-slate-400">
        <p className="font-semibold text-white">{author}</p>
        <p>{role} • {company}</p>
      </div>
    </div>
  )
}
