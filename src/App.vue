<template>
  <TheNavigation />
  <div class="container">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">  
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>
