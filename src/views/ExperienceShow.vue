<script setup>
import { computed, ref, onMounted, watch, nextTick } from 'vue'
import sourceData from '@/data.json'
import { usePageMeta } from '@/composables/usePageMeta'

const props = defineProps({
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true }
})

const sectionEl = ref(null)

// Scroll the experience text into view once it's actually in the DOM. Doing
// this here (rather than in the router's scrollBehavior) avoids the "needs two
// clicks" bug: the lazy-loaded view isn't mounted when scrollBehavior runs.
function scrollToDetail() {
    nextTick(() => {
        sectionEl.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
}
onMounted(scrollToDetail)
watch(() => props.experienceSlug, scrollToDetail)

const destination = computed(() =>
    sourceData.destinations.find((d) => d.id === props.id)
)

const experience = computed(() =>
    destination.value?.experiences.find((e) => e.slug === props.experienceSlug)
)

usePageMeta(() => ({
    title: experience.value?.name,
    description: experience.value?.description?.slice(0, 155)
}))
</script>


<template>
    <section v-if="experience" id="experience-detail" ref="sectionEl">
        <h2>{{experience.name}}</h2>
        <div class="experience-show fade-nested">
            <p>{{experience.description}}</p>
        </div>
    </section>
</template>

<style scoped>
@media (max-width: 820px) {
    .experience-show{
        display: block;
        text-align: center;
    }

    h2{
        text-align: center;
        margin-block: 30px;
        font-size: 1.2rem;
    }
}
</style>