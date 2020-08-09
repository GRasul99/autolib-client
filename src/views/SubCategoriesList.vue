<template>
  <!-- <section class="section subcategories-list">
    {{ category.id }} {{ category.name }}
    <div>
      UDC:
    </div>
    <div>
      {{ category.udc_id }}
    </div>
    <div v-for="subCat in subCategories" :key="subCat.id" :category="category">
      <router-link
        :to="{ name: 'subcategories-list', params: { id: subCat.id } }"
      >
        {{ subCat.id }}
      </router-link>
    </div>
    <button @click="logtoconsole">Console</button>
    <div class="books-grid">
      <BookMedia v-for="book in booksWithUDC" :key="book.id" :book="book" />
    </div>
  </section>-->
  <section class="section subcategories">
    <div class="breadcrumbs">breadcrumbs</div>
    <div class="subcategories-list -shadow">
      <div
        v-for="subCat in subCategories"
        :key="subCat.id"
        :category="category"
        class="subcategories-list-item"
      >
        <router-link
          :to="{ name: 'subcategories-list', params: { id: subCat.id } }"
          class="subcategories-list-item__link"
          >{{ subCat.name }}</router-link
        >
      </div>
    </div>
    <div class="book-media-wrapper">
      <BookMedia v-for="book in booksWithUDC" :key="book.id" :book="book" />
    </div>
  </section>
</template>

<script>
import store from '@/store'
import ApiService from '@/services/ApiService'
function bar(to, next) {
  store.dispatch('category/fetchCategories')
  store.dispatch('category/fetchCategory', to.params.id).then(category => {
    to.params.category = category
    next()
  })
}
import BookMedia from '@/components/BookMedia.vue'
export default {
  data() {
    return {
      categories: [],
      books: []
    }
  },
  components: {
    BookMedia
  },
  props: {
    category: {
      type: Object,
      required: true,
      default() {
        return {
          id: null
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    bar(to, next)
  },
  beforeRouteUpdate(to, from, next) {
    bar(to, next)
  },
  created() {
    ApiService.getCategories().then(response => {
      this.categories = response.data
    }),
      ApiService.getBooks().then(response => {
        this.books = response.data
      })
  },
  computed: {
    subCategories() {
      return this.categories.filter(subCategory => {
        return subCategory.parent === this.category.id
      })
    },
    booksWithUDC() {
      return this.books.filter(book => {
        return String(book.udc).startsWith(String(this.category.udc_id))
      })
    }
  },
  methods: {
    logtoconsole() {
      console.log(this.books)
      console.log(this.booksWithUDC)
      console.log(this.$route.path)
    }
  }
}
</script>

<style lang="scss">
.subcategories {
  &-list {
    margin-top: 1em;
    display: flex;
    text-align: center;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 0.5em 1em;
    min-width: 200px;
    &-item {
      margin-right: 1em;
      &__link {
        text-transform: initial;
        color: black;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow-y: hidden;
        &:hover{
          -webkit-line-clamp: none;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.book-media-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 32px;
  grid-auto-flow: dense;
  margin-top: 2em;
}
</style>
