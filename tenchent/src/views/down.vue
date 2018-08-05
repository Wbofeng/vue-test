<template>
<el-container>
  <el-header></el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
export default {
}
</script>

<style scoped>
  .el-header {
    background-color: rgb(37, 84, 145);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
   .el-footer {
    background-color: rgb(23, 23, 24);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: rgb(162, 191, 221);
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
