import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCar from './views/ShoppingCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShoppingCar
    }
  ]
})
