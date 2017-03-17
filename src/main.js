// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import '../theme/index.css'
import './assets/css/reset.css'
import router from './router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'
import App from './App'
import Error from './assets/images/error.png'
import Loading from './assets/images/loading.png'

Vue.use(Vuex)
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(VueLazyload, {
  error: Error,
  loading: Loading,
  try: 3
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
