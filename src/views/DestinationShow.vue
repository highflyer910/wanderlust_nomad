<script>
    import sourceData from '@/data.json'
    import ExperienceCard from '@/components/ExperienceCard.vue'
    import GoBack from '@/components/GoBack.vue'
    export default {
        components: {ExperienceCard, GoBack},
        props: {
            id: {type: Number, required: true}
        },
        computed: {
            destination() {
                return sourceData.destinations.find(
                    destination => destination.id === this.id
                )
            }
        }
    }
</script>


<template>
    <div>
        <section v-if="destination" class="destination fade-nested">
            <h1>{{ destination.name }}</h1>
            <GoBack />
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name">
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
@media (max-width: 768px) {
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
        text-align: center;
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
