import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'


const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/about', name: 'About', component: About },
    { path: '/brazil', name: 'brazil', component: () => import('@/views/Brazil.vue')},
    { path: '/hawaii', name: 'hawaii', component: () => import('@/views/Hawaii.vue')},
    { path: '/jamaica', name: 'jamaica', component: () => import('@/views/Jamaica.vue')},
    { path: '/panama', name: 'panama', component: () => import('@/views/Panama.vue')},
    { path: '/destination/:id', name: 'destination.show', component: ()=>import('@/views/DestinationShow.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router
