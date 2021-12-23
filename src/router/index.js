import { createRouter, createWebHistory } from 'vue-router'
import MainInfo from "../views/MainInfo.vue"
import Adress from "../views/Adress.vue"
import Passport from "../views/Passport.vue"

const routes = [
  {
    path: '/',
    name: 'MainInfo',
    component: MainInfo
  },
  {
    path: '/adress',
    name: 'Adress',
    component: Adress
  },
  {
    path: '/passport',
    name: 'Passport',
    component: Passport
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
