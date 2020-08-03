<template>
  <div id="app">
    <TheAppNav />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
@import 'assets/scss/global';
</style>
<script>
import TheAppNav from '@/components/TheAppNav'
export default {
  components: { TheAppNav }
}
</script>
