import { createRouter, createWebHistory } from 'vue-router'
import WhalenClicker from '@/views/WhalenClicker.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WhalenClicker',
      component: WhalenClicker,
    },
  ],
})

export default router
