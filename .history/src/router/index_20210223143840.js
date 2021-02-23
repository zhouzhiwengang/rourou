import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from './page/Home.vue'
import Cart from './page/Cart.vue'
import User from './page/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'User',
      component: User
    },
    {
      path: '/user',
      name: 'Cart',
      component: Cart
    },

  ]
})
