import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    }
  ]
})

export default router
