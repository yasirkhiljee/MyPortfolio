import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../components/SectionWrapper'
import BlogPostCard from '../components/BlogPostCard'
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
          title="Articles that show my Android & React Native expertise."
          description="Technical content on architecture, Kotlin, performance, and mobile product delivery."
        />

        <motion.div variants={staggerChildren} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.blog.slice(0, 3).map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
          >
            View All Articles
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
