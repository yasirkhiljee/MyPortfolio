import { Link } from 'react-router-dom'
import { HiArrowUp } from 'react-icons/hi'
import portfolioData from '../data/portfolioData'
import { CONTACT_ICONS } from '../utils/contactIcons'

const FOOTER_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

const socialItems = portfolioData.contact.items.filter((item) => item.href)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#02040a] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <Link to="/" className="text-lg font-semibold tracking-[-0.03em] text-white">
              Yasir Khan
            </Link>
            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Senior Android &amp; React Native Engineer building polished, production-ready mobile products.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/80">Navigate</p>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`/#${link.id}`} className="text-sm text-slate-400 transition hover:text-emerald-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/80">Connect</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {socialItems.map((item) => {
                const Icon = CONTACT_ICONS[item.icon]
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={item.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/30 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#02040a]"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {year} Yasir Khan. All rights reserved.</p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#02040a] rounded-sm"
          >
            Back to top <HiArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
