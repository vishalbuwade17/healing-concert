import { useReveal } from '../hooks/useReveal'

export default function Creator() {
  const ref = useReveal()

  return (
    <section id="creator" className="sec text-center">
      <div className="container" ref={ref}>
        <span className="eyebrow reveal">The Visionary</span>
        <h2 className="heading reveal d1">Behind the Experience</h2>
        <div className="rule mx-auto reveal d1" />

        <div className="creator-card card reveal d2">
          <div className="creator-ring">🌸</div>
          <p className="creator-role">Director &amp; Narrator</p>
          <h3 className="creator-name">Shubhangi Chouhan</h3>
          <p className="creator-handle">Shubhangichouhan____</p>
          <p className="creator-quote">
            "I believe healing is not a destination — it is a direction.<br />
            And this concert is one step on that path."
          </p>
        </div>
      </div>
    </section>
  )
}
