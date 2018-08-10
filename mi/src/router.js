import Vue from 'vue'
import Router from 'vue-router'
import Web from './views/web.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'web',
      component: Web
    }
  ]
})
