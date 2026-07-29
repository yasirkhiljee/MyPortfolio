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
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="Tech Stack"
          title="Android-first tools I ship with every project."
          description="Animated rating cards show core platform skills, architecture patterns, and runtime expertise at a glance."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioData.skills.map((skill) => (
            <SkillCard key={skill.title} title={skill.title} rating={skill.rating} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
