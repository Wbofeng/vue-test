<template>
  <div style="margin-top: 15px;">
    <el-row>
      <el-col :span="2" :offset="3">
        <a href="http://www.qq.com/" target="_blank" class="word3 w1">
          <img src="../assets/qq_logo.png" class="image" stretch>
        </a>
      </el-col>
      <el-col :span="7" :offset="3">
        <el-input placeholder="" v-model="input1" class="input-with-select" size="small">
          <el-select v-model="select" slot="prepend" placeholder="网页" trigger="hover" class=".el-select">
            <el-option label="网页" value="2"></el-option>
            <el-option label="图片" value="3"></el-option>
            <el-option label="视频" value="4"></el-option>
            <el-option label="音乐" value="5"></el-option>
            <el-option label="地图" value="6"></el-option>
            <el-option label="问问" value="7"></el-option>
            <el-option label="百科" value="8"></el-option>
            <el-option label="新闻" value="9"></el-option>
            <el-option label="购物" value="10"></el-option>
          </el-select>
          <el-button slot="append">搜索</el-button>
        </el-input>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-button type="text" icon="el-icon-star-off" plain></el-button>
        <el-button type="text" icon="el-icon-message" plain></el-button>
        <el-button type="primary" size="small" plain>登录</el-button>
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
.image {
  width: 85%;
  height: 85%;
  padding: 10px 0px;
}
.el-select {
  width: 80px !important;
  line-height: 0px !important;
}
.input-with-select {
  background-color: rgb(251, 253, 255);
  width: 400px;
  line-height: 0px !important;
}
</style>
