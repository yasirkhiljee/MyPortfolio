import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Process = lazy(() => import('./sections/Process'))
const Timeline = lazy(() => import('./sections/Timeline'))
const ProjectDetail = lazy(() => import('./sections/ProjectDetail'))
const Blog = lazy(() => import('./sections/Blog'))
const BlogList = lazy(() => import('./sections/BlogList'))
const BlogPost = lazy(() => import('./sections/BlogPost'))
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
        <Process />
        <Timeline />
        <Blog />
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
          path="/projects/:slug"
          element={
            <main id="main-content" className="bg-[#030712] pt-[73px] text-white">
              <Suspense fallback={<Loader />}>
                <ProjectDetail />
              </Suspense>
            </main>
          }
        />
        <Route
          path="/blog"
          element={
            <main id="main-content" className="bg-[#030712] pt-[73px] text-white">
              <Suspense fallback={<Loader />}>
                <BlogList />
              </Suspense>
            </main>
          }
        />
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
