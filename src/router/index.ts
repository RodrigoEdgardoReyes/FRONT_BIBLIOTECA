// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Libros from '../views/Libros.vue'
import Lista from '../components/LibroForm.vue'
import Prestamos from '../views/Prestamos.vue'
import LibroList from '../views/LibroList.vue'
import dashboard from '../components/master/dashboard.vue'
import home from '../components/home.vue'
import profile from '../components/profile.vue'

const routes = [
  // { path: '/', name: 'Home', component: Home },.
  { path: '/libros', name: 'Libros', component: Libros },
  { path: '/prestamos', name: 'Prestamos', component: Prestamos },
  // { path: '/lista', name: 'Lista', component: Lista }
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard,
    children: [

  {
    name: 'home',
    path: '/home',
    component: home
  },
  {
    name: 'profile',
    path: '/profile',
    component: profile
  },
  {
    path: 'libros',
    name: 'Libros',
    component: Libros
  },
  {
    path: 'prestamos',
    name: 'Prestamos',
    component: Prestamos
  },
  {
    path: 'lista',
    name: 'Lista',
    component:LibroList
  }
  ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
