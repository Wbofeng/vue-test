<template>
  <div>
    <total></total>
  </div>
</template>
<script>
import total from './views/total.vue'

export default {
  name: 'app',
  components: {
   total
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
