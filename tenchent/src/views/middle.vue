<template>
<el-container>
  <el-header>header2</el-header>
  <el-container>
    <el-aside width="960px">aside2</el-aside>
    <el-container>
      <el-main>main2</el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
export default {
}
</script>

<style scoped>
  .el-header {
    background-color: rgb(209, 113, 247);
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 75px !important;
  }
  .el-footer {
    background-color: rgb(84, 128, 224);
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 70px !important;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 970px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 970px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
