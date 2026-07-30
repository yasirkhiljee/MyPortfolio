import React from 'react'
import { useParams, Link } from 'react-router-dom'
import portfolioData from '../data/portfolioData'

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = portfolioData.projects.find((p) => slugify(p.title) === slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-[#030712] pt-[73px] text-white">
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-4">We couldn't find that project. <Link to="/">Go home</Link>.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#030712] pt-[73px] text-white">
      <div className="mx-auto max-w-6xl p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            {project.screenshotUrls && project.screenshotUrls.length > 0 ? (
              <img src={project.screenshotUrls[0]} alt={project.screenshotAlt} className="rounded-lg object-cover" />
            ) : project.screenshot ? (
              <img src={project.screenshot} alt={project.screenshotAlt} className="rounded-lg object-cover" />
            ) : (
              <div className="h-64 rounded-lg bg-slate-900" />
            )}
          </div>
          <div>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-4 text-slate-300">{project.description}</p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm uppercase text-emerald-300/90">Challenge</h3>
                <p className="mt-2 text-slate-300">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase text-emerald-300/90">Solution</h3>
                <p className="mt-2 text-slate-300">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase text-emerald-300/90">Architecture</h3>
                <p className="mt-2 text-slate-300">{project.architecture}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {project.stores && project.stores.android && (
                <a href={project.stores.android} target="_blank" rel="noreferrer" className="rounded-full bg-white/5 px-4 py-2">Play Store</a>
              )}
              {project.stores && project.stores.ios && (
                <a href={project.stores.ios} target="_blank" rel="noreferrer" className="rounded-full bg-white/5 px-4 py-2">App Store</a>
              )}
              <Link to="/" className="rounded-full bg-white/5 px-4 py-2">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
