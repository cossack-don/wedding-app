import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ceremony',
    name: 'Ceremony',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ceremony.vue')
  },
  {
    path: '/taxis-and-hotels',
    name: 'Taxis and hotels',
    component: () => import(/* webpackChunkName: "about" */ '../views/Taxis and hotels.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Сontacts.vue')
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },

  {
    path: "*",
    name: "error-404",
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
