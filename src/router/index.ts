import BitcoinExchange from '@/components/BitcoinExchange.vue'
import ListaIndices from '@/components/ListaIndices.vue'
import ListaMoedas from '@/components/ListaMoedas.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'moedas',
      component: ListaMoedas
    },
    {
      path: '/indices',
      name: 'indices',
      component: ListaIndices
    },
    {
      path: '/bitcoin',
      name: 'bitcoin',
      component: BitcoinExchange
    }
  ]
})

export default router
