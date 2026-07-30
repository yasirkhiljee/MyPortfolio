import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBolt, FaShieldAlt, FaThermometerHalf } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import { fadeIn, staggerChildren } from '../utils/animations'

const productScreens = [
  {
    title: 'Restaurant POS',
    subtitle: 'Offline-ready ordering and receipt printing for fast service.',
    labels: ['Billing', 'Order queue', 'Printer status'],
    accent: 'emerald',
  },
  {
    title: 'Taxi Dispatch',
    subtitle: 'Driver tracking, booking flow, and live ETA updates.',
    labels: ['Live map', 'Driver status', 'Ride history'],
    accent: 'cyan',
  },
  {
    title: 'E-commerce App',
    subtitle: 'Catalog browsing, checkout, and payment flow for modern shoppers.',
    labels: ['Product cards', 'Fast cart', 'Secure checkout'],
    accent: 'violet',
  },
]

const accentClasses = {
  emerald: { text: 'text-emerald-300', panel: 'border-emerald-500/10 bg-emerald-500/10' },
  cyan: { text: 'text-cyan-300', panel: 'border-cyan-500/10 bg-cyan-500/10' },
  violet: { text: 'text-violet-300', panel: 'border-violet-500/10 bg-violet-500/10' },
}

const highlights = [
  {
    icon: FaBolt,
    title: 'Fast delivery',
    description: 'Mobile experiences built for speed and reliability.',
  },
  {
    icon: FaShieldAlt,
    title: 'Reliable architecture',
    description: 'Clean modular structure ready for scale and iterations.',
  },
  {
    icon: FaThermometerHalf,
    title: 'Performance tuned',
    description: 'Optimized animations, memory, and rendering paths.',
  },
]

export default function ProductShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % productScreens.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  const screen = productScreens[active]

  return (
    <SectionWrapper id="product-showcase" className="relative overflow-hidden bg-[#02050d] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'some' }} variants={fadeIn} className="relative mx-auto max-w-7xl space-y-12">
        <SectionHeading
          label="Product showcase"
          title="A premium app-focused experience that feels like a SaaS landing page."
          description="Interactive Android mockups, screen cycles, and mobile product highlights to showcase delivery-ready app design and engineering."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {productScreens.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={index === active}
                  className={`rounded-3xl border px-5 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#02050d] ${
                    index === active
                      ? 'border-emerald-400/40 bg-emerald-500/10 text-white'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/20 hover:bg-white/10'
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">{item.title}</p>
                  <p className="mt-3 text-sm leading-7">{item.subtitle}</p>
                </button>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={staggerChildren}
              className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeIn}
                    className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-emerald-400/30"
                  >
                    <item.icon className="h-6 w-6 text-emerald-300" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="h-[680px] w-full rounded-[48px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.9)]">
              <div className="relative h-full overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/90 shadow-inner shadow-emerald-500/10">
                <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-slate-950/80 to-transparent" />
                <div className="absolute left-1/2 top-6 h-2 w-24 -translate-x-1/2 rounded-full bg-slate-700" />
                <div className="absolute left-0 top-20 right-0 mx-auto h-12 w-12 rounded-full bg-emerald-500/10 blur-3xl" />

                <motion.div
                  key={screen.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative h-full p-8"
                >
                  <div className="relative h-full rounded-[32px] border border-white/10 bg-[#071017] p-6 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">{screen.title}</span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${accentClasses[screen.accent].text}`}>Live</span>
                    </div>
                    <div className="grid gap-5">
                      <div className={`rounded-[28px] border p-5 text-sm text-white shadow-[0_20px_80px_-60px_rgba(34,197,94,0.25)] ${accentClasses[screen.accent].panel}`}>
                        <p className="font-semibold">{screen.subtitle}</p>
                      </div>
                      {screen.labels.map((label) => (
                        <div key={label} className="rounded-[24px] border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-300">
                          {label}
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 grid gap-3 rounded-[28px] border border-white/5 bg-slate-950/80 p-4 text-sm text-slate-300">
                      <p className="text-xs uppercase tracking-[0.28em] text-emerald-300/80">Key outcome</p>
                      <p>Designed for rapid checkout, user retention, and operational speed.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
