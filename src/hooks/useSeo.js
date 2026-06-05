import { useEffect } from 'react'

const SITE_NAME = 'Ogun USA'

/**
 * Lightweight document-head manager for per-page SEO.
 * Sets <title>, meta description, and Open Graph title/description.
 */
export default function useSeo({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [key, val] = selector.replace(/meta\[|\]/g, '').split('=')
        el.setAttribute(key, val.replace(/["']/g, ''))
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle)
  }, [title, description])
}
