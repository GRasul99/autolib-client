import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiService from '@/services/ApiService'
import Carousel3d from 'vue-carousel-3d'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.use(Carousel3d)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created: function() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('auth/SET_AUTH_USER_DATA', userData)
    }
    apiService.apiService.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401 && userString.refresh === undefined) {
          console.log(userString.refresh)
          this.$router.push('/login')
          this.$store.dispatch('auth/logout')
          // } else if (error.response.status === 401) {
          //   this.$store.dispatch('auth/refreshToken')
        }
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
