import { ref, watch } from 'vue'

const STORAGE_KEY = 'wn-theme'

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Module-level singleton so every component shares one reactive theme.
const theme = ref(getInitialTheme())

function apply(value) {
  document.documentElement.setAttribute('data-theme', value)
}
apply(theme.value)

watch(theme, (value) => {
  apply(value)
  localStorage.setItem(STORAGE_KEY, value)
})

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}
