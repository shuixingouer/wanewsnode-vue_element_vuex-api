import {CHANNEL_MENU} from './mutation-type'

const mutations = {
  // 获取即将上映电影列表
  [CHANNEL_MENU] (state, data) {
    state.channelMenu = data.items
  }
}

export default mutations
