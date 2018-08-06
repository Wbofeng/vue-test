<template>
<div>
<toph></toph>
<middle></middle>
<behind></behind>
<last></last>
<lasttwo></lasttwo>
</div>
</template>

<style scoped>
</style>

<script>
import behind from '../components/behind.vue'
import toph from '../components/toph.vue'
import middle from '../components/middle.vue'
import last from '../components/last.vue'
import lasttwo from '../components/lasttwo.vue'
export default {
  components: {
    behind,
    toph,
    middle,
    last,
    lasttwo
  }
}
</script>
