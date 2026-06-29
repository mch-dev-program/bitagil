import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { NAV_LINKS } from '../../lib/constants'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space/85 backdrop-blur-xl border-b border-muted/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 select-none">
          <img src="/logo.png" alt="BitAgil" className="w-8 h-8 rounded-full" />
          <span className="font-display text-xl font-bold tracking-tight">
            bit<span className="text-primary">agil</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const active = location.pathname === href
            return (
              <li key={href} className="relative">
                <Link
                  to={href}
                  className={`text-sm font-medium transition-colors duration-200 pb-1 ${
                    active ? 'text-text' : 'text-muted hover:text-text'
                  }`}
                >
                  {label}
                </Link>
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button href="/contacto" variant="accent" size="sm">
              Empezar proyecto
            </Button>
          </div>
          <button
            className="md:hidden text-muted hover:text-text transition-colors p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xl leading-none">{menuOpen ? '✕' : '≡'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-space/95 backdrop-blur-xl border-b border-muted/20"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map(({ label, href }) => {
                const active = location.pathname === href
                return (
                  <Link
                    key={href}
                    to={href}
                    className={`block transition-colors py-1 ${
                      active ? 'text-text' : 'text-muted hover:text-text'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
              <Button href="/contacto" variant="accent" size="sm" className="w-full mt-2">
                Empezar proyecto
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
