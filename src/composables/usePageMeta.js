import { watchEffect } from 'vue'

const SITE = 'Wanderlust Nomad'

// Create the <meta> tag on demand so we can update it reactively on every route.
function ensureMeta(key, attr = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  return el
}

/**
 * Reactively sync the document title + description/OG tags for a page.
 * Pass a plain object for static pages, or a getter that reads reactive
 * state (e.g. a computed destination) for dynamic ones.
 *
 *   usePageMeta({ title: 'About', description: '...' })
 *   usePageMeta(() => ({ title: destination.value?.name, description: '...' }))
 */
export function usePageMeta(source) {
  watchEffect(() => {
    const meta = typeof source === 'function' ? source() : source
    const title = meta && meta.title
    const description = meta && meta.description
    const fullTitle = title ? `${title} · ${SITE}` : SITE

    document.title = fullTitle
    ensureMeta('og:title', 'property').setAttribute('content', fullTitle)
    if (description) {
      ensureMeta('description').setAttribute('content', description)
      ensureMeta('og:description', 'property').setAttribute('content', description)
    }
  })
}
