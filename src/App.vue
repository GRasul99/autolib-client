<template>
  <div id="app">
    <TheAppNav />
    <router-view :key="$route.fullPath" class="page" />
    <TheFooter />
  </div>
</template>

<script>
import TheAppNav from '@/components/TheAppNav'
import TheFooter from '@/components/TheFooter'
export default {
  components: { TheFooter, TheAppNav }
}
</script>

<style lang="scss">
@import 'assets/scss/global';
#app {
  display: flex;
  flex-direction: column;
}
</style>
