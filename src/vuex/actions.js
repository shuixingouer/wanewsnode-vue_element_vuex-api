export default {
  setChannelMenu: function ({commit}, params) {
    commit('SET_CHANNEL_MENU', params)
  }
}

// export const getTopics = ({ dispatch }, params) => {
//   Api.getTopics(params).then(response => {
//     console.log(response.data)
//     dispatch(types.GET_TOPICS_SUCCESS, response.data)
//   }, err => {
//     console.log(err)
//     dispatch(types.GET_TOPICS_FAIL, err)
//   })
// }
