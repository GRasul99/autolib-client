<template>
  <section class="section">
    <form class="form" @submit.prevent="login">
      <div class="form-card -shadow">
        <div class="form-header">
          Login
        </div>
        <div class="form-content">
          <BaseInput
            v-model="username"
            type="text"
            placeholder="Username"
            class="form-content__input"
          />
          <BaseInput
            v-model="password"
            type="password"
            placeholder="Password"
            class="form-content__input"
          />
        </div>
        <BaseButton class="form-content__button">Login</BaseButton>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth/login', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'categories-list' })
        })
    }
  }
}
</script>

<style lang="scss"></style>
