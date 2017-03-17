import { SET_CHANNEL_MENU } from '../mutations'

const state = {
  channelMenu: ''
}

const mutations = {
  [SET_CHANNEL_MENU] (state, newMenu) {
    state.channelMenu = newMenu
  }
}

export default {
  state,
  mutations
}

