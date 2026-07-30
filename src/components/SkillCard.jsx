import { motion } from 'framer-motion'
import { cardMotion } from '../utils/animations'
import { SKILL_ICONS } from '../utils/skillIcons'

export default function SkillCard({ title }) {
  const Icon = SKILL_ICONS[title]

  return (
    <motion.span
      variants={cardMotion}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-emerald-400/30 hover:bg-slate-900 hover:text-white"
    >
      {Icon ? <Icon className="h-4 w-4 text-emerald-300" aria-hidden="true" /> : null}
      {title}
    </motion.span>
  )
}
