<template>
<div style="margin-top: 15px;">
<el-row>
  <el-col :span="6" :offset="8">
  <el-input placeholder="" v-model="input1" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="网页" trigger="hover" class=".el-select">
      <el-option label="网页" value="2"></el-option>
      <el-option label="图片" value="3"></el-option>
      <el-option label="视频" value="4"></el-option>
      <el-option label="音乐" value="5"></el-option>
      <el-option label="地图" value="6"></el-option>
      <el-option label="问问" value="7"></el-option>
      <el-option label="问问" value="7"></el-option>
      <el-option label="问问" value="7"></el-option>
      <el-option label="问问" value="7"></el-option>
    </el-select>
    <el-button slot="append">搜索</el-button>
  </el-input>
  </el-col>
  <el-col :span="6" :offset="4">
    <el-button type="text" icon="el-icon-star-off" plain></el-button>
    <el-button type="text" icon="el-icon-message" plain></el-button>
    <el-button type="primary" size="medium" plain>登录</el-button>
  </el-col>
</el-row>

</div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      select: '',
      value: ''
    }
  }
}

</script>

<style scoped>
  .el-select .el-input {
    width: 80px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

</style>
