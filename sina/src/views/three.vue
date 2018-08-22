<template>
    <el-container>
  <el-header>
      <threeHeader></threeHeader>
  </el-header>
  <el-main>
      <threeMain></threeMain>
  </el-main>
  <el-footer>
      <threeFooterX></threeFooterX>
  </el-footer>
</el-container>
</template>

<script>
import threeHeader from '../components/threeHeader.vue'
import threeMain from '../components/threeMain.vue'
import threeFooterX from '../components/threeFooterX'
export default {
    components:{
        threeHeader,
        threeMain,
        threeFooterX
    }
}
</script>

<style scoped>
.el-header {
  background-color: rgb(251, 253, 255);
  color: #333;
  text-align: center;
  line-height: 10px;
  height: 320px !important;
}
.el-footer {
  background-color: rgb(251, 253, 255);
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 200px !important;
}
.el-main {
  background-color: rgb(251, 253, 255);
  color: #333;
  text-align: center;
  line-height: 15px;
  height: 531px !important;
  margin-top: -200px; 
}
</style>
