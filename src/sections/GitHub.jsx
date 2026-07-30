import { motion } from 'framer-motion'
import { FaStar, FaCodeBranch, FaGithub } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import portfolioData from '../data/portfolioData'
import { fadeIn, staggerChildren } from '../utils/animations'

const CONTRIBUTION_ROWS = 6
const CONTRIBUTION_COLUMNS = 14
const CONTRIBUTION_COLORS = ['bg-slate-800', 'bg-emerald-500/20', 'bg-emerald-500/40', 'bg-emerald-500/60', 'bg-emerald-500/80']
const CONTRIBUTION_CELLS = Array.from({ length: CONTRIBUTION_ROWS * CONTRIBUTION_COLUMNS }, (_, index) => (index * 37) % CONTRIBUTION_COLORS.length)

function ContributionGrid() {
  return (
    <div
      className="grid gap-1 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.85)]"
      style={{ gridTemplateColumns: `repeat(${CONTRIBUTION_COLUMNS}, minmax(0, 1fr))` }}
      role="img"
      aria-label="Illustrative GitHub contribution graph"
    >
      {CONTRIBUTION_CELLS.map((intensity, index) => (
        <div key={index} className={`${CONTRIBUTION_COLORS[intensity]} h-4 w-4 rounded-sm border border-white/5`} />
      ))}
    </div>
  )
}

export default function GitHub() {
  const { github } = portfolioData

  return (
    <SectionWrapper id="github" className="relative overflow-hidden bg-[#020611] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="GitHub"
          title="Open-source activity that reflects daily engineering momentum."
          description="Contribution graph, pinned repositories, recent commits, and language distribution for a stronger developer story."
        />

        <motion.div variants={staggerChildren} className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3 text-emerald-300">
                <FaGithub className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.28em]">Contribution Graph</p>
              </div>
              <ContributionGrid />
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Active GitHub contributions that highlight ongoing Android work and open-source engagement.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <p className="mb-5 text-sm uppercase tracking-[0.28em] text-emerald-300">Languages</p>
              <div className="space-y-4">
                {github.languages.map((language) => (
                  <div key={language.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span>{language.name}</span>
                      <span>{language.percentage}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-900">
                      <div className={`h-full rounded-full ${language.bar}`} style={{ width: `${language.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <p className="mb-5 text-sm uppercase tracking-[0.28em] text-emerald-300">Pinned repositories</p>
              <div className="space-y-4">
                {github.pinned.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-emerald-400/30 hover:bg-slate-900"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{repo.language}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{repo.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
                      <span className="inline-flex items-center gap-2">
                        <FaStar /> {repo.stars}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <FaCodeBranch /> {repo.forks}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <p className="mb-5 text-sm uppercase tracking-[0.28em] text-emerald-300">Latest commits</p>
              <div className="space-y-4">
                {github.latestCommits.map((commit) => (
                  <a
                    key={commit.hash}
                    href={commit.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-emerald-400/30 hover:bg-slate-900"
                  >
                    <p className="font-medium text-white">{commit.message}</p>
                    <p className="mt-2 text-sm text-slate-400">{commit.repo} • {commit.date}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
