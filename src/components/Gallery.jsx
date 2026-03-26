import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const IMGS = [
  { src: 'Gallery_1.jpeg',  label: 'Shubhangi Chouhan : Director, Actor, Writer' },
  { src: 'Apurva-Raje.jpeg',  label: 'Apurva Raje : Music, Voice' },
  { src: 'Priya-singh.jpeg',  label: 'Priya Singh : Actor' },
  { src: 'Supreet-mangsule.jpeg', label: 'Supreet Mangsule : Music' },
  { src: 'prashant-chaudhary.jpeg',  label: 'Prashant Chaudhary : Music, Voice' },
]

export default function Gallery() {
  const [lb, setLb] = useState(null)
  const ref = useReveal()

  return (
    <section id="gallery" className="sec text-center">
      <div className="container" ref={ref}>
        <span className="eyebrow reveal">Glimpses</span>
        <h2 className="heading reveal d1">The Artists</h2>
        <div className="rule mx-auto reveal d1" />

        <div className="gallery-grid reveal d2">
          {IMGS.map((img, i) => (
            <div key={i} className="g-item" onClick={() => setLb(img.src)}>
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="g-overlay"><span>{img.label}</span></div>
            </div>
          ))}
        </div>
      </div>

      {lb && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <button className="lb-close" onClick={() => setLb(null)}>✕</button>
          <img src={lb} alt="Gallery" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
