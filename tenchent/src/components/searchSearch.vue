<template>
<div style="margin-top: 15px;">
<el-row>
  <el-col :span="6" :offset="6">
  <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择" trigger="hover">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append">搜索</el-button>
  </el-input>
  </el-col>
</el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  }
}
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>