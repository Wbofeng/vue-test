<template>
<div class="search">
<el-row>
<el-col :span="1">
<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    {{ msg }}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item command='网页'>网页</el-dropdown-item>
    <el-dropdown-item command='图片'>图片</el-dropdown-item>
    <el-dropdown-item command='视频'>视频</el-dropdown-item>
    <el-dropdown-item command='音乐'>音乐</el-dropdown-item>
    <el-dropdown-item command='地图'>地图</el-dropdown-item>
    <el-dropdown-item command='问问'>问问</el-dropdown-item>
    <el-dropdown-item command='百科'>百科</el-dropdown-item>
    <el-dropdown-item command='新闻'>新闻</el-dropdown-item>
    <el-dropdown-item command='购物'>购物</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</el-col>
<el-col :span="12">
  <el-input placeholder="请输入内容" class="input-with-select"></el-input>
</el-col>
</el-row>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: '网页',
      input: ''
    }
  },
  methods: {
    handleCommand (command) {
      this.msg = command
    }
  }
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    font-size: 20px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
