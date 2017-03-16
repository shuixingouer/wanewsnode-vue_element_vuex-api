import Vuex from 'vuex'
import Vue from 'vue'
import channelMenu from './modules/channelMenu'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    channelMenu
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
