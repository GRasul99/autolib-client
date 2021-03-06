import apiService from '@/services/ApiService'
import jwtDecode from 'jwt-decode'
export const namespaced = true

export const state = {
  user: null,
  refresh: null,
  user_id: null
}
export const mutations = {
  SET_AUTH_USER_DATA(state, userData) {
    localStorage.setItem('user', JSON.stringify(userData))
    apiService.apiService.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${userData.access}`
    state.user = userData
    state.refresh = userData.refresh
    state.user_id = jwtDecode(userData.access).user_id
  },
  LOG_OUT() {
    localStorage.removeItem('user')
    location.reload()
  }
}
export const actions = {
  register({ commit }, credentials) {
    return apiService.register(credentials).then(({ data }) => {
      commit('SET_AUTH_USER_DATA', data)
    })
  },
  login({ commit }, credentials) {
    return apiService.login(credentials).then(({ data }) => {
      commit('SET_AUTH_USER_DATA', data)
    })
  },
  logout({ commit }) {
    commit('LOG_OUT')
  },
  refreshToken({ commit }) {
    console.log(state.refresh)
    return apiService.refreshToken(state.refresh).then(({ data }) => {
      commit('SET_AUTH_USER_DATA', data)
    })
  }
}
export const getters = {}
