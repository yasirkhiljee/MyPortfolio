import { motion } from 'framer-motion'
import { cardMotion } from '../utils/animations'

const getStars = (rating) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) return '★'
    if (index === fullStars && halfStar) return '☆'
    return '☆'
  })
  return stars.join(' ')
}

export default function SkillCard({ title, rating }) {
  return (
    <motion.article
      variants={cardMotion}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.22),_transparent_40%),_radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.16),_transparent_40%),_rgba(255,255,255,0.03)] p-6 shadow-[0_20px_80px_-52px_rgba(0,0,0,0.95)] backdrop-blur-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-emerald-300/80">Tech</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/20 p-4">
        <div className="flex items-center gap-2 text-lg leading-none text-amber-300">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < Math.round(rating) ? 'text-amber-300' : 'text-slate-600'}>
              ★
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-300">{rating.toFixed(1).replace('.0', '')} / 5</p>
      </div>
    </motion.article>
  )
}
