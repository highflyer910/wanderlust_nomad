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