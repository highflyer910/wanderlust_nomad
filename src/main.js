import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import './main.css'
import App from './App.vue'
import router from '@/router'

// Vercel Web Analytics: only sends data on the deployed Vercel site.
inject()

createApp(App)
.use(router)
.mount('#app')
