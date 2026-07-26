<script setup>
    import { computed } from 'vue'
    import sourceData from '@/data.json'
    import ExperienceCard from '@/components/ExperienceCard.vue'
    import GoBack from '@/components/GoBack.vue'
    import { usePageMeta } from '@/composables/usePageMeta'

    const props = defineProps({
        id: { type: Number, required: true }
    })

    const destination = computed(() =>
        sourceData.destinations.find((d) => d.id === props.id)
    )

    usePageMeta(() => ({
        title: destination.value?.name,
        description: destination.value?.description?.slice(0, 155)
    }))
</script>


<template>
    <div v-if="destination">
        <section class="destination fade-nested">
            <h1>{{ destination.name }}</h1>
            <GoBack />
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name" loading="lazy">
                <p>{{ destination.description }}</p>
            </div>
            <div class="destination-url">
                <a :href="`${destination.url}`" target="_blank" rel="noreferrer">More info</a>
            </div>
        </section>
        <section class="experiences">
            <h2>Places I'm going to visit in {{ destination.name }}</h2>
            <div class="cards">
                <router-link
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
                >
                <ExperienceCard
                    :experience="experience"
                />
                </router-link>
            </div>
            <router-view />
        </section>
    </div>
</template>

<style scoped>
@media (max-width: 820px) {
    .destination-details {
        margin-top: 50px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .destination-details h1 {
        margin-bottom: 20px;
    }
    .experiences h2 {
        text-align: left;
        font-size: 1.2rem;
        margin-block: 20px;
    }
    .experiences .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;   
        text-align: center;
    }
    
}

@media (min-width: 769px) {
    .experiences .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        justify-items: center;
        text-align: center;
    }
}

</style>
