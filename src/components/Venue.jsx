import { useReveal } from '../hooks/useReveal'

export default function Venue() {
  const ref = useReveal()

  return (
    <section id="venue" className="sec text-center">
      <div className="container" ref={ref}>
        <span className="eyebrow reveal">Where It Happens</span>
        <h2 className="heading reveal d1">The Venue</h2>
        <div className="rule mx-auto reveal d1" />

        <div className="venue-card card reveal d2">
          <div className="venue-pill">Venue Partner</div>
          <h3 className="venue-name">Skyline Resort</h3>
          <p className="venue-loc">📍 Indore, Madhya Pradesh, India</p>
          <p className="venue-desc">
            Set in a serene environment designed to enhance your inner experience.<br />
            Where nature meets intention, and every corner breathes calm.
          </p>
        </div>
      </div>
    </section>
  )
}
