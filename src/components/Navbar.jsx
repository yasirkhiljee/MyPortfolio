import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import useActiveSection from '../hooks/useActiveSection'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Experience' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id))
  const prefersReducedMotion = usePrefersReducedMotion()
  const menuRef = useRef(null)
  const closeMenu = () => setIsOpen(false)

  const handleSectionLink = (id) => (event) => {
    if (!isHome) {
      closeMenu()
      return
    }

    const target = document.getElementById(id)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
    window.history.pushState(null, '', `/#${id}`)
    // Closing the mobile menu re-renders the header; doing that in the same tick as
    // scrollIntoView cancels the in-progress smooth scroll, so defer it until the
    // scroll animation has had time to run.
    window.setTimeout(closeMenu, prefersReducedMotion ? 0 : 600)
  }

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    menuRef.current?.querySelector('a')?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-emerald-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        Skip to main content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
        <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-[-0.03em] text-white transition hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-sm"
          >
            Yasir Khan
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  onClick={handleSectionLink(link.id)}
                  aria-current={isHome && activeId === link.id ? 'true' : undefined}
                  className={`text-sm font-medium transition hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-sm ${
                    isHome && activeId === link.id ? 'text-emerald-300' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/#contact"
            onClick={handleSectionLink('contact')}
            className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 lg:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 lg:hidden"
          >
            {isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-white/10 bg-[#030712] lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`/#${link.id}`}
                      onClick={handleSectionLink(link.id)}
                      className={`block rounded-2xl px-4 py-3 text-base font-medium transition hover:bg-white/5 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-inset ${
                        isHome && activeId === link.id ? 'text-emerald-300' : 'text-slate-200'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="/#contact"
                    onClick={handleSectionLink('contact')}
                    className="block rounded-full bg-emerald-500 px-4 py-3 text-center text-base font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
