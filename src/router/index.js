import Vue from 'vue'
import VueRouter from 'vue-router'
import Merchants from '../components/Merchants.vue'
import Product_Merchants from '../components/Product_Merchants.vue'
import Service_Merchants from '../components/Service_Merchants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Merchants',
    component: Merchants
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product_Merchants',
    component: Product_Merchants
  },
  {
    path: '/service',
    name: 'Service_Merchants',
    component: Service_Merchants
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
