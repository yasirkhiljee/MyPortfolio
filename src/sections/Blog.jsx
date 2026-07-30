import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import portfolioData from '../data/portfolioData'
import { fadeIn, staggerChildren } from '../utils/animations'

export default function Blog() {
  return (
    <SectionWrapper id="blog" className="relative overflow-hidden bg-[#020615] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
        variants={fadeIn}
        className="relative mx-auto max-w-7xl space-y-10"
      >
        <SectionHeading
          label="Blog"
          title="Articles that show my Android expertise and improve SEO."
          description="Technical content on architecture, Kotlin, performance, and mobile product delivery."
        />

        <motion.div variants={staggerChildren} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.blog.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeIn}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="mb-4 inline-flex rounded-full bg-emerald-500/10 px-3 py-2 text-xs uppercase tracking-[0.3em] text-emerald-300">
                Article
              </div>
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{post.description}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                <span>{post.date}</span>
                <Link
                  to={post.url}
                  className="font-semibold text-emerald-300 transition hover:text-white"
                >
                  Read →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
