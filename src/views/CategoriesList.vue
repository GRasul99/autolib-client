<template>
  <section class="home section">
    <carousel
      class="home-carousel"
      :autoplay="autoplay"
      :scroll-per-page="scrollPerPage"
      :perPageCustom="[
        [300, 2],
        [576, 2],
        [768, 3],
        [1024, 5],
        [1280, 7],
        [1500, 9]
      ]"
    >
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/7"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/obshiy.png"
            alt="Geography"
          />
        </router-link>
        <p>География. Биография. История</p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/6"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/obshestvennie.png"
            alt="Medical"
          />
        </router-link>
        <p>Прикладные науки. Медицина</p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/1"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/filosofiya.png"
            alt="Psychology"
          />
        </router-link>
        <p>Философия. Психология</p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/2"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/obshiy.png"
            alt="Religion"
          />
        </router-link>
        <p>Религия. Теология</p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/3"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/obshestvennie.png"
            alt="Public science"
          />
        </router-link>
        <p>Общественные науки</p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/5"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/matematika.png"
            alt="Math"
          />
        </router-link>
        <p>Математика. Естественные науки</p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/634"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/iskusstvo.png"
            alt="Art"
          />
        </router-link>
        <p>
          Исскуство. Декоративно-прикладное исскуство. Фотография. Музыка. Игры.
          Спорт
        </p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/658"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/obshestvennie.png"
            alt="Filology"
          />
        </router-link>
        <p>
          Языкознание. Филология. Художественная литература. Литературоведение
        </p>
      </slide>
      <slide class="home-carousel-slide">
        <router-link
          to="/subcategories-list/672"
          class="home-carousel-slide__link"
        >
          <img
            class="home-carousel-slide__img"
            src="https://whispering-fortress-52261.herokuapp.com/templates/assets/img/webassets/matematika.png"
            alt="Science"
          />
        </router-link>
        <p>Наука в целом (информационные технологии - 004)</p>
      </slide>
    </carousel>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
function foo(routeTo, next) {
  store.dispatch('category/fetchCategories').then(() => {
    next()
  })
}
export default {
  name: 'Home',
  data() {
    return {
      autoplay: true,
      scrollPerPage: true
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    foo(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    foo(routeTo, next)
  },
  computed: {
    ...mapState(['category'])
  },
  methods: {
    onAfterSlideChange() {},
    onBeforeSlideChange() {},
    onLastSlide() {}
  }
}
</script>

<style lang="scss"></style>
