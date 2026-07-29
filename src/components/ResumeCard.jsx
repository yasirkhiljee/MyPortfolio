import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import portfolioData from '../data/portfolioData'
import { fadeIn } from '../utils/animations'

export default function ResumeCard() {
  const { resume } = portfolioData.hero

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeIn}
      className="group overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/90 p-8 shadow-[0_40px_140px_-70px_rgba(0,0,0,0.95)] transition hover:-translate-y-1 hover:shadow-[0_50px_160px_-70px_rgba(0,0,0,1)]"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">Resume</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">Beautiful resume download</h3>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300 shadow-[0_20px_80px_-50px_rgba(34,197,94,0.35)]">
          <HiDownload className="h-7 w-7" />
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
        Download a polished CV showcasing Android leadership, case studies, architecture expertise, and production delivery experience.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {['Android', 'Kotlin', 'POS', 'Firebase', 'Compose'].map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={resume}
        download
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
      >
        <HiDownload className="h-5 w-5" />
        Download Resume
      </a>
    </motion.div>
  )
}
