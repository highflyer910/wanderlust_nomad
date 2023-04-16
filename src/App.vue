<script>
  import TheNavigation from '@/components/TheNavigation.vue'
  export default {
    name: 'App',
    components: {TheNavigation}
  }
</script>

<template>
  <TheNavigation />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
  </div>
  
</template>
