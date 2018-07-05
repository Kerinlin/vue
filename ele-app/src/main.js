// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import goods from '@/components/goods/goods'
import seller from '@/components/seller/seller'
import ratings from '@/components/ratings/ratings'
import {currency} from './currency'
import '@/common/stylus/index.styl';
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.filter('currency',currency)
/* eslint-disable no-new */
const routes = [{
  path: '/',
  component: goods
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];
const router=new VueRouter({
  linkActiveClass: 'active',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // render: h => h(App)
})
