<script>
export default {
  props:{
    experience:{type: Object, required: true,}
  }
}
</script>


<template>
    <div class="card fade-nested">
      <img :src="`/images/${experience.image}`" :alt="experience.name" class="card_image"/>
      <span class="card__text">
        {{ experience.name }}
      </span>
    </div>
</template>

<style scoped>
  .card_image{
    transition: 1s ease transform;
  }

  .card_image:hover{
    transform: scale(1.05);
  }

  @media screen and (max-width: 820px) {
    .card-image{
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  }
</style>