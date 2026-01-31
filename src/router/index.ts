// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/Login.vue'
import DashboardPage from '../pages/Dashboard.vue'  // Тоже в pages!

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage
    }
  ]
})

export default router
