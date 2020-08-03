<template>
  <div>
    {{ book.author }} {{ book.title }} {{ book.id }}
    <datetime type="datetime" v-model="orderTime"></datetime>
    <div class="buttons">
      <button class="btn download">
        Download
      </button>
      <button class="btn order" @click="order">
        Order
      </button>
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
.btn {
  margin-top: 5px;
}
</style>
