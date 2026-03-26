import { useReveal } from '../hooks/useReveal'

export default function Journey() {
  const ref = useReveal()

  return (
    <section id="journey" className="journey-section">
      <div className="journey-inner" ref={ref}>
        <span className="eyebrow reveal">What Comes Next</span>
        <h2 className="journey-title reveal d1">THE JOURNEY<br />BEGINS HERE...</h2>
        <p className="journey-body reveal d1">This is just the beginning.</p>
        <p className="journey-body reveal d2">
          After Indore, the healing experience will travel across India. City by city, soul by soul — we are building something this country has never seen before.
        </p>
        <p className="journey-body reveal d2">
          Stay tuned as we bring this journey to more cities.
        </p>
        <p className="journey-cities reveal d3">✦ &nbsp; More cities coming soon... &nbsp; ✦</p>
      </div>
    </section>
  )
}
