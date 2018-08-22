<template>
  <div>
    <sedHeader></sedHeader>
    <sedMain></sedMain>
    <sedLike></sedLike>
    <sedTalk></sedTalk>
    <sedFooter></sedFooter>
  </div>
</template>

<script>
import sedHeader from '../components/sed_components/sedHeader.vue'
import sedMain from '../components/sed_components/sedMain.vue'
import sedLike from '../components/sed_components/sedLike.vue'
import sedTalk from '../components/sed_components/sedTalk.vue'
import sedFooter from '../components/sed_components/sedFooter.vue'

export default {
  components: {
    sedHeader,
    sedMain,
    sedLike,
    sedTalk,
    sedFooter
  }
}
</script>

<style scoped>
.fix_width {
  min-width: 1510px;
}
</style>
