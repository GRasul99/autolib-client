import apiService from '@/services/ApiService.js'
export const namespaced = true

export const state = {
  universities: [],
  university: {}
}
export const mutations = {
  SET_UNIVERSITIES(state, universities) {
    state.universities = universities
  },
  SET_UNIVERSITY(state, university) {
    state.university = university
  }
}
export const actions = {
  fetchUniversities({ commit }) {
    return apiService
      .getUniversities()
      .then(response => {
        commit('SET_UNIVERSITIES', response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  fetchUniversity({ commit, getters }, id) {
    let university = getters.getUniversityById(id)

    if (university) {
      commit('SET_UNIVERSITY', university)
    } else {
      return apiService.getUniversity(id).then(response => {
        commit('SET_UNIVERSITY', response.data)
        return response.data
      })
    }
  }
}
export const getter = {
  getUniversityById: state => id => {
    return state.universities.find(university => university.id === id)
  }
}
