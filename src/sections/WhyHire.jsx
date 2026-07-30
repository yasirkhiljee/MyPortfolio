import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import StatCard from '../components/StatCard'
import portfolioData from '../data/portfolioData'
import { fadeIn, staggerChildren } from '../utils/animations'

const reasons = [
  'End-to-end feature ownership',
  'Agile & remote collaboration',
  'Strong communication',
  'Production support after launch',
  'Engineer-first, product-focused mindset',
  'Fast, reliable delivery',
]

export default function WhyHire() {
  const additionalStats = portfolioData.stats.slice(3)

  return (
    <SectionWrapper id="why-hire" className="relative overflow-hidden bg-[#040817] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto max-w-6xl space-y-10"
      >
        <SectionHeading
          label="Why Work With Me"
          title="Why work with me on your next Android & React Native product."
          description="The combination of experience, code quality, ownership, and remote collaboration that helps teams ship fast with confidence."
        />

        <motion.div variants={staggerChildren} className="grid gap-5 sm:grid-cols-3">
          {additionalStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeIn}>
              <StatCard value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>

        <motion.ul variants={staggerChildren} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
