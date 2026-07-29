import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import { fadeIn, staggerChildren } from '../utils/animations'

const processSteps = [
  'Idea',
  'Planning',
  'Architecture',
  'Development',
  'Testing',
  'Deployment',
  'Monitoring',
]

export default function Process() {
  return (
    <SectionWrapper id="process" className="relative overflow-hidden bg-[#090c15] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn}
        className="relative mx-auto max-w-6xl"
      >
        <SectionHeading
          label="Development Process"
          title="How I turn ideas into production-ready Android products."
          description="A modern mobile delivery workflow that spans ideation, architecture, development, testing, deployment, and monitoring."
        />

        <motion.ol
          variants={staggerChildren}
          className="mt-12 grid gap-4 rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8"
        >
          {processSteps.map((step, index) => (
            <motion.li
              key={step}
              variants={fadeIn}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-lg text-slate-200 shadow-[0_15px_30px_-20px_rgba(0,0,0,0.4)] transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-slate-900"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl font-semibold text-emerald-300">
                {index + 1}
              </span>
              <span className="font-medium text-white">{step}</span>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </SectionWrapper>
  )
}
