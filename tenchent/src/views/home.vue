<template>
  <div class="fix_width">
    <search></search>
    <middle></middle>
    <down></down>
    <last></last>
  </div>
</template>

<script>
import search from '../views/first_web/search.vue'
import middle from '../views/first_web/middle.vue'
import down from '../views/first_web/down.vue'
import last from '../views/first_web/last.vue'

export default {
  components: {
    search,
    middle,
    down,
    last
  }
}
</script>

<style scoped>
.fix_width{
  min-width: 1510px;
}
</style>
