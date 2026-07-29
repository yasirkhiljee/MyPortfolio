import { motion } from 'framer-motion'
import { BiMap, BiGlobe, BiEnvelope } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import ResumeCard from '../components/ResumeCard'
import { fadeIn, staggerChildren } from '../utils/animations'

const contactItems = [
  {
    icon: BiMap,
    label: 'Location',
    value: 'Karachi, Pakistan',
  },
  {
    icon: BiGlobe,
    label: 'Availability',
    value: 'Open to Remote',
  },
  {
    icon: BiEnvelope,
    label: 'Email',
    value: 'yasir.khiljee@gmail.com',
    href: 'mailto:yasir.khiljee@gmail.com',
  },
  {
    icon: BiGlobe,
    label: 'Phone',
    value: '+92 3425440359',
    href: 'tel:+923425440359',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yasirkhiljee',
    href: 'https://www.linkedin.com/in/yasirkhiljee/',
  },
  {
    icon: SiUpwork,
    label: 'Upwork',
    value: 'upwork.com/freelancers/~018b4fd3dfbd6aeffb',
    href: 'https://www.upwork.com/freelancers/~018b4fd3dfbd6aeffb?mp_source=share',
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden bg-[#020713] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-400/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="Contact"
          title="Let’s build your next Android product together."
          description="Available for remote collaboration, development engagements, migrations, and performance work."
        />

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={staggerChildren} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} variants={fadeIn}>
                <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300 shadow-[0_15px_40px_-30px_rgba(16,185,129,0.3)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">{label}</p>
                  {href ? (
                    <a href={href} className="mt-4 block text-lg font-semibold text-white transition hover:text-emerald-300">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-4 text-lg font-semibold text-white">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <ResumeCard />
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
