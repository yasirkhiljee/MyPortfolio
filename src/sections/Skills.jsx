import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import SkillCard from '../components/SkillCard'
import portfolioData from '../data/portfolioData'
import { fadeIn } from '../utils/animations'

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="relative overflow-hidden bg-[#02050d] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="Tech Stack"
          title="Tools I use to ship Android & React Native products."
          description="Grouped by how they show up in real project work — languages and UI, architecture and state, and the platform integrations that make apps production-ready."
        />

        <div className="space-y-6">
          {portfolioData.skillCategories.map((category) => (
            <div
              key={category.label}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">{category.label}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <SkillCard key={item} title={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
