import { createRouter, createWebHashHistory } from 'vue-router'
import GonetView from '../views/GonetView.vue'
import ContentView from '../views/ContentView.vue'
import DesignView from '../views/DesignView.vue'

const routes = [
  {
    path: '/',
    name: 'GonetView',
    component: GonetView
  },
  {
    path: '/content',
    name: 'ContentView',
    component: ContentView
  },
  {
    path: '/design',
    name: 'DesignView',
    component: DesignView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
