import {CHANNEL_MENU} from './mutation-type'

const mutations = {
  // ��ȡƵ���˵��б�
  [CHANNEL_MENU] (state, data) {
    state.channelMenus = data.menus
  }
}

export default mutations
