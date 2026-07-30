import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import BlogPostCard from '../components/BlogPostCard'
import portfolioData from '../data/portfolioData'
import { staggerChildren } from '../utils/animations'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function BlogList() {
  useDocumentMeta(
    'Blog | Yasir Khan',
    'Technical articles on Android and React Native architecture, Kotlin, performance, and mobile product delivery.'
  )

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
      <Link to="/#blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-emerald-300">
        <HiArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mt-8 space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Blog</p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">All articles</h1>
        <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Technical content on architecture, Kotlin, performance, and mobile product delivery.
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {portfolioData.blog.map((post) => (
          <BlogPostCard key={post.title} post={post} />
        ))}
      </motion.div>
    </div>
  )
}
