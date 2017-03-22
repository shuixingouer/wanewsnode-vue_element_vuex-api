'use strict'

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// const baseUrl = 'http://cnodejs.org/api/v1/'

export default {
  setChannelMenu: (params) => {
    return Vue.resource('/api/wap2/channel/list').post(params)
  }
}
