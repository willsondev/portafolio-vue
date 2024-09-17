import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'home',
      component: InicioView
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/InicioView.vue')
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import('../views/ProyectosView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      component: () => import('../views/ExperienciaView.vue')
    }
  ]
  
})

export default router
