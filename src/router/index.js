import { createRouter, createWebHashHistory } from 'vue-router'
import GonetView from '../views/GonetView.vue'
import SspView from '../views/SspView.vue'

const routes = [
  {
    path: '/',
    name: 'GonetView',
    component: GonetView
  },
 
  {
    path: '/ssp',
    name: 'SspView',
    component: SspView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
