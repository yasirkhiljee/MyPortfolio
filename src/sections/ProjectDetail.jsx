import { useParams, Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import { FaExternalLinkAlt } from 'react-icons/fa'
import portfolioData from '../data/portfolioData'
import { slugify } from '../utils/slugify'
import useDocumentMeta from '../hooks/useDocumentMeta'

function DetailBlock({ label, children }) {
  return (
    <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">{label}</p>
      <div className="mt-3 leading-7 text-slate-300">{children}</div>
    </div>
  )
}

function DetailList({ label, items }) {
  return (
    <DetailBlock label={label}>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="list-disc pl-5 leading-7">
            {item}
          </li>
        ))}
      </ul>
    </DetailBlock>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = portfolioData.projects.find((item) => slugify(item.title) === slug)

  useDocumentMeta(
    project ? `${project.title} Case Study | Yasir Khan` : 'Project not found | Yasir Khan',
    project?.description
  )

  if (!project) {
    return (
      <main className="min-h-screen bg-[#030712] pt-[73px] text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-4 text-slate-300">We couldn't find that project.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
          >
            <HiArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </main>
    )
  }

  const screenshots = project.screenshotUrls?.length
    ? project.screenshotUrls
    : project.screenshot
      ? [project.screenshot]
      : []

  return (
    <main className="min-h-screen bg-[#030712] pt-[73px] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-12">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-emerald-300"
        >
          <HiArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <div className="mt-8 space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300 shadow-sm shadow-emerald-400/10">
            {project.tag}
          </span>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{project.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">
              {project.platforms ? project.platforms.join(' • ') : 'Android • iOS'}
            </span>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              React Native
            </span>
          </div>
        </div>

        {screenshots.length > 0 && (
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
            {screenshots.map((src) => (
              <div
                key={src}
                className="flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white p-5"
              >
                <img src={src} alt={project.screenshotAlt} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        )}

        {project.contribution && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300">
            <span className="font-semibold text-white">Contribution:</span> {project.contribution}
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <DetailBlock label="Problem">{project.challenge}</DetailBlock>
          <DetailBlock label="Solution">{project.solution}</DetailBlock>
          <DetailBlock label="Architecture">{project.architecture}</DetailBlock>
          <DetailBlock label="Outcome">{project.outcome}</DetailBlock>
        </div>

        <div className="mt-4 grid gap-4">
          {project.challenges && <DetailList label="Challenges" items={project.challenges} />}
          {project.screens && <DetailList label="Screens" items={project.screens} />}
          {project.performanceImprovements && (
            <DetailList label="Performance improvements" items={project.performanceImprovements} />
          )}
          {project.lessonsLearned && <DetailList label="Lessons learned" items={project.lessonsLearned} />}

          {project.codeSnippets && (
            <DetailBlock label="Code snippets">
              <div className="space-y-6">
                {project.codeSnippets.map((snippet) => (
                  <div key={snippet.title}>
                    <p className="text-sm font-semibold text-white">{snippet.title}</p>
                    <pre className="mt-3 overflow-x-auto rounded-3xl border border-white/10 bg-slate-900 p-4 text-xs leading-6 text-slate-300">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </DetailBlock>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.map((label) => (
            <span key={label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.stores?.android && (
            <a
              href={project.stores.android}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
            >
              <FaExternalLinkAlt className="h-4 w-4" /> Play Store
            </a>
          )}
          {project.stores?.ios && (
            <a
              href={project.stores.ios}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
            >
              <FaExternalLinkAlt className="h-4 w-4" /> App Store
            </a>
          )}
          {project.caseStudy && project.caseStudy !== '#' && (
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
            >
              External case study
            </a>
          )}
        </div>
      </div>
    </main>
  )
}
