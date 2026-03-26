import { useState, useEffect } from 'react'

const BMS = 'https://in.bookmyshow.com/events/the-healing-concert-adhyay-1-aarambh/ET00487334'
const LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Schedule',   href: '#schedule' },
  { label: 'Venue',      href: '#venue' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Tickets',    href: '#tickets' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-brand">
        <span className="star">✦</span> The Healing Concert
      </a>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={close}>{l.label}</a>
          </li>
        ))}
        
      </ul>

      <a href={BMS} target="_blank" rel="noopener noreferrer"
        className="btn nav-cta nav-desktop-cta">
        Reserve Your Seat
      </a>

      <button className={`burger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
