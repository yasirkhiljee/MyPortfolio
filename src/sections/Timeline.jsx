import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import TimelineItem from '../components/TimelineItem'
import portfolioData from '../data/portfolioData'
import { fadeIn } from '../utils/animations'

export default function Timeline() {
  return (
    <SectionWrapper id="timeline" className="relative overflow-hidden bg-[#03050d] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl"
      >
        <SectionHeading
          label="Experience"
          title="Career timeline for senior Android product delivery."
          description="Animated milestones showing key roles from senior engineering to product delivery leadership."
        />

        <div className="relative mt-12 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-emerald-500/40 to-transparent" aria-hidden="true" />
          <ul className="relative space-y-8 pl-12">
            {portfolioData.timeline.map((item) => (
              <TimelineItem key={item.year} {...item} />
            ))}
          </ul>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
