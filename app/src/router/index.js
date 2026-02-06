import { createRouter, createWebHistory } from 'vue-router'
import GenieMan from '@/views/GenieMan.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'GenieMan',
      component: GenieMan,
    },
  ],
})

export default router
