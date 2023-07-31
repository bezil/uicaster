import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Admin from '../views/Admin.vue'
import IntegrationDetail from '../views/IntegrationDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/web',
    name: 'Web',
    component: () => import("@/views/Web.vue"),
  },
  {
    path: '/apps',
    name: 'Apps',
    component: () => import("@/views/Apps.vue"),
  },
  {
    path: '/mixed',
    name: 'Mixed',
    component: () => import("@/views/Mixed.vue"),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: IntegrationDetail
  },

  {
    path: '/search/:query',
    name: 'Search',
    component: () => import("@/views/Search.vue"),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

]

const router = new VueRouter({
  mode:'history',

  routes,
  scrollBehavior() {

    document.getElementById('app').scrollIntoView();
  }
})

export default router
