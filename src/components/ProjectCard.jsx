import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaBookOpen, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { cardMotion } from '../utils/animations'
import { slugify } from '../utils/slugify'

export default function ProjectCard({ project, index }) {
  const detailPath = `/projects/${slugify(project.title)}`

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={cardMotion}
      transition={{ delay: index * 0.12 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.95)] backdrop-blur-xl hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/10 transition"
    >
      <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-start">
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
            </div>
          </div>

          <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white">
            <Link to={detailPath} className="hover:text-emerald-300">
              {project.title}
            </Link>
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">
              {project.platforms ? project.platforms.join(' • ') : 'Android • iOS'}
            </span>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              React Native
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/20 p-4 shadow-inner shadow-emerald-500/5">
          {project.screenshotUrls && project.screenshotUrls.length > 0 ? (
            <img
              src={project.screenshotUrls[0]}
              alt={project.screenshotAlt}
              className="h-full w-full rounded-3xl object-cover"
            />
          ) : project.screenshot ? (
            <img src={project.screenshot} alt={project.screenshotAlt} className="h-full w-full rounded-3xl object-cover" />
          ) : (
            <div className="flex h-48 items-center justify-center rounded-3xl bg-slate-900 text-sm text-slate-400">
              {project.screenshotAlt}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.tech.slice(0, 4).map((label) => (
          <span key={label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {label}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.stores?.android && (
          <a
            href={project.stores.android}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
          >
            <FaExternalLinkAlt className="h-4 w-4" /> Play Store
          </a>
        )}
        {project.stores?.ios && (
          <a
            href={project.stores.ios}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
          >
            <FaExternalLinkAlt className="h-4 w-4" /> App Store
          </a>
        )}
        <Link
          to={detailPath}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
        >
          <FaBookOpen className="h-4 w-4" /> View Case Study
        </Link>
      </div>
    </motion.article>
  )
}
