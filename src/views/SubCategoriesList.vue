<template>
  <section class="section subcategories">
    <carousel
      class="-shadow subcategories-carousel"
      :autoplay="autoplay"
      :autoplay-timeout="autoplayTimeout"
      :scroll-per-page="scrollPerPage"
      :navigation-enabled="navigationEnabled"
      :pagination-enabled="paginationEnabled"
      :perPageCustom="[
        [300, 2],
        [576, 2],
        [768, 3],
        [1024, 5],
        [1280, 7],
        [1500, 9]
      ]"
    >
      <slide
        v-for="subCat in subCategories"
        :key="subCat.id"
        :category="category"
        class="subcategories-carousel-item"
      >
        <router-link
          :to="{ name: 'subcategories-list', params: { id: subCat.id } }"
          class="subcategories-carousel-item__link"
          >{{ subCat.name }}</router-link
        >
      </slide>
    </carousel>
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
      books: [],
      autoplay: true,
      scrollPerPage: true,
      navigationEnabled: true,
      paginationEnabled: false,
      autoplayTimeout: 3000
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
.book-media-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 32px;
  grid-auto-flow: dense;
  margin-top: 2em;
}
</style>
