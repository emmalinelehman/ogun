import { useEffect, useRef } from 'react'

/**
 * Adds `is-visible` to elements with the `reveal` class when they
 * enter the viewport. Returns a ref to attach to a container; all
 * `.reveal` descendants (and the container itself) are observed.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = [
      ...(root.classList.contains('reveal') ? [root] : []),
      ...root.querySelectorAll('.reveal'),
    ]

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
