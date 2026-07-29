import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import portfolioData from '../data/portfolioData'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'

function formatTitle(slug) {
  return slug
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

export default function BlogPost() {
  const { slug } = useParams()

  const post = useMemo(
    () => portfolioData.blog.find((item) => item.slug === slug),
    [slug]
  )

  if (!post) {
    return (
      <SectionWrapper className="relative overflow-hidden bg-[#020615] text-white">
        <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:px-12">
          <SectionHeading
            label="Article not found"
            title="The article you requested cannot be found."
            description="Return to the blog list or explore the portfolio to continue reviewing Android expertise." 
          />
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper className="relative overflow-hidden bg-[#020615] text-white">
      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading label="Blog article" title={post.title} description={post.description} />
        <div className="mt-12 space-y-10 text-slate-300">
          <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-300">
            <span>{post.date}</span>
            <span className="inline-flex h-1 w-1 rounded-full bg-emerald-300" />
            <span>{post.category}</span>
          </div>

          <article className="prose prose-invert max-w-none space-y-8 text-base leading-8">
            {post.content.map((block) => {
              if (block.type === 'paragraph') {
                return <p key={block.id}>{block.text}</p>
              }
              if (block.type === 'heading') {
                return <h2 key={block.id}>{block.text}</h2>
              }
              if (block.type === 'list') {
                return (
                  <ul key={block.id} className="list-disc pl-6">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={block.id} className="border-l-4 border-emerald-400/50 pl-4 italic text-slate-200">
                    {block.text}
                  </blockquote>
                )
              }
              return null
            })}
          </article>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Why this matters</h3>
            <p className="mt-4 text-slate-300">{post.seoSummary}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/30 hover:bg-white/10"
            >
              Back to blog
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-white"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
