import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage'
import LoginPage from '@/views/LoginPage'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
