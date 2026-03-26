const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Schedule',   href: '#schedule' },
  { label: 'Tickets',    href: '#tickets' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">✦ Aarambh</p>
      <p className="footer-quote">
        "If life has been moving too fast lately, maybe this is the pause your soul has been waiting for."
      </p>
      <p className="footer-tag">Come as you are. Leave a little lighter.</p>
      <ul className="footer-nav">
        {NAV.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
      </ul>
      <p className="footer-copy">© 2025 Aarambh – India's First Healing Concert · Indore</p>
    </footer>
  )
}
