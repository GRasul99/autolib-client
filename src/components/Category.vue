<template>
  <div>
    <router-link
      :to="{ name: 'subcategories-list', params: { id: category.id } }"
    >
      <div class="card">{{ category.id }} {{ category.name }}</div>
    </router-link>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  background-color: black;
}
</style>
