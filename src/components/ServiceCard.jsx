export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-52px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  )
}
