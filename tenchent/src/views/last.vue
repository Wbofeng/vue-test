<template>
  <el-container>
    <el-header>
      <lastHeader>
      </lastHeader>
    </el-header>
    <el-main>
      <lastMain>
      </lastMain>
    </el-main>
    <el-footer>
      <lastFooter>
      </lastFooter>
    </el-footer>
  </el-container>
</template>

<script>
import lastHeader from '../components/lastHeader.vue'
import lastMain from '../components/lastMain.vue'
import lastFooter from '../components/lastFooter.vue'

export default {
  components: {
    lastHeader,
    lastMain,
    lastFooter
  }
}
</script>

<style scoped>
  .el-header {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
    height: 100px !important;
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
    height: 130px;
    padding: 10px 0px;
  }
</style>
