<template>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6" offset="3"><div class="grid-content bg-purple"><img src="https://nie.res.netease.com/r/pic/20180802/f7039cdf-0cf0-4199-a7fb-1790f3016362.jpg" height="100px"></div></el-col>
  <el-col :span="6" pull="1"><div class="grid-content bg-purple"><img src="https://nie.res.netease.com/r/pic/20180510/107153c9-f49a-4f2e-a5cd-33fb375b9304.jpg" height="100px"></div></el-col>
  <el-col :span="6" pull="2"><div class="grid-content bg-purple"><img src="https://nie.res.netease.com/r/pic/20180418/25cc7f4e-c969-41fe-8be3-a1a373c6b496.jpg" height="100px"></div></el-col>
  <el-col :span="6" pull="3"><div class="grid-content bg-purple"><img src="https://nie.res.netease.com/r/pic/20180612/dfa88eef-1e2a-4534-8b47-d81645a1b956.jpg" height="100px"></div></el-col>
</el-row>
</template>
<style scoped>
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
    width: 200px;
    height: 100px !important;
  }
  .bg-purple-light {
    background: #e5e9f2;
    width: 200px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
