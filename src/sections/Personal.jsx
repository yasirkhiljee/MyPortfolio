import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import { fadeIn, staggerChildren } from '../utils/animations'

const personalHighlights = [
  'Solving complex Android architecture problems.',
  'Optimizing performance for smooth, reliable apps.',
  'Building products that scale with users and business growth.',
  'Keeping code clean, testable, and easy to maintain.',
]

export default function Personal() {
  return (
    <SectionWrapper id="personal" className="relative overflow-hidden bg-[#030714] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="relative mx-auto max-w-6xl space-y-10"
      >
        <SectionHeading
          label="Personal"
          title="What I enjoy most about Android engineering."
          description="I enjoy solving complex Android architecture problems, optimizing performance, and building apps that scale."
        />

        <motion.div variants={staggerChildren} className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div variants={fadeIn} className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <p className="text-base leading-8 text-slate-300">
              I love turning abstract product goals into Android experiences that feel fast, stable, and delightful. My work is driven by thoughtful architecture, rigorous performance tuning, and pragmatic problem solving.
            </p>
            <div className="mt-8 space-y-4">
              {personalHighlights.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">✓</span>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-slate-950/95 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div className="space-y-5">
              <div className="rounded-3xl border border-emerald-300/10 bg-slate-900/60 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Core mindset</p>
                <p className="mt-3 text-lg font-semibold text-white">Engineer-first, product-focused, and always learning.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Favorite challenge</p>
                  <p className="mt-3 text-white">Refactoring legacy Android flows into modular, maintainable architecture.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Biggest reward</p>
                  <p className="mt-3 text-white">Seeing apps stay stable and fast after launch, even as usage grows.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
