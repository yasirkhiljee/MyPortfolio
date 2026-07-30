import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const ProductShowcase = lazy(() => import('./sections/ProductShowcase'))
const Stats = lazy(() => import('./sections/Stats'))
const Architecture = lazy(() => import('./sections/Architecture'))
const Process = lazy(() => import('./sections/Process'))
const Timeline = lazy(() => import('./sections/Timeline'))
const GitHub = lazy(() => import('./sections/GitHub'))
const Blog = lazy(() => import('./sections/Blog'))
const BlogPost = lazy(() => import('./sections/BlogPost'))
const Personal = lazy(() => import('./sections/Personal'))
const WhyHire = lazy(() => import('./sections/WhyHire'))
const Contact = lazy(() => import('./sections/Contact'))

function HomePage() {
  return (
    <main id="main-content" className="bg-[#030712] text-white">
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <Skills />
        <Projects />
        <ProductShowcase />
        <Stats />
        <Architecture />
        <Process />
        <Timeline />
        <GitHub />
        <Blog />
        <Personal />
        <WhyHire />
        <Contact />
      </Suspense>
    </main>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog/:slug"
          element={
            <main id="main-content" className="bg-[#030712] pt-[73px] text-white">
              <Suspense fallback={<Loader />}>
                <BlogPost />
              </Suspense>
            </main>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
