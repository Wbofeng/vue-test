<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="7">
        <el-row>
          <div v-for="item in items" :key='item.nub'>
            <el-col :span="1">
              <a :href="href" target="_blank">
              <img :src="item.img" class="pic" stretch></a>
            </el-col>
            <el-col :span="2" class="w2">
              <a :href="item.href" target="_blank" class="w2">{{item.msg}}</a>
            </el-col>
          </div>
          <el-col :span="3">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">
            <img src="../assets/可信网站身份验证.png" class="pic1" stretch></a>
          </el-col>
          <el-col :span="1">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">
            <img src="../assets/工商网监电子标识.png" class="pic" stretch></a>
          </el-col>
          <el-col :span="2" class="w2">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w2">工商网监电子标识</a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          nub: 1,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '经营性网站备案信息',
          img: require('../assets/经营性网站备案信息.png')
        },
        {
          nub: 2,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '中国互联网举报中心',
          img: require('../assets/中国互联网举报中心.png')
        },
        {
          nub: 3,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '中国文明网传播文明',
          img: require('../assets/中国文明网传播文明.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.tab1 {
  width: 1000px;
}
.tab2 {
  width: 122px;
}
.w2 {
  font-size: 14px;
  line-height: 20px !important;
  height: 20px;
}
.pic {
  height: 43px;
  width: 35px;
}
.pic1 {
  height: 43px;
  width: 110px;
}
</style>
