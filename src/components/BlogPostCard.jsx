import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeIn } from '../utils/animations'

export default function BlogPostCard({ post }) {
  return (
    <motion.article
      variants={fadeIn}
      className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30"
    >
      <div className="mb-4 inline-flex rounded-full bg-emerald-500/10 px-3 py-2 text-xs uppercase tracking-[0.3em] text-emerald-300">
        {post.category || 'Article'}
      </div>
      <h3 className="text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{post.description}</p>
      <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
        <span>{post.date}</span>
        <Link to={post.url} className="font-semibold text-emerald-300 transition hover:text-white">
          Read →
        </Link>
      </div>
    </motion.article>
  )
}
