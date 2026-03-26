import { useReveal } from '../hooks/useReveal'

const LOGOS = [
  '/Sponsor_1.png',
  '/Sponsor_2.png',
  '/Sponsor_3.png',
  '/Sponsor_4.png',
  '/Sponsor_5.png',
  '/Sponsor_6.png',
  '/Sponsor_7.png',
]

export default function Sponsors() {
  const ref = useReveal()

  // Duplicate for seamless infinite loop
  const track = [...LOGOS, ...LOGOS]

  return (
    <section id="sponsors" className="sec-sm text-center">
      <div className="container" ref={ref}>
        <span className="eyebrow reveal">Partners</span>
        <h2 className="heading reveal d1" style={{ fontSize: '1.9rem' }}>
          Our Sponsors
        </h2>
        <div className="rule mx-auto reveal d1" />

        {/* Carousel inside the observed container so reveal works */}
        <div className="carousel-mask reveal d2">
          <div className="carousel-track">
            {track.map((src, i) => (
              <div className="carousel-item" key={i}>
                <img src={src} alt={`Sponsor ${(i % LOGOS.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsors-row reveal d3">
          <div className="sp-item">
            <p className="sp-label">Venue Partner</p>
            <p className="sp-name">Skyline Resort</p>
          </div>
        </div>
      </div>
    </section>
  )
}
