import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('nav', 'home'), href: '#' },
    { name: t('nav', 'about'), href: '#nosotros' },
    { name: t('nav', 'methodology'), href: '#metodologia' },
    { name: t('nav', 'facilities'), href: '#instalaciones' },
    { name: t('nav', 'admissions'), href: '#admisiones' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo1.png"
              alt="Preciosos Momentos"
              className="w-14 h-14 object-cover"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-text link-hover text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-xl">{language === 'es' ? '🇪🇸' : '🇺🇸'}</span>
            </button>
            
            <button className="btn-primary text-sm">
              {t('nav', 'requestInfo')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-heading"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 font-body text-text link-hover"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-3 text-text"
            >
              <span className="text-xl">{language === 'es' ? '🇪🇸' : '🇺🇸'}</span>
            </button>
            <button className="btn-primary w-full mt-4 text-sm">
              {t('nav', 'requestInfo')}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
