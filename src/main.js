import Vue from 'vue'
import App from './views/ShoppingCar'
import router from './router'
import store from './store'

// 引用公用样式
import '@/assets/styles/reset.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
