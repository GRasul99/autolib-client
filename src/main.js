import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiService from '@/services/ApiService'
import VueCarousel from 'vue-carousel'
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

Vue.use(VueCarousel)
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
    //
    apiService.apiService.interceptors.response.use(
      response => response,
      error => {
        console.log(error.response)
        if (error.response.status === 401) {
          this.$router.push('/')
          this.$store.dispatch('auth/logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
