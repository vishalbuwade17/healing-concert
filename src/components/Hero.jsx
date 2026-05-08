const BMS = 'https://in.bookmyshow.com/events/the-healing-concert-adhyay-1-aarambh/ET00487334'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src="shubhangi.jpg.jpeg"
          alt="Golden hour landscape" />
      </div>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-inner">
        <span className="eyebrow">India's First Healing Concert&nbsp;&nbsp;</span>
        <h1 className="hero-title">THE HEALING<br />CONCERT</h1>
        <p className="hero-sub">The Healing Concert अध्याय : १ - Aarambh</p>
        <p className="hero-tagline">"Come as you are. Leave a little lighter."</p>
        <div className="hero-meta">
          <strong>16 May</strong>
          <span className="hero-dot" />
          <strong>Indore, India</strong>
        </div>
        <a href={BMS} target="_blank" rel="noopener noreferrer" className="btn">
          Reserve Your Seat <span className="btn-arrow">→</span>
        </a>
        <p className="hero-soul">
          A soulful experience designed to help you pause, breathe, and reconnect.
        </p>
      </div>

      <div className="scroll-cue">scroll</div>
    </section>
  )
}
