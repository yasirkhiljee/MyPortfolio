export default function Loader() {
  return (
    <div className="flex min-h-[180px] items-center justify-center px-4 py-20 text-sm text-slate-300">
      <span className="inline-flex h-8 w-8 animate-spin rounded-full border-2 border-emerald-300/30 border-t-emerald-300" aria-hidden="true" />
      <span className="sr-only">Loading content</span>
      <span className="ml-3">Loading section…</span>
    </div>
  )
}
