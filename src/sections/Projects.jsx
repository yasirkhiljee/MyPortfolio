import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import ProjectCard from '../components/ProjectCard'
import portfolioData from '../data/portfolioData'
import { fadeIn } from '../utils/animations'
import { slugify } from '../utils/slugify'

function FeaturedProject({ project }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={fadeIn}
      className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <div className="rounded-[28px] border border-white/10 bg-slate-950/95 p-6 shadow-inner shadow-emerald-500/10">
          <div className="relative overflow-hidden rounded-[24px] bg-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),transparent_30%)]" aria-hidden="true" />
            <div className="relative h-[360px] w-full p-6">
              <div className="h-full rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
                {project.screenshotUrls && project.screenshotUrls.length > 0 ? (
                  <img
                    src={project.screenshotUrls[0]}
                    alt={project.screenshotAlt}
                    className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                  />
                ) : project.screenshot ? (
                  <img src={project.screenshot} alt={project.screenshotAlt} className="absolute inset-0 h-full w-full rounded-[20px] object-cover" />
                ) : (
                  <div className="relative z-10 grid gap-4">
                    <div className="h-16 rounded-3xl bg-slate-800/80" />
                    <div className="grid gap-3">
                      <div className="h-4 rounded-full bg-slate-800/70 w-5/6" />
                      <div className="h-4 rounded-full bg-slate-800/70 w-3/4" />
                      <div className="h-4 rounded-full bg-slate-800/70 w-2/3" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-12 rounded-3xl bg-slate-800/80" />
                      <div className="h-12 rounded-3xl bg-slate-800/80" />
                      <div className="h-12 rounded-3xl bg-slate-800/80" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300 shadow-sm shadow-emerald-400/10">
          {project.tag}
        </span>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          {project.title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{project.description}</p>

        <div className="grid gap-4">
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Problem</p>
            <p className="mt-3 leading-7 text-slate-300">{project.challenge}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Solution</p>
            <p className="mt-3 leading-7 text-slate-300">{project.solution}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Architecture</p>
            <p className="mt-3 leading-7 text-slate-300">{project.architecture}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Outcome</p>
            <p className="mt-3 leading-7 text-slate-300">{project.outcome}</p>
          </div>
        </div>

        {project.challenges && (
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Challenges</p>
            <ul className="mt-3 space-y-3 text-slate-300">
              {project.challenges.map((item) => (
                <li key={item} className="list-disc pl-5 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.screens && (
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Screens</p>
            <ul className="mt-3 space-y-3 text-slate-300">
              {project.screens.map((item) => (
                <li key={item} className="list-disc pl-5 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.codeSnippets && (
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Code snippets</p>
            <div className="mt-3 space-y-6 text-slate-300">
              {project.codeSnippets.map((snippet) => (
                <div key={snippet.title}>
                  <p className="text-sm font-semibold text-white">{snippet.title}</p>
                  <pre className="mt-3 overflow-x-auto rounded-3xl border border-white/10 bg-slate-900 p-4 text-xs leading-6 text-slate-300">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.performanceImprovements && (
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Performance improvements</p>
            <ul className="mt-3 space-y-3 text-slate-300">
              {project.performanceImprovements.map((item) => (
                <li key={item} className="list-disc pl-5 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.lessonsLearned && (
          <div className="rounded-3xl bg-slate-950/70 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Lessons learned</p>
            <ul className="mt-3 space-y-3 text-slate-300">
              {project.lessonsLearned.map((item) => (
                <li key={item} className="list-disc pl-5 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.tech.map((label) => (
            <span key={label} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              {label}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
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
          {project.caseStudy && project.caseStudy !== '#' ? (
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
            >
              <FaBookOpen className="h-4 w-4" /> Case Study
            </a>
          ) : (
            <Link
              to={`/projects/${slugify(project.title)}`}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
            >
              <FaBookOpen className="h-4 w-4" /> Case Study
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default function Projects() {
  const [featured, ...otherProjects] = portfolioData.projects

  return (
    <SectionWrapper id="projects" className="relative overflow-hidden bg-[#02050d] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl space-y-16">
        <SectionHeading
          label="Cross-platform products"
          title="Featured React Native apps and mobile product work."
          description="Selected projects across healthcare, finance, home services, and rental marketplaces with strong React Native delivery and product impact."
        />

        <FeaturedProject project={featured} />

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
