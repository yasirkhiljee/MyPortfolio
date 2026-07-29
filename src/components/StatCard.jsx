export default function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_24px_80px_-56px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <p className="text-4xl font-semibold text-white sm:text-5xl">{value}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-emerald-300/90">{label}</p>
    </div>
  )
}
