import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SiAndroid } from 'react-icons/si'
import portfolioData from '../data/portfolioData'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const iconMotion = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
}

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { title, subtitle, intro, resume, projectsAnchor, contactAnchor } = portfolioData.hero

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(intro)
      return undefined
    }

    let index = 0
    const timer = window.setInterval(() => {
      setDisplayText(intro.slice(0, index + 1))
      index += 1
      if (index > intro.length) {
        window.clearInterval(timer)
      }
    }, 45)

    return () => window.clearInterval(timer)
  }, [intro, prefersReducedMotion])

  useEffect(() => {
    const blink = window.setInterval(() => {
      setCursorVisible((value) => !value)
    }, 500)
    return () => window.clearInterval(blink)
  }, [])

  const animationProps = prefersReducedMotion
    ? { initial: false, animate: 'visible' }
    : { initial: 'hidden', animate: 'visible' }

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative min-h-screen overflow-hidden bg-[#02050d] text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.12),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.08),_transparent_20%)]" />
      <div aria-hidden="true" className="absolute left-10 top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div aria-hidden="true" className="absolute right-10 top-32 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 sm:px-10 lg:px-12">
        <motion.div
          {...animationProps}
          variants={textVariants}
          className="grid w-full gap-10 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_60px_140px_-70px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12"
        >
          <div className="space-y-8">
            <motion.div variants={cardVariants} className="inline-flex rounded-full border border-emerald-300/15 bg-emerald-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300 shadow-sm shadow-emerald-400/10">
              {subtitle}
            </motion.div>

            <motion.div variants={cardVariants} className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Hello, I’m</p>
              <h1 id="hero-heading" className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p id="hero-description" className="max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
                {displayText}
                <span className={`inline-block w-1 ${cursorVisible ? 'h-6 bg-emerald-300' : 'h-6 bg-transparent'} align-middle`} aria-hidden="true" />
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,auto)]">
              <a
                href={resume}
                download
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                aria-label="Download resume"
              >
                Download Resume
              </a>
              <a
                href={projectsAnchor}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
              >
                View Projects
              </a>
              <a
                href={contactAnchor}
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
              >
                Hire Me
              </a>
            </motion.div>
          </div>

          <motion.div variants={cardVariants} className="relative mx-auto max-w-xl">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_25%)]" aria-hidden="true" />
              <div className="relative rounded-[32px] border border-white/10 bg-slate-900/95 p-6 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-emerald-300/15 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-emerald-300">ANDROID</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-200">Premium</span>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-slate-950/90 p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Mobile-first apps</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Mobile-first apps</h2>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[0, 1, 2, 3].map((index) => (
                    <motion.div
                      key={index}
                      variants={iconMotion}
                      transition={{ delay: 0.15 + index * 0.08, duration: 0.8, ease: 'easeOut' }}
                      className="flex h-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.3)]"
                    >
                      <SiAndroid className="h-8 w-8 text-emerald-300" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Fast path</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Design, develop, and ship polished Android product experiences with clear execution and strong engineering ownership.</p>
                </div>
              </div>
            </div>

            <motion.div
              aria-hidden="true"
              className="absolute -right-8 top-10 hidden h-20 w-20 rounded-full border border-emerald-400/20 bg-emerald-500/10 blur-3xl lg:block"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -left-10 bottom-10 hidden h-24 w-24 rounded-full border border-sky-400/20 bg-sky-500/10 blur-3xl lg:block"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
