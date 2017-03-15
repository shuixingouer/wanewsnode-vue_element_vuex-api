import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Details from '../components/Details'
import Iframe from '../components/Iframe'
import CommentDetails from '../components/CommentDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/iframe',
      name: 'Iframe',
      component: Iframe
    },
    {
      path: '/CommentDetails',
      name: 'CommentDetails',
      component: CommentDetails
    }
  ]
})
