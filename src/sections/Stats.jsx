import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import StatCard from '../components/StatCard'
import portfolioData from '../data/portfolioData'
import { fadeIn } from '../utils/animations'

export default function Stats() {
  return (
    <SectionWrapper id="stats" className="relative overflow-hidden bg-[#02050d] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto grid max-w-7xl gap-8"
      >
        <SectionHeading
          label="Numbers"
          title="Impact metrics that prove senior mobile engineering leadership."
          description="These numbers show product delivery, technical impact, and remote team experience at a glance."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {portfolioData.stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
