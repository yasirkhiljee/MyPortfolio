import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaBookOpen, FaGithub } from 'react-icons/fa'
import { cardMotion } from '../utils/animations'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardMotion}
      transition={{ delay: index * 0.12 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.95)] backdrop-blur-xl hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/10 transition"
    >
      <div className="mb-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {project.tag}
            </span>
            <div className="flex gap-3 text-slate-300">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="transition hover:text-emerald-300"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit live project ${project.title}`}
                  className="transition hover:text-emerald-300"
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">
              {project.platforms ? project.platforms.join(' • ') : 'Android • iOS'}
            </span>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              React Native
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
          {project.contribution && (
            <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
              <span className="font-semibold text-white">Contribution:</span> {project.contribution}
            </div>
          )}
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/20 p-4 shadow-inner shadow-emerald-500/5">
          {project.screenshot ? (
            <img src={project.screenshot} alt={project.screenshotAlt} className="h-full w-full rounded-3xl object-cover" />
          ) : (
            <div className="flex h-48 items-center justify-center rounded-3xl bg-slate-900 text-sm text-slate-400">
              {project.screenshotAlt}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-5">
        <div className="rounded-3xl bg-slate-950/70 p-5 text-sm text-slate-300 shadow-[0_16px_60px_-40px_rgba(0,0,0,0.9)]">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Product challenge</p>
          <p className="mt-3 leading-7">{project.challenge}</p>
        </div>

        <div className="rounded-3xl bg-slate-950/70 p-5 text-sm text-slate-300 shadow-[0_16px_60px_-40px_rgba(0,0,0,0.9)]">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Engineering solution</p>
          <p className="mt-3 leading-7">{project.solution}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-slate-950/70 p-5 text-sm text-slate-300 shadow-[0_16px_60px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Architecture</p>
            <p className="mt-3 leading-7">{project.architecture}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/70 p-5 text-sm text-slate-300 shadow-[0_16px_60px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Impact</p>
            <p className="mt-3 leading-7">{project.result}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.tech.map((label) => (
          <span key={label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {label}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
          >
            <FaExternalLinkAlt className="h-4 w-4" /> Live App
          </a>
        )}
        {project.caseStudy && (
          <a
            href={project.caseStudy}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
          >
            <FaBookOpen className="h-4 w-4" /> Case Study
          </a>
        )}
      </div>
    </motion.article>
  )
}
