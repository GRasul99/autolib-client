import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://whispering-fortress-52261.herokuapp.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${localStorage.getItem('user')}`
  }
})
export default {
  login(credentials) {
    return apiService.post('/api/token/', credentials)
  },
  register(credentials) {
    return apiService.post('/auth/users/', credentials)
  },
  getCategories() {
    return apiService.get('/category/')
  },
  getCategory(id) {
    return apiService.get('/category/' + id)
  },
  getBooks() {
    return apiService.get('/books/')
  },
  getBook(id) {
    return apiService.get('/books/' + id)
  },
  orderBook(book) {
    return apiService.post('/orders/', book)
  },
  getUniversities() {
    return apiService.get('/university/')
  },
  getUniversity(id) {
    return apiService.get('/university/' + id)
  },
  refreshToken(refreshToken) {
    console.log(refreshToken, 'apiServiceRefreshToken')
    return apiService.post('/api/token/refresh/', {
      refresh: refreshToken
    })
  },
  apiService
}
