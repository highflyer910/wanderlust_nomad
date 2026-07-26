<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import sourceData from '@/data.json'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta({
  title: 'Travel Map',
  description:
    'An interactive world map of every Wanderlust Nomad destination — click a pin to explore the place.'
})

const router = useRouter()
const mapEl = ref(null)
let map = null

// Cute teardrop pin with an emoji, styled entirely in CSS (no image assets).
const pinIcon = L.divIcon({
  className: 'map-pin-wrap',
  html: '<div class="map-pin"><span>📍</span></div>',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -32]
})

function popupHtml(d) {
  return `
    <div class="map-popup">
      <img src="/images/${d.image}" alt="${d.name}" />
      <strong>${d.name}</strong><br/>
      <button class="btn popup-go" data-id="${d.id}" data-slug="${d.slug}">
        Explore ${d.name} →
      </button>
    </div>`
}

onMounted(() => {
  map = L.map(mapEl.value, { scrollWheelZoom: false }).setView([25, 10], 2)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map)

  const markers = []
  sourceData.destinations.forEach((d) => {
    if (!d.coords) return
    const marker = L.marker([d.coords.lat, d.coords.lng], { icon: pinIcon })
      .addTo(map)
      .bindPopup(popupHtml(d))
    markers.push(marker)
  })

  if (markers.length) {
    map.fitBounds(L.featureGroup(markers).getBounds().pad(0.2))
  }

  // Popups are raw HTML, so wire the "Explore" button up to the SPA router.
  map.on('popupopen', (e) => {
    const btn = e.popup.getElement().querySelector('.popup-go')
    if (btn) {
      btn.addEventListener('click', () => {
        router.push({
          name: 'destination.show',
          params: { id: Number(btn.dataset.id), slug: btn.dataset.slug }
        })
      })
    }
  })
})

onBeforeUnmount(() => {
  if (map) map.remove()
})
</script>

<template>
  <div class="map-page fade-nested">
    <h1>My Travel Map 🗺️</h1>
    <p class="map-intro">
      Every pin is a place I dream of exploring. Click one to dive in.
    </p>
    <div ref="mapEl" class="map-wrap"></div>
  </div>
</template>

<style scoped>
.map-intro {
  color: var(--text-soft);
  margin-top: -4px;
  margin-bottom: 18px;
}
</style>
