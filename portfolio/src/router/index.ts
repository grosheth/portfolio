import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('../views/DocumentationView.vue')
    },
    // Need to know how to load .md files for documentation
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../views/LinksView.vue')
    }
  ]
})

export default router
