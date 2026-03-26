import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="about-section">
      <div className="container" ref={ref}>
        <div className="about-grid">

          <div className="reveal">
            <div className="about-img">
              <img src="/shubhangi.jpg.jpeg"
                alt="Shubhangi Chouhan" />
              <div className="about-img-ring" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div className="reveal">
              <span className="eyebrow">Our Story</span>
              <h2 className="heading">Not Just a Concert.<br />A Collective Exhale.</h2>
              <div className="rule" />
            </div>

            <p className="about-pull reveal d1">
              "A Family Concert where you sit with your parents, friends, partner, kids — or even alone..."
            </p>
            <p className="about-text reveal d1">
              Not every concert is meant to make you dance. Some are meant to make you pause, breathe, and feel again.
            </p>
            <p className="about-text reveal d2">
              In a world that moves too fast, we often forget to sit with ourselves. We forget what stillness feels like.
            </p>
            <p className="about-text reveal d2">
              This is not just entertainment — it is a collective experience of reflection, connection, and healing.
            </p>
            <p className="about-divine reveal d3">
              ✦ &nbsp; Guided by the divine energy of Shiva &amp; Krishna, step into your next Adhyaay. &nbsp; ✦
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
