import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Header.css'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/mission', label: 'Mission' },
  { to: '/join', label: 'Join' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Solid background after scrolling past the hero threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header className={`header ${scrolled || menuOpen ? 'header--solid' : ''}`}>
        <div className="header__inner container container--wide">
        <Link to="/" className="header__brand" aria-label="Ogun USA — home">
          OGUN <span className="header__brand-sub">USA</span>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `header__link ${isActive ? 'is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`header__bars ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        </div>
      </header>

      {/* Rendered as a sibling of <header> so it escapes the header's
          backdrop-filter, which would otherwise trap this fixed panel
          inside the 72px-tall header and make it appear transparent. */}
      <div
        id="mobile-menu"
        className={`header__mobile ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `header__mobile-link ${isActive ? 'is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
