<template>
  <section class="section">
    <footer class="footer">
      <div class="footer-content">
        <p>{{ now | date }}<span class="footer__copy">AutoLib &#169;</span></p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => {
    return {
      now: Date.now()
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  &__copy {
    margin-left: 1em;
  }
}
</style>
