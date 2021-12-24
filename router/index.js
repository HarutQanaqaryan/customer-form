import { createRouter, createWebHistory } from 'vue-router'
import MainInfo from "../src/components/MainInfo"
import Adress from "../src/components/Adress.vue";
import Passport from "../src/components/Passport.vue";
import Finnaly from "../src/components/Finnaly.vue";

const routes = [
  {
    path: '/',
    name: "MainInfo",
    component: MainInfo
  },
  {
    path: '/adress',
    name: "Adress",
    component: Adress
  },
  {
    path: '/passport',
    name: "Passport",
    component: Passport
  },
  {
    path: "/form-finnaly",
    name: "Finnaly",
    component: Finnaly
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
