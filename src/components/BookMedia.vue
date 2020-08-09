<template>
  <div class="book-media">
    <!--    <img :src="book.img" alt="Book" class="book-media__img" />-->
    <p class="book-media__title">{{ book.title }}</p>
    <p class="book-media__author">{{ book.author }}</p>
    <div class="book-media-buttons">
      <BaseButton class="book-media-buttons__button download"
        >Download</BaseButton
      >
      <BaseButton class="book-media-buttons__button order">Order</BaseButton>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      orderTime: ''
    }
  },
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  // data() {
  //   return {
  //     order: this.createFreshOrderObject()
  //   }
  // },
  methods: {
    async order() {
      try {
        await axios.post(`https://libro.pythonanywhere.com/orders/`, {
          user: 3,
          book_id: this.book.id,
          time_of_order: this.orderTime
        })
      } catch (e) {
        console.log(e)
      }
    }
    // orderBook() {
    //   this.$store
    //     .dispatch('book/orderBook', this.order)
    //     .then(response => {
    //       console.log(response)
    //       this.order = this.createFreshOrderObject()
    //     })
    //     .catch(error => {
    //       console.log(error.message)
    //     })
    // },
    // createFreshOrderObject() {
    //   const user = 1
    //   return {
    //     user: user,
    //     book_id: this.book.id
    //   }
    // }
  }
}
</script>

<style lang="scss">
.book-media {
  text-align: center;
  display: flex;
  flex-direction: column;

  &__img {
    width: 220px;
    height: 130px;
  }

  &-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
