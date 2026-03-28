import { useReveal } from '../hooks/useReveal'

const CARDS = [
  { num: '01', icon: '🔱', title: 'Experience the Power of Shiva', desc: 'Awaken strength, stillness, and inner balance. Feel the cosmic energy that dissolves what no longer serves you.' },
  { num: '02', icon: '🪷', title: 'Meet the Inner You',            desc: 'Reconnect with your true self beyond the noise. In the silence between notes, you will find yourself waiting.' },
  { num: '03', icon: '🌅', title: 'Aarambh – A New Beginning',     desc: 'Step into a new chapter with clarity and peace. Every ending is the universe making room for something sacred.' },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="sec text-center">
      <div className="container" ref={ref}>
        <span className="eyebrow reveal">What Awaits You</span>
        <h2 className="heading reveal d1">The Experience</h2>
        <div className="rule mx-auto reveal d1" />

        <div className="exp-grid">
          {CARDS.map((c, i) => (
            <div key={i} className={`card exp-card reveal d${i + 1}`}>
              <div className="exp-num">{c.num}</div>
              <div className="exp-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="exp-visual reveal d3">
          <h3 className="exp-visual-title">A Seated Concert for All Generation</h3>
          <div className="exp-visual-img" >
            <img src="/Seated.JPEG" alt="A Seated Concert for All Generation" />
            <p class="note">*Image is for illustration purposes only and may vary depending on the venue.*</p>
          </div>
        </div>
      </div>
    </section>
  )
}
