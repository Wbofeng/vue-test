<template>
    <el-container>
  <el-header>
      <fourthHeader>
      </fourthHeader>
  </el-header>
  <el-main>
      <fourthMainX>
      </fourthMainX>
  </el-main>
  <el-footer>
      <fourthFooter>
      </fourthFooter>
  </el-footer>
</el-container>
</template>

<script>
import fourthHeader from '../components/fourthHeader'
import fourthMainX from '../components/fourthMainX'
import fourthFooter from '../components/fourthFooter'
export default {
    components:{
        fourthHeader,
        fourthMainX,
        fourthFooter
    }
}
</script>

<style scoped>
  .el-header {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
    height: 100px !important;
    margin-top: 200px;
  }
  .el-footer {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
    height: 100px;
  }
  .el-main {
    background-color:  rgb(251, 253, 255);
    color: #333;
    text-align: center;
    height: 200px;
    margin-top: 50px; 
    padding: 10px 0px;
  }
</style>
