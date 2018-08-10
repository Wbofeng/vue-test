<template>
  <div>
    <search></search>
    <middle></middle>
    <down></down>
    <last></last>
  </div>
</template>

<script>
import search from '../views/search.vue'
import middle from '../views/middle.vue'
import down from '../views/down.vue'
import last from '../views/last.vue'

export default {
  components: {
    search,
    middle,
    down,
    last
  }
}
</script>
