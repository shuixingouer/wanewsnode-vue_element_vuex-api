import Api from '../api'
import * as types from './mutation-types'

export const getChannelMenu = ({ dispatch }, params) => {
  Api.getChannelMenu(params).then(response => {
    console.log(response.data)
    dispatch(types.SET_CHANNEL_MENU, response.data)
  }, err => {
    console.log(err)
  })
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
