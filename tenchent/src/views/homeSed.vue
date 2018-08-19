<template>
  <div>
    <sedHeader></sedHeader>
    <sedTitle></sedTitle>
    <sedMain></sedMain>
    <sedLike></sedLike>
    <sedTalk></sedTalk>
    <sedFooter></sedFooter>
  </div>
</template>

<script>
import sedHeader from '../views/second/sedHeader.vue'
import sedTitle from '../views/second/sedTitle.vue'
import sedMain from '../views/second/sedMain.vue'
import sedLike from '../views/second/sedLike.vue'
import sedTalk from '../views/second/sedTalk.vue'
import sedFooter from '../views/second/sedFooter.vue'
export default {
  components: {
    sedHeader,
    sedTitle,
    sedMain,
    sedLike,
    sedTalk,
    sedFooter
  }
}
</script>
