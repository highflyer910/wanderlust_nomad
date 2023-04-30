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
        <h2>{{experience.name}}</h2>
        <div class="experience-show fade-nested">
            <img :src="`/images/${experience.image}`" :alt="experience.name">
            <p>{{experience.description}}</p>
        </div>
    </section>
</template>

<style scoped>
@media (max-width: 768px) {
    .experience-show{
        display: block;
    }

    h2{
        text-align: center;
        margin-block: 40px;
    }
    .experiences img{
        width: 100%;
        margin: 0 auto 40px;
    }
}
</style>