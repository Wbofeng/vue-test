import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import rss from './modules/rss'
import suggestions from './modules/suggestions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    rss,
    suggestions
  }
})
