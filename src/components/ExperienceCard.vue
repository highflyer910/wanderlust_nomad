<script>
export default {
  props:{
    experience:{type: Object, required: true,}
  }
}
</script>


<template>
    <div class="card fade-nested">
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <span class="card__text">
        {{ experience.name }}
      </span>
    </div>
  </template>