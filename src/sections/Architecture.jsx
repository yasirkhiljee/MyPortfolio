import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import { fadeIn, staggerChildren } from '../utils/animations'

const layers = [
  {
    title: 'Presentation',
    description: 'Compose screens, polished UI, and responsive interactions for users.',
  },
  {
    title: 'Domain',
    description: 'Business logic, use cases, and decoupled feature coordination.',
  },
  {
    title: 'Data',
    description: 'Repository, API, local store, and sync flows for reliable data access.',
  },
]

export default function Architecture() {
  return (
    <SectionWrapper id="architecture" className="relative overflow-hidden bg-[#020713] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/10 to-transparent" />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeIn} className="relative mx-auto max-w-7xl space-y-10">
        <SectionHeading
          label="Architecture"
          title="Interactive system design for sustainable Android apps."
          description="Visualizing MVVM and clean architecture patterns that support scalable feature growth and long-term quality."
        />

        <motion.div variants={staggerChildren} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-8">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/10 to-transparent" aria-hidden="true" />
              <div className="relative space-y-8 pt-8">
                <div className="space-y-3 rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.75)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">MVVM</p>
                  <p className="text-lg font-semibold text-white">ViewModel manages UI state and coordinates data.</p>
                </div>
                <div className="space-y-3 rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.75)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Clean Architecture</p>
                  <p className="text-lg font-semibold text-white">Decoupled layers for testable, maintainable code.</p>
                </div>
                <div className="space-y-3 rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.75)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Scalable data flow</p>
                  <p className="text-lg font-semibold text-white">Repository, network, and persistence working together.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div className="grid gap-6">
              {layers.map((layer, index) => (
                <motion.div key={layer.title} variants={fadeIn} className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.75)]">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">{index + 1}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{layer.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
