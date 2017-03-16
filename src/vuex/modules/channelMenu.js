import { SET_CHANNEL_MENU } from '../mutation-types'

const state = {
  menu: ''
}

const mutations = {
  [SET_CHANNEL_MENU] (state, newMenu) {
    state.menu = newMenu
  }
}

export default {
  state,
  mutations
}
