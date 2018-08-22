<template>
  <el-row>
    <el-col :span="24" class="text_end">
      <i class="el-icon-minus"></i>
      THE END
      <i class="el-icon-minus"></i>
    </el-col>
    <el-col :span="24" class="statement">
      {{msg}}
    </el-col>
    <el-col :span="24" style="text-align: center;">
      <a href="http://news.qq.com/">
        <img src="../../assets/like.png" class="like">
      </a>
    </el-col>
    <el-col :span="2" :offset="11" style="text-align: center;">
      <a href="http://news.qq.com/" class="collection">赞</a>
    </el-col>
    <el-col :span="2" :offset="3">
      <a href="http://news.qq.com/" class="collection">
        <i class="el-icon-news"></i>
        收藏
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      msg: '免责声明：本文来自腾讯新闻客户端自媒体，不代表腾讯网的观点和立场。'
    }
  }
}
</script>

<style scoped>
.text_end {
  text-align: center;
  padding-top: 100px;
  font-size: 20px;
}
.statement {
  text-align: center;
  padding-top: 20px;
  font-size: 12px;
}
.collection {
  text-decoration: none;
  padding-top: 10px;
  font-size: 14px;
  padding-right: 10px;
  color: rgb(121, 120, 120);
}
.like {
  padding-top: 50px;
  width: 5%;
}
</style>
