import apiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  books: [],
  book: {}
}

export const mutations = {
  ADD_ORDER(state, book) {
    state.books.push(book)
  },
  SET_BOOKS(state, books) {
    state.books = books
  },
  SET_BOOK(state, book) {
    state.book = book
  }
}

export const actions = {
  orderBook({ commit }, order) {
    return apiService
      .orderBook(order)
      .then(() => {
        commit('ADD_ORDER', order)
      })
      .catch(error => {
        console.log(error)
      })
  },
  fetchBooks({ commit }) {
    return apiService
      .getBooks()
      .then(response => {
        commit('SET_BOOKS', response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  fetchBook({ commit, getters }, id) {
    let book = getters.getBookById(id)

    if (book) {
      commit('SET_BOOK', book)
      return book
    } else {
      return apiService.getBook(id).then(response => {
        commit('SET_BOOK', response.data)
        return response.data
      })
    }
  }
}

export const getters = {
  getBookById: state => id => {
    return state.books.find(book => book.id === id)
  }
}
