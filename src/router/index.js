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
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Сontacts.vue')
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

// 404

  {
    path: "*",
    name: "error-404",
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // https://question-it.com/questions/223457/vuejs-prokrutite-k-nachalu-stranitsy-dlja-togo-zhe-marshruta
  //  для того чтобы при переключение на новый роут, он начинался сверху scrollBehavior
  scrollBehavior () {
    // page scroll to top for all route navigations
    return { x: 0, y: 0 }
  },
  routes
})

export default router
