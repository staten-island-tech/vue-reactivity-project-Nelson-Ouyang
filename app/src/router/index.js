import { createRouter, createWebHistory } from 'vue-router'
import WhalenClicker from '@/views/WhalenClicker.vue'
import ShopCards from '@/views/ShopCards.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WhalenClicker',
      component: WhalenClicker,
    },
    {
      path: '/shop',
      name: 'ShopCards',
      component: ShopCards,
    },
  ],
})

export default router
