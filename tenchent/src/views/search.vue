<template>
<el-container>
  <el-header>header1</el-header>
  <el-main>main1</el-main>
</el-container>
</template>

<script>
import searchSearch from '../components/searchSearch.vue'
import searchSearch2 from '../components/searchSearch2.vue'
export default{
  components: {
    searchSearch,
    searchSearch2
  }
}
</script>
<style scoped>
  .el-header, .el-footer {
    background-color: rgb(124, 171, 233);
    color: rgb(5, 5, 5);
    text-align: center;
    line-height: 50px;
    height: 70px !important;
  }
  .el-main {
    background-color: rgb(89, 224, 206);
    color: rgb(7, 7, 7);
    text-align: center;
    line-height: 25px;
    height: 65px !important;
  }
  body > .el-container {
    margin-bottom: 60px;
    height: 135px;
  }
</style>
