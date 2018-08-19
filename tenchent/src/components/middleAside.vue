<template>
  <el-row class="box1">
    <el-col :span="11" :offset="5">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="word">
        <el-tab-pane label="要闻" name="first" class="word1">
          <a v-for="item in impNews" :href="item.msg" :key='item.nub' target="_blank" class="word2 w1">{{item.message}}<br></a>
        </el-tab-pane>
        <el-tab-pane label="河北新闻" name="second" class="word1">
          <a v-for="item in hbNews" v-bind="item" href="msg" :key='item.nub' target="_blank" class="word2 w1">{{item.message}}<br></a>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="8" :offset="0">
      <el-row>
        <el-col :span="12">
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">今日话题</a>
        </el-col>
        <el-col :span="5" :offset="2">
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3">
          <img src="../assets/时光蓝画轴.png" class="pictureBlue" stretch></a>
        </el-col>
      </el-row>
      <a v-for="item in items" :href="item.msg" :key='item.nub' target="_blank" class="word5 w1">{{item.message}}<br></a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second',
      items:
      [
        {
          message: '社保改由税务部门来收，企业雇个人得多花多少钱',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 1
        },
        {
          message: '别再用手机哄娃了，让孩子出门活动最重要',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 2
        },
        {
          message: '我为什么支持跳级？',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 3
        },
        {
          message: '溺亡悲剧：那些安全常识值得一说再说',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 4
        },
        {
          message: '不能一句防“熊孩子”，就拒绝儿童进入图书馆',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 5
        },
        {
          message: '莫让手机APP 成为隐私“窃贼”',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 6
        },
        {
          message: '“代写经济”火爆，别只剩下担忧',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 7
        }
      ],
      impNews:
      [
        {
          message: '习近平推崇的那些奋斗者',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 1
        },
        {
          message: '习近平时间|用体育拉近中国与世界的距离',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 2
        },
        {
          message: '一带一路，合作共赢的可持续发展之路',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 3
        },
        {
          message: '积极进取，引领中国经济行稳致远',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 4
        },
        {
          message: '环球时报社评：唱衰中国的人和力量将是历史笑柄',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 5
        },
        {
          message: '形成合力，推动绿富同兴',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 6
        },
        {
          message: '内蒙古库布其沙漠治理经验，风雨无阻创造美好生活',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 7
        },
        {
          message: '给孩子清朗的网络空间 保障未成年人健康上网',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 8
        }
      ],
      hbNews:
      [
        {
          message: '今日河北省中北部有大到暴雨',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 1
        },
        {
          message: '河北省92号汽油每升涨0.06元',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 2
        },
        {
          message: '速看！河北新增23个高速收费站',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 3
        },
        {
          message: '世界首台电梯预警救援车亮相廊坊',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 4
        },
        {
          message: '河北邢台消防官兵冒雨为群众拖车',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 5
        },
        {
          message: '河北一地交警一天查扣两辆“黑校车”',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 6
        },
        {
          message: '河北省整治提升行动让菜篮子更安全',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 7
        },
        {
          message: '河北省大中型水库蓄水量多于常年同期',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 8
        }
      ]
    }
  }
}
</script>

<style scoped>
.box1 {
  width: 1050px;
}
.word {
  line-height: 0px;
  height: 210px;
}
.word1 {
  line-height: 20px;
  padding: 0 0px;
  text-align: left;
}
.word2 {
  font-size: 15px;
  line-height: 0px;
  height: 60px;
  padding: 0 0px;
}
.word3 {
  line-height: 5px !important;
  height: 60px;
}
.word4 {
  text-align: right;
}
.word5 {
  font-size: 15px;
  padding: 0 0px;
}
.pictureBlue {
  line-height: 40px;
  height: 30px;
  width: 150px;
}
.pictureW {
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
.w1 {
  text-decoration: none !important;
}
</style>
