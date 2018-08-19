<template>
  <el-row>
    <el-col :span="16" :offset="2" class="wd1">
      {{title}}
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      title: '现实版“小偷家族”：当始终怀有对民生疾苦的敏感'
    }
  }
}
</script>

<style scoped>
.wd1 {
  font-size: 40px;
  padding-top: 30px;
}
</style>
