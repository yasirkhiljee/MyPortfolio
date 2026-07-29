import { motion } from 'framer-motion'
import { BiCheckCircle } from 'react-icons/bi'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import portfolioData from '../data/portfolioData'
import { fadeIn } from '../utils/animations'

export default function About() {
  const { heading, description, highlights, strengths, workflow } = portfolioData.about

  return (
    <SectionWrapper id="about" className="relative overflow-hidden bg-[#030712] text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center"
      >
        <div className="space-y-6">
          <SectionHeading label="About me" title={heading} description={description} />

          <ul className="grid gap-4 sm:grid-cols-2" aria-label="About highlights">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                <BiCheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-300" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/20 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-400/10 to-transparent" />
          <div className="relative space-y-6 pt-6">
            <div className="rounded-3xl border border-emerald-300/10 bg-slate-900/70 p-6 shadow-inner shadow-emerald-500/5">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Core strengths</p>
              <ul className="mt-4 space-y-3 text-slate-300">
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-emerald-300/10 bg-slate-900/70 p-6 shadow-inner shadow-emerald-500/5">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">How I work</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{workflow}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
