import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import portfolioData from '../data/portfolioData'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import { CONTACT_ICONS } from '../utils/contactIcons'

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
  const [animatedText, setAnimatedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { title, role, description, projectsAnchor, contactAnchor } = portfolioData.hero
  const displayText = prefersReducedMotion ? role : animatedText
  const heroStats = portfolioData.stats.slice(0, 3)
  const location = portfolioData.contact.items.find((item) => item.label === 'Location')
  const socialLinks = portfolioData.contact.items.filter((item) => item.icon === 'linkedin' || item.icon === 'upwork')

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setAnimatedText(role.slice(0, index))
      if (index >= role.length) {
        window.clearInterval(timer)
      }
    }, 45)

    return () => window.clearInterval(timer)
  }, [role, prefersReducedMotion])

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
            <motion.div variants={cardVariants} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Open for Remote Work Worldwide
              </span>
              {location && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                  <HiOutlineLocationMarker className="h-3.5 w-3.5" aria-hidden="true" />
                  {location.value}
                </span>
              )}
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                {heroStats[0]?.value} Years
              </span>
            </motion.div>

            <motion.div variants={cardVariants} className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Hi, I&apos;m</p>
              <h1 id="hero-heading" className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p id="hero-description" className="font-mono text-lg text-emerald-300 sm:text-xl">
                {displayText}
                <span className={`inline-block w-1 ${cursorVisible ? 'h-6 bg-emerald-300' : 'h-6 bg-transparent'} align-middle`} aria-hidden="true" />
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
            </motion.div>

            <motion.div variants={cardVariants} className="flex flex-wrap items-center gap-4">
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

              <div className="flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = CONTACT_ICONS[item.icon]
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald-400/30 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <motion.div variants={cardVariants} className="relative mx-auto max-w-xl">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[48px] border border-white/5 bg-white/[0.02]" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_25%)]" aria-hidden="true" />
              <div className="relative rounded-[32px] border border-white/10 bg-slate-900/95 p-6 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]">
                <div aria-hidden="true" className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-white/10" />

                <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-emerald-300/15 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-emerald-300">React Native</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-200">Android</span>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-slate-950/90 p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Shipped products</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">{portfolioData.projects.length} apps live across Android &amp; iOS</h2>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {portfolioData.projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      variants={iconMotion}
                      transition={{ delay: 0.15 + index * 0.08, duration: 0.8, ease: 'easeOut' }}
                      className="flex w-[104px] flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.3)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5">
                        <img
                          src={project.screenshotUrls?.[0] || project.screenshot}
                          alt=""
                          aria-hidden="true"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <span className="text-center text-[11px] font-medium leading-tight text-slate-300">{project.title}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-lg font-semibold text-white sm:text-xl">{stat.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    </div>
                  ))}
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
