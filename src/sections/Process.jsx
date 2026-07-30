import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import { fadeIn, staggerChildren } from '../utils/animations'

const processSteps = ['Idea', 'Planning', 'Architecture', 'Development', 'Testing', 'Deployment', 'Monitoring']

export default function Process() {
  return (
    <SectionWrapper id="process" className="relative overflow-hidden bg-[#090c15] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto max-w-6xl space-y-8"
      >
        <SectionHeading
          label="How I Work"
          title="MVVM and clean architecture, the same way every time."
          description="Decoupled presentation, domain, and data layers keep each step testable and easy to extend as products grow."
        />

        <motion.ol
          variants={staggerChildren}
          className="flex flex-wrap gap-3 rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8"
        >
          {processSteps.map((step, index) => (
            <motion.li
              key={step}
              variants={fadeIn}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-slate-900"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
                {index + 1}
              </span>
              {step}
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </SectionWrapper>
  )
}
