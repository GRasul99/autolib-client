import Vue from 'vue'
import VueRouter from 'vue-router'
import SubCategoriesList from '@/views/SubCategoriesList'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categories-list',
    component: () => import('../views/CategoriesList')
  },
  {
    path: '/subcategories-list/:id',
    name: 'subcategories-list',
    component: SubCategoriesList,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('category/fetchCategory', routeTo.params.id)
        .then(category => {
          routeTo.params.category = category
          next()
        })
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
