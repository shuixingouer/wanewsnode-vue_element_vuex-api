import Vuex from 'vuex'
import Vue from 'vue'
import channelMenu from './modules/channelMenu'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    channelMenu
  },
  strict: process.env.NODE_ENV !== 'production'
})
