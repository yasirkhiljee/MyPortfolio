import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import TestimonialCard from '../components/TestimonialCard'
import { fadeIn, staggerChildren } from '../utils/animations'

const testimonials = [
  {
    quote: 'Delivered exactly what we needed with excellent communication and fast turnaround.',
    author: 'Client A',
    role: 'Founder',
    company: 'Mobile Startup',
  },
  {
    quote: 'The Android app was robust, polished, and delivered before deadline.',
    author: 'Client B',
    role: 'Product Manager',
    company: 'Retail Platform',
  },
  {
    quote: 'Great Kotlin migration work and performance improvements across the board.',
    author: 'Client C',
    role: 'CTO',
    company: 'Fintech Scaleup',
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative overflow-hidden bg-[#020714] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="Testimonials"
          title="Client feedback that reinforces quality delivery."
          description="Upwork-style reviews and polished client praise for Android work, migrations, optimizations, and production delivery."
        />

        <motion.div
          variants={staggerChildren}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div key={item.author} variants={fadeIn}>
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/40 p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.85)] transition hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  ⭐⭐⭐⭐⭐
                </div>
                <TestimonialCard {...item} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
