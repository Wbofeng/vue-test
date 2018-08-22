<template>
    <el-container>
  <el-header>
      <twoHeader>
      </twoHeader>
  </el-header>
  <el-container>
    <el-aside width="1055px">
        <twoAside>
        </twoAside>
    </el-aside>
    <el-main>
        <two-main>
        </two-main>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import twoHeader from '../components/twoHeader.vue'
import twoAside from '../components/twoAside.vue'
import twoMain from '../components/twoMain.vue'
export default {
    components:{
        twoHeader,
        twoAside,
        twoMain
    }
}
</script>
<style scoped>
  .el-header {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
    height: 110px !important;
    border-style: none; 
  }
  .el-footer {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
  }
  .el-aside {
    background-color: rgb(251, 253, 255);
    color: #333;
    height: 350px;
  }
  .el-main {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
    padding: 0px;
    margin-left:-800px;
  }
</style>


