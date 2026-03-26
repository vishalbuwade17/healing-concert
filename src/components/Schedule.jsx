import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  { time: '7:30 PM',   label: 'Gates Open',     sub: 'Arrive early, settle in, breathe.' },
  { time: '8:30 PM',   label: 'Concert Begins',  sub: 'The journey inward starts.' },
  { time: '~10:00 PM', label: 'Concert Ends',    sub: '90 minutes of pure healing.' },
]

export default function Schedule() {
  const ref = useReveal()

  return (
    <section id="schedule" className="sec text-center">
      <div className="container" ref={ref}>
        <span className="eyebrow reveal">Evening Flow</span>
        <h2 className="heading reveal d1">Schedule</h2>
        <div className="rule mx-auto reveal d1" />

        <div className="sched-list card reveal d2">
          {ITEMS.map((item, i) => (
            <div key={i} className="sched-row">
              <span className="sched-time">{item.time}</span>
              <div className="sched-info">
                <strong>{item.label}</strong>
                <span>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
