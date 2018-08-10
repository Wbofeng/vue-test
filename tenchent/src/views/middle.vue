<template>
  <el-container>
    <el-header>
      <middleHeader>
      </middleHeader>
    </el-header>
    <el-container>
      <el-aside width="1055px">
        <middleAside>
        </middleAside>
      </el-aside>
      <el-container>
        <el-main>
          <middlemain>
          </middlemain>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import middleHeader from '../components/middleHeader.vue'
import middleAside from '../components/middleAside.vue'
import middlemain from '../components/middlemain.vue'

export default {
  components: {
    middleHeader,
    middleAside,
    middlemain
  }
}
</script>

<style scoped>
  .el-header {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
    height: 110px !important;
  }
  .el-footer {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
  }
  .el-aside {
    background-color: rgb(251, 253, 255);
    color: #333;
    height: 227px;
  }
  .el-main {
    background-color: rgb(251, 253, 255);
    color: #333;
    text-align: center;
    padding: 0px;
  }
  body > .el-container {
    margin-bottom: 0px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
