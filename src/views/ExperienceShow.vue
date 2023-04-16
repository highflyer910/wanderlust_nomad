<script>
import sourceData from '@/data.json'
export default {
    props: {
        id: {Number, required: true},
        experienceSlug: {type: String, required: true},
    },
    computed: {
        destination() {
            return sourceData.destinations.find(
                destination => destination.id === this.id
            )
        },
        experience() {
            return this.destination.experiences.find(
                experience => experience.slug === this.experienceSlug
            )
        }
    }
}
</script>



<template>
    <section>
        <h1>{{experience.name}}</h1>
        <div class="experience-show fade-nested">
            <img :src="`/images/${experience.image}`" :alt="experience.name">
            <p>{{experience.description}}</p>
        </div>
    </section>
</template>