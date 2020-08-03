<template>
  <div id="nav">
    <ul class="menu">
      <li class="menu-link">
        <router-link class="menu-link__item" :to="{ name: 'categories-list' }">
          AutoLib
        </router-link>
      </li>
      <li class="menu-link" v-if="user">
        <BaseInput
          type="search"
          placeholder="Search"
          class="menu-link__input"
        />
      </li>
      <li class="menu-link" v-if="!user">
        <router-link class="menu-link__item" :to="{ name: 'login' }"
          >Login</router-link
        >
        <span>
          <router-link class="menu-link__item" :to="{ name: 'register' }"
            >Register</router-link
          >
        </span>
      </li>
      <li class="menu-link" v-else>
        <a @click="logout" class="menu-link__item">Log out</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheAppNav',
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="scss"></style>
