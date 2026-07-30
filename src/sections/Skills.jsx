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
          label="Skills"
          title="Technology badges, not progress bars."
          description="A focused toolkit for Android products that need polished UI, robust architecture, hardware integration, and dependable real-time behavior."
        />

        <div className="space-y-6">
          {portfolioData.skillCategories.map((category) => (
            <div
              key={category.label}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-lg font-semibold text-white">{category.label}</p>
                <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-xs text-slate-400">
                  {category.tag}
                </span>
              </div>
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
