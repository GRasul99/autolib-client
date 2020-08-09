import Vue from 'vue'
import Vuex from 'vuex'
import * as book from '@/store/modules/book'
import * as category from '@/store/modules/category'
import * as auth from '@/store/modules/auth'
import * as university from '@/store/modules/university'
import * as role from '@/store/modules/role.js'
import * as lang from '@/store/modules/lang.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
    category,
    auth,
    university,
    role,
    lang
  }
})
