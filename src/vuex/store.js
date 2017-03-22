import Vuex from 'vuex'
import Vue from 'vue'
import channelMenu from './modules/channelMenu'
import app from './modules/app'
Vue.use(Vuex)

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    channelMenu,
    app
  },
  strict: debug
})
