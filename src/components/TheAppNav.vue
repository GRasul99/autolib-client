<template>
  <nav id="nav">
    <ul class="nav-list">
      <li class="nav-list-item">
        <router-link class="nav-list-item__link" to="/">AutoLib</router-link>
      </li>
      <li class="nav-list-item">
        <base-input v-if="user" type="search" placeholder="Search" />
      </li>
      <li class="nav-list-item">
        <div v-if="!user">
          <router-link class="nav-list-item__link" :to="{ name: 'login' }"
            >Login</router-link
          >
          <router-link class="nav-list-item__link" :to="{ name: 'register' }"
            >Register</router-link
          >
        </div>
        <div v-else>
          <base-button class="nav-list-item" @click.prevent="logout"
            >Logout</base-button
          >
        </div>
      </li>
    </ul>
    <ul class="nav-mobile">
      <li class="nav-mobile-item">
        <router-link to="/">AutoLib</router-link>
      </li>
      <li class="nav-mobile-item">
        <i class="fa fa-bars" @click.prevent="show = !show"></i>
      </li>
    </ul>
    <ul class="nav-mobile-hidden" v-if="show">
      <li class="nav-mobile-hidden-item">
        <base-input v-if="user" type="search" placeholder="Search" />
      </li>
      <li class="nav-mobile-hidden-item">
        <div v-if="!user" class="nav-mobile-hidden-item-auth">
          <router-link :to="{ name: 'login' }">Login</router-link>
          <router-link :to="{ name: 'register' }">Register</router-link>
        </div>
        <div v-else>
          <base-button v-if="user" @click.prevent="logout">Logout</base-button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
export default {
  name: 'TheAppNav',
  components: { BaseInput, BaseButton },
  data() {
    return {
      show: false
    }
  },
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

<style lang="scss">
@import 'src/assets/scss/global';

</style>
