import {CHANNEL_MENU} from './mutation-type'

const mutations = {
  // ��ȡƵ���˵��б�
  [CHANNEL_MENU] (state, data) {
    state.channelMenu = data.items
  }
}

export default mutations
