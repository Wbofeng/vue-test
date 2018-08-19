import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import homeSed from './views/homeSed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/homeSed',
      component: homeSed
    }
  ]
})
