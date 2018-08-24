import Vue from 'vue'
import Router from 'vue-router'

import wind from '@/components/wind'
import rss from '@/components/rss'
import recentAtcs from '@/components/recentAtcs'
import recentAtc from '@/components/recentAtc'
import feeds from '@/components/feeds'
import bookmarks from '@/components/bookmarks'
import suggestions from '@/components/suggestions'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wind',
      component: wind
    },
    {
      path: '/rss',
      redirect: '/recentAtcs',
      name: 'rss',
      component: rss,
      children: [
        {
          path: '/recentAtcs',
          component: recentAtcs
        },
        {
          path: '/recentAtc/:id',
          component: recentAtc
        },
        {
          path: '/feeds/:id',
          component: feeds
        },
        {
          path: '/bookmarks/:id',
          component: bookmarks
        },
        {
          path: '/suggestions/:id',
          component: suggestions
        }
      ]
    },
    {
      path: '/test',
      component: test
    }
  ]
})
