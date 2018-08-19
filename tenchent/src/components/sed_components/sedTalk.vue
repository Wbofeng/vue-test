<template>
  <el-row>
    <el-col :span="12" :offset="5" style="padding-top: 60px;">
      <hr size="1">
      <el-row style="padding-top: 40px;">
        <el-col :span="4" style="font-size: 25px;">网友评论</el-col>
        <el-col :span="12" style="padding-top: 10px;">
          文明上网理性发言，请遵守
          <a href="http://news.qq.com/" class="wd1">新闻评论服务协议</a>
        </el-col>
        <el-col :span="8" style="text-align: right; padding-top: 10px;">
          <a href="http://news.qq.com/"  class="talk">
            {{number}}条评论
          </a>
        </el-col>
      </el-row>
      <el-row>
        <el-input type="textarea" :rows="4" v-model="say" placeholder="说两句吧。。。" class="comment">
        </el-input>
        <a href="http://news.qq.com/" target="_blank">
          <button class="log">登录</button>
        </a>
      </el-row>
      <br><br>
      <el-row>
        <el-col class="recommend">
          <a>为你推荐</a>
        </el-col>
      </el-row>
      <br>
      <el-row v-for="item in items" :key="item.nub">
        <el-col :span="8">
          <a :href="item.href" target="_blank">
            <img :src="item.img" class="picture">
          </a>
        </el-col>
        <el-col :span="16">
          <el-row>
            <a :href="item.href" target="_blank" class="wd2">
              {{item.msg}}
            </a>
          </el-row>
          <el-row class="wd3">
            <a :href="item.href" target="_blank" class="sour">
              {{item.source}}
            </a>
            {{item.time}}前
          </el-row>
        </el-col>
        <el-col>
          <br>
          <hr size="1">
          <br><br>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="more">
          <a href="http://news.qq.com/" class="more" target="_blank">
            点击加载更多
          </a>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      number: '25',
      sya: '',
      items:
      [
        {
          nub: 1,
          img: require('../../assets/t1.png'),
          href: 'http://news.qq.com/',
          msg: '女子为放松做鱼疗，回家后大腿却成了这样',
          source: '雷锋网',
          time: '2小时'
        },
        {
          nub: 2,
          img: require('../../assets/t2.png'),
          href: 'http://news.qq.com/',
          msg: '宝刀未老！解放军抢滩登陆演习 一款久违的老装备又上镜了',
          source: '新军事网',
          time: '2小时'
        },
        {
          nub: 3,
          img: require('../../assets/t3.png'),
          href: 'http://news.qq.com/',
          msg: '不是公链是基础设施？Spacebook要给区块链打地基',
          source: '雷锋网',
          time: '9小时'
        },
        {
          nub: 4,
          img: require('../../assets/t4.png'),
          href: 'http://news.qq.com/',
          msg: '退休后想过上惬意生活至少需要多少钱？媒体：163万',
          source: '国是直通车',
          time: '1小时'
        }
      ]
    }
  }
}
</script>

<style scoped>
.wd1 {
  text-decoration: none;
  color: black;
}
.wd2 {
  text-decoration: none;
  font-size: 20px;
  padding: 0px 20px;
  color: black;
}
.wd3 {
  padding-top: 90px;
  padding-left: 20px;
  color: rgb(119, 118, 118);
}
.talk {
  text-decoration: none;
  color: rgb(83, 112, 243);
}
.comment {
  padding-top: 20px;
  width: 640px;
  height: 100px;
}
.log {
  height: 100 !important;
  width: 80 !important;
  background-color: rgb(83, 112, 243);
  font-size: 20px;
  line-height: 90px;
  border-color: rgb(83, 112, 243);
  padding: 3px 30px;
  color: rgb(253, 251, 251);
}
.recommend {
  border-color: rgb(83, 112, 243);
  color: rgb(247, 248, 252);
  background-color: rgb(83, 112, 243);
  width: 100px;
  line-height: 20px;
  padding: 20px 20px;
  font-size: 15px;
}
.picture {
  height: 138.45px;
  width: 100%;
}
.sour {
  text-decoration: none;
  color: black;
}
.more {
  text-align: center;
  text-decoration: none;
  background-color: rgb(247, 245, 245);
  font-size: 16px;
  padding: 10px 0px;
  color: rgb(143, 143, 143);
}
</style>
