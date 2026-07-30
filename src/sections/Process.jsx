import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import { fadeIn, staggerChildren } from '../utils/animations'

const processSteps = [
  {
    title: 'Discovery',
    description: 'Clarify business goals, users, risks, devices, APIs, and release constraints.',
  },
  {
    title: 'Planning',
    description: 'Break work into milestones, identify dependencies, and define measurable outcomes.',
  },
  {
    title: 'Architecture',
    description: 'Design modules, data flow, offline strategy, integrations, and error handling.',
  },
  {
    title: 'Development',
    description: 'Build features with clean code, reusable UI, and pragmatic engineering decisions.',
  },
  {
    title: 'Testing',
    description: 'Validate happy paths, edge cases, hardware behavior, and network resilience.',
  },
  {
    title: 'Deployment',
    description: 'Prepare releases, analytics, crash monitoring, and production handover.',
  },
  {
    title: 'Maintenance',
    description: 'Improve stability, evolve features, and keep architecture healthy over time.',
  },
  {
    title: 'Partnership',
    description: 'Communicate clearly and collaborate like an embedded member of the team.',
  },
]

export default function Process() {
  return (
    <SectionWrapper id="process" className="relative overflow-hidden bg-[#090c15] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="Process"
          title="A calm workflow from idea to maintenance."
          description="I keep delivery predictable with a structured process that gives stakeholders clarity and developers a maintainable foundation."
        />

        <motion.div variants={staggerChildren} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeIn}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-52px_rgba(0,0,0,0.85)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-sm text-emerald-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
