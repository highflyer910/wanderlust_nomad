import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import sourceData from '@/data.json'


const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/about', name: 'About', component: About },
    { path: '/map', name: 'Map', component: ()=> import('@/views/MapView.vue') },
    { path: '/destination/:id/:slug', name: 'destination.show', 
    component: ()=> import('@/views/DestinationShow.vue'), 
    props: route => ({...route.params, id: parseInt(route.params.id)}), 
    beforeEnter(to, from){
        const exists = sourceData.destinations.find(
            destination => destination.id === parseInt(to.params.id)
        )
        if(!exists){
            return { name: 'NotFound',
            params: {
                pathMatch: to.path.split('/').slice(1)
            },
            query: to.query,
            hash: to.hash,

            }
        }
    },
    children: [
        { 
            path: ':experienceSlug',
            name: 'experience.show',
            component: ()=> import('@/views/ExperienceShow.vue'),
            props: route => ({...route.params, id: parseInt(route.params.id)})
        }
    ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: ()=> import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) return savedPosition
        // Opening an experience scrolls to its text from within the component
        // (ExperienceShow), since the lazy view isn't mounted yet here.
        if (to.name === 'experience.show') return false
        return { top: 0, behavior: 'smooth' }
    }
})

export default router
