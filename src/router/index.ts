// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Libros from '../views/Libros.vue'
import Prestamos from '../views/Prestamos.vue'
import ListLibros from '../views/Lista.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/libros', name: 'Libros', component: Libros },
  { path: '/prestamos', name: 'Prestamos', component: Prestamos }
  // { path: '/lista', name: 'Lista', component: Lista }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
