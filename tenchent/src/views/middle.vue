<template>
<el-container>
  <el-header><middleHeader></middleHeader></el-header>
  <el-container>
    <el-aside width="960px"><middleAside></middleAside></el-aside>
    <el-container>
      <el-main>main2</el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import middleHeader from '../components/middleHeader.vue'
import middleAside from '../components/middleAside.vue'
export default {
  components: {
    middleHeader,
    middleAside
  }
}
</script>

<style scoped>
  .el-header {
    background-color: rgb(248, 66, 66);
    color: #333;
    text-align: center;
    height: 110px !important;
  }
  .el-footer {
    background-color: rgb(84, 128, 224);
    color: #333;
    text-align: center;
  }
  .el-aside {
    background-color: rgb(248, 250, 248);
    color: #333;
    height: 227px;
  }
  .el-main {
    background-color: rgb(155, 94, 94);
    color: #333;
    text-align: center;
  }
</style>
