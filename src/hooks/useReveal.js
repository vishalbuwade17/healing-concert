import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll('.reveal').forEach((c, i) =>
          setTimeout(() => c.classList.add('visible'), i * 120)
        )
        io.unobserve(el)
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return ref
}
