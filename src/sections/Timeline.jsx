import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import portfolioData from '../data/portfolioData'
import { fadeIn } from '../utils/animations'

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = portfolioData.timeline[activeIndex]

  return (
    <SectionWrapper id="timeline" className="relative overflow-hidden bg-[#03050d] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="Experience"
          title="Interactive timeline of product work."
          description="Select a company to explore responsibilities, achievements, and technologies used across real Android and React Native products."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr]">
          <nav aria-label="Work experience" className="rounded-[36px] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <ul className="space-y-2">
              {portfolioData.timeline.map((item, index) => (
                <li key={item.company}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-inset ${
                      index === activeIndex
                        ? 'border border-emerald-400/20 bg-white/10'
                        : 'border border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-white">{item.company}</p>
                      <p className="font-mono text-sm text-slate-400">{item.role}</p>
                    </div>
                    <HiArrowRight
                      className={`h-4 w-4 flex-shrink-0 transition ${index === activeIndex ? 'text-emerald-300' : 'text-slate-500'}`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="flex items-center gap-2 font-mono text-sm text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                {String(activeIndex + 1).padStart(2, '0')} / EXPERIENCE
              </p>
              <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-xs text-slate-300">{active.role}</span>
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">{active.company}</h3>
            <p className="mt-3 leading-7 text-slate-300">{active.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/60 p-6">
                <p className="font-semibold text-white">Achievements</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {active.achievements.map((item) => (
                    <li key={item} className="list-disc pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-950/60 p-6">
                <p className="font-semibold text-white">Responsibilities</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {active.responsibilities.map((item) => (
                    <li key={item} className="list-disc pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-3xl bg-slate-950/60 p-6">
              <p className="font-semibold text-white">Technologies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
