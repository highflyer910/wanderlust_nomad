<script setup>
import { ref, computed } from 'vue'
import sourceData from '@/data.json'
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta({
  title: 'All Destinations',
  description:
    'Browse every dream destination on my Wanderlust Nomad travel map — search by name or filter by continent.'
})

const destinations = sourceData.destinations
const query = ref('')
const activeContinent = ref('All')

const continents = computed(() => [
  'All',
  ...Array.from(new Set(destinations.map((d) => d.continent))).sort()
])

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return destinations.filter((d) => {
    const matchesQuery = !q || d.name.toLowerCase().includes(q)
    const matchesContinent =
      activeContinent.value === 'All' || d.continent === activeContinent.value
    return matchesQuery && matchesContinent
  })
})
</script>

<template>
  <div class="about fade-nested">
    <h1>All Destinations ✈️</h1>

    <div class="toolbar">
      <label class="search">
        <span aria-hidden="true">🔎</span>
        <input
          v-model="query"
          type="search"
          placeholder="Search a destination…"
          aria-label="Search destinations"
        />
      </label>
      <div class="chips">
        <button
          v-for="c in continents"
          :key="c"
          class="chip"
          :class="{ 'is-active': activeContinent === c }"
          type="button"
          @click="activeContinent = c"
        >
          {{ c }}
        </button>
      </div>
    </div>

    <div v-if="filtered.length" class="dest-grid">
      <router-link
        v-for="destination in filtered"
        :key="destination.id"
        class="dest-card"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
      >
        <div class="dest-card__media">
          <img
            :src="`/images/${destination.image}`"
            :alt="destination.name"
            loading="lazy"
          />
          <span class="dest-card__badge">{{ destination.continent }}</span>
        </div>
        <div class="dest-card__body">
          <h3>{{ destination.name }}</h3>
          <span class="dest-card__go">Explore →</span>
        </div>
      </router-link>
    </div>

    <p v-else class="empty">No destinations match your search 🧭 Try another word.</p>
  </div>
</template>
