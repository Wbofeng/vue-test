<template>
<el-row class="box1">
  <el-col :span="11" :offset="5">
  <el-tabs v-model="activeName" @tab-click="handleClick" class="word">
    <el-tab-pane label="要闻" name="first" class="word1">
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1"> 习近平推崇的那些奋斗者</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">习近平时间|用体育拉近中国与世界的距离</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">一带一路，合作共赢的可持续发展之路</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">积极进取，引领中国经济行稳致远</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">环球时报社评：唱衰中国的人和力量将是历史笑柄</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">形成合力，推动绿富同兴</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">内蒙古库布其沙漠治理经验，风雨无阻创造美好生活</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">给孩子清朗的网络空间 保障未成年人健康上网</a><br>
    </el-tab-pane>
    <el-tab-pane label="河北新闻" name="second" class="word1">
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">今日河北省中北部有大到暴雨</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">河北省92号汽油每升涨0.06元</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">速看！河北新增23个高速收费站</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">世界首台电梯预警救援车亮相廊坊</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">河北邢台消防官兵冒雨为群众拖车</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">河北一地交警一天查扣两辆“黑校车”</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">河北省整治提升行动让菜篮子更安全</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word2 w1">河北省大中型水库蓄水量多于常年同期</a>
    </el-tab-pane>
  </el-tabs>
  </el-col>
  <el-col :span="8" :offset="0">
    <el-row>
      <el-col :span="12">
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">今日话题</a>
      </el-col>
      <el-col :span="5" :offset="2">
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3"><img src="../assets/时光蓝画轴.png" class="pictureBlue" stretch></a>
      </el-col>
    </el-row>

      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word5 w1">社保改由税务部门来收，企业雇个人得多花多少钱</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word5 w1">别再用手机哄娃了，让孩子出门活动最重要</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word5 w1">我为什么支持跳级？</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word5 w1">溺亡悲剧：那些安全常识值得一说再说</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word5 w1">不能一句防“熊孩子”，就拒绝儿童进入图书馆</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word5 w1">莫让手机APP 成为隐私“窃贼”</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word5 w1"> “代写经济”火爆，别只剩下担忧</a>

  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.box1{
  width: 1050px;
}
.word {
  line-height: 0px;
  height: 210px;

}
.word1 {
  line-height: 20px;
  padding: 0 0px;
}
.word2 {
  font-size: 15px;
  line-height: 0px;
  height: 60px;
  padding: 0 0px;
}
.word3 {
  line-height: 40px;
  height: 60px;
}
.word4 {
  text-align: right;
}
.word5 {
  font-size: 15px;
  line-height: 25px !important;
  padding: 0 0px;
}
.pictureBlue{
  line-height: 40px;
  height: 30px;
  width: 150px;
}
.pictureW{
  line-height: 0px;
  height: 30px;
  width: 50%;
}
h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000201;
}
.w1{
  text-decoration: none !important;
}
</style>
