<template>
  <section class="home section">
    <carousel-3d
      @after-slide-change="onAfterSlideChange"
      @before-slide-change="onBeforeSlideChange"
      @last-slide="onLastSlide"
      display="10"
      border="0"
      width="240"
      space="250"
      perspective="20"
      class="home-carousel"
    >
      <slide
        v-for="(category, i) in rootCategories"
        :index="i"
        :key="category.id"
        class="home-carousel-slider"
      >
        <router-link
          :to="{ name: 'subcategories-list', params: { id: category.id } }"
          class="home-carousel-slider__link"
        >
          {{ category.id }} {{ category.name }}
        </router-link>
        <img
          src="../assets/logo.png"
          class="home-carousel-slider__img"
          alt="Logo"
        />
      </slide>
    </carousel-3d>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
// import Category from '../components/Category'
function foo(routeTo, next) {
  store.dispatch('category/fetchCategories').then(() => {
    next()
  })
}
export default {
  name: 'Home',
  data() {
    return {
      slides: 10
    }
  },
  // components: { Category },
  beforeRouteEnter(routeTo, routeFrom, next) {
    foo(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    foo(routeTo, next)
  },
  computed: {
    ...mapState(['category']),
    rootCategories() {
      return this.category.categories.filter(category => {
        return category.parent === null
      })
    }
  },
  methods: {
    onAfterSlideChange() {},
    onBeforeSlideChange() {},
    onLastSlide() {}
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 2em;
}
.carousel-image {
  width: 50px;
  height: 80%;
}
</style>
