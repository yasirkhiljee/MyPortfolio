import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero'
import Loader from './components/Loader'

const About = lazy(() => import('./sections/About'))
const Stats = lazy(() => import('./sections/Stats'))
const Timeline = lazy(() => import('./sections/Timeline'))
const Process = lazy(() => import('./sections/Process'))
const ProductShowcase = lazy(() => import('./sections/ProductShowcase'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const Blog = lazy(() => import('./sections/Blog'))
const BlogPost = lazy(() => import('./sections/BlogPost'))
const Architecture = lazy(() => import('./sections/Architecture'))
const Personal = lazy(() => import('./sections/Personal'))
const Contact = lazy(() => import('./sections/Contact'))
const WhyHire = lazy(() => import('./sections/WhyHire'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))

function HomePage() {
  return (
    <main id="main-content" className="bg-[#030712] text-white">
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <ProductShowcase />
        <Stats />
        <Timeline />
        <Architecture />
        <Process />
        <Testimonials />
        <Blog />
        <Personal />
        <WhyHire />
        <Contact />
        <Skills />
        <Projects />
      </Suspense>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/blog/:slug"
        element={
          <Suspense fallback={<Loader />}>
            <BlogPost />
          </Suspense>
        }
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
