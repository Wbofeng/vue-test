import Vue from 'vue'
import Router from 'vue-router'

import helloWorld from '@/components/helloWorld'
import Home from '@/components/home'
import todoList from '@/components/todoList'
import processCenter from '@/components/processCenter'
import wind from '@/components/wind'
import rss from '@/components/rss'
import recentAtcs from '@/components/recentAtcs'
import recentAtc from '@/components/recentAtc'
import feeds from '@/components/feeds'
import bookmarks from '@/components/bookmarks'
import suggestions from '@/components/suggestions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      path: '/list',
      name: 'todoList',
      component: todoList
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/process',
      name: 'processCenter',
      component: processCenter
    },
    {
      path: '/wind',
      name: 'wind',
      component: wind
    }, 
    {
      path: '/rss',
      name: 'rss',
      component: rss,
      children: [
        {
          path: 'recentAtcs',
          component: recentAtcs
        },
        {
          path: 'recentAtc',
          component: recentAtc
        },
        {
          path: 'feeds',
          component: feeds
        },
        {
          path: 'bookmarks',
          component: bookmarks
        },
        {
          path: 'suggestions',
          component: suggestions
        }
      ]
    },
  ]
})
