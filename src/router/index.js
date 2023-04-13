import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'


const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/about', name: 'About', component: About },
    { path: '/destination/:id/:slug', name: 'destination.show', component: ()=>import('@/views/DestinationShow.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    //linkActiveClass: 'active'
})

export default router
