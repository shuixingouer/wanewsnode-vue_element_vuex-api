import {CHANNEL_MENU} from './mutation-type'

const mutations = {
  // 获取频道菜单列表
  [CHANNEL_MENU] (state, data) {
    state.channelMenu = data.items
  }
}

export default mutations
