import apiService from '@/services/ApiService'

export const namespaced = true

export const state = {
  categories: [],
  category: {},
  rootCategories: []
}
export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CATEGORY(state, category) {
    state.category = category
  },
  SET_ROOT_CATEGORIES(state, rootCategories) {
    state.rootCategories = rootCategories
  }
}
export const actions = {
  fetchCategories({ commit }) {
    return apiService
      .getCategories()
      .then(response => {
        commit('SET_CATEGORIES', response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  fetchCategory({ commit, getters }, id) {
    let category = getters.getCategoryById(id)

    if (category) {
      commit('SET_CATEGORY', category)
      return category
    } else {
      return apiService.getCategory(id).then(response => {
        commit('SET_CATEGORY', response.data)
        return response.data
      })
    }
  }
}
export const getters = {
  getCategoryById: state => id => {
    return state.categories.find(category => category.id === id)
  },
  getRootCategories: state => {
    return state.categories.filter(category => {
      return category.parent === null
    })
  }
}
