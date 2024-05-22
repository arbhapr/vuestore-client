import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/cart/IndexV.vue'
import Product from '../views/product/IndexV.vue'
import NotFound from '../views/errors/NotFound.vue'
import ProductDetail from '../views/product/DetailV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
