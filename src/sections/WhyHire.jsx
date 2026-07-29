import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import { fadeIn, staggerChildren } from '../utils/animations'

const reasons = [
  '8+ years Android experience',
  'Clean, maintainable code',
  'End-to-end feature ownership',
  'Strong communication',
  'Agile & remote collaboration',
  'Fast delivery',
  'Production-ready architecture',
]

export default function WhyHire() {
  return (
    <SectionWrapper id="why-hire" className="relative overflow-hidden bg-[#040817] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="relative mx-auto max-w-6xl"
      >
        <SectionHeading
          label="Why Hire Me"
          title="Why work with me on your next Android product."
          description="The combination of experience, code quality, ownership, and remote collaboration that helps teams ship fast with confidence."
        />

        <motion.ul variants={staggerChildren} className="mt-12 grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <motion.li
              key={reason}
              variants={fadeIn}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-slate-200 shadow-[0_20px_80px_-52px_rgba(0,0,0,0.85)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <p className="text-lg font-semibold text-white">{reason}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </SectionWrapper>
  )
}
