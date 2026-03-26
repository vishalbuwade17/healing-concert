import { useReveal } from '../hooks/useReveal'

const BMS = 'https://in.bookmyshow.com/events/the-healing-concert-adhyay-1-aarambh/ET00487334'

export default function Tickets() {
  const ref = useReveal()

  return (
    <section id="tickets" className="sec text-center">
      <div className="container" ref={ref}>
        <span className="eyebrow reveal">Secure Your Place</span>
        <h2 className="heading reveal d1">Tickets</h2>
        <div className="rule mx-auto reveal d1" />

        <div className="tickets-grid">
          <div className="card t-card dim reveal d1">
            <div className="t-phase t-sold">Phase 1</div>
            <h3>Early Bird Phase 1</h3>
            <p>The first wave of souls found their seats. This phase is now closed.</p>
            <span className="t-sold-tag">SOLD OUT</span>
          </div>

          <div className="card t-card reveal d2">
            <div className="t-phase t-live">Limited Seats</div>
            <h3>Early Bird Phase 2</h3>
            <p>A few seats remain. This is your moment to step into the experience.</p>
            <a href={BMS} target="_blank" rel="noopener noreferrer" className="btn">
              Reserve Your Seat <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

        <p className="t-urgency reveal d3">
          ✦ &nbsp; Limited seats. Intimate experience. Secure your place now. &nbsp; ✦
        </p>
      </div>
    </section>
  )
}
