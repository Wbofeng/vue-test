<template>
  <el-row>
    <el-col :span="8" :offset="3">
      <div class="word grid-content bg-purple">
        <el-row>
          <el-col :span="7">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
              <img src="../../assets/人民币.png" class="pictureBlue" stretch>
            </a>
          </el-col>
          <el-col :span="12">
            <br><a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">河北丰宁：雨季造林添新绿</a><br>
          </el-col>
        </el-row>
        <el-row>
          <br>
          <a v-for="item in News" :href="item.msg" :key='item.nub' target="_blank" class="word2 w1">
            {{item.message}}
            <br>
          </a>
        </el-row>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="今日热播" name="first">
            <el-row>
              <el-col :span="12">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../../assets/总统.png" class="picture" stretch>
                  </a>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1"> 燃！各军集结：使命不怠 百炼成军</a><br>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../../assets/总统.png" class="picture" stretch>
                  </a>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1"> 燃！各军集结：使命不怠 百炼成军</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">43度还没空调 特朗普演讲狂吐槽“热死宝宝了”</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">数百游客滞留龙目岛等撤离 躺机场地上睡觉休息</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">美国佛罗里达州遭遇赤潮 海边铺满鱼龟尸体</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">全球警界狙击高手对决！中国90后特警获第一名</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word5 word6">
                <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right word5 w1">NBA现役最强球员TOP5&emsp;</a>
                <a href="https://news.qq.com/" class="word5 w1">MMA史上最有创意的KO</a><br>
              </el-col>
              <el-col :span="24" class="word5 word6">
                <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right word5 w1">&nbsp;张馨予晒甜蜜婚纱照&emsp;</a>
                <a href="https://news.qq.com/" target="_blank" class="word5 w1">许晴穿“小龙虾”装秀身材</a><br>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="影视剧" name="second">
            <el-row>
              <el-col :span="12">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../../assets/总统.png" class="picture" stretch>
                  </a>
                  <br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1">猛虫过江：爆笑喜剧</a><br>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../../assets/总统.png" class="picture" stretch>
                  </a>
                  <br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1">《扶摇》好剧全网独播</a><br>
                </div>
              </el-col>
              <el-col :span="5" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">电视剧&nbsp;</a>
                </div>
              </el-col>
              <el-col :span="10" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">《香蜜沉沉烬如霜》&nbsp;</a><br>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">《猎毒人》</a><br>
                </div>
              </el-col>
              <el-col :span="10" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">《爱情进化论》&nbsp;</a>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">《甜蜜暴击》&nbsp;</a><br>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">《沙海》</a><br>
                </div>
              </el-col>
              <el-col :span="5" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">电影 &nbsp;</a>
                </div>
              </el-col>
              <el-col :span="10" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1"> 《熊出没·变形记》&nbsp;</a><br>
                </div>
              </el-col>
              <el-col :span="9" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">《狂暴巨兽》热播</a><br>
                </div>
              </el-col>
              <el-col :span="10" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">《唐人街探案2》&nbsp;</a>
                </div>
              </el-col>
              <el-col :span="14" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">《倚天屠龙记》经典重温&nbsp;</a><br>
                </div>
              </el-col>
              <el-col :span="5" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" class="el-icon-caret-right w1">动漫 &nbsp;</a>
                </div>
              </el-col>
              <el-col :span="8" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1"> 《魔道祖师》&nbsp;</a><br>
                </div>
              </el-col>
              <el-col :span="11" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">《我的逆天神器》</a><br>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">纪录片 &nbsp;</a>
                </div>
              </el-col>
              <el-col :span="9" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">&nbsp;椒房恩宠的秘密&nbsp;</a><br>
                </div>
              </el-col>
              <el-col :span="8" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">冰川崩塌瞬间</a><br>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="综艺" name="third">
            <el-row>
              <el-col :span="12">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../../assets/总统.png" class="picture" stretch>
                  </a>
                  <br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1">斯外戈秀炸裂舞技</a><br>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../../assets/总统.png" class="picture" stretch>
                  </a>
                  <br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1">萧敬腾花式表白王菲</a><br>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">明日之子2&nbsp;</a>
                </div>
              </el-col>
              <el-col :span="8" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1"> 文兆杰高音惊艳</a><br>
                </div>
              </el-col>
              <el-col :span="9" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">孙泽源《勿忘你》</a><br>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">我家那小子&nbsp;</a>
                </div>
              </el-col>
              <el-col :span="9" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1"> 钱枫情深深雨蒙蒙</a><br>
                </div>
              </el-col>
              <el-col :span="8" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">大张伟爆料</a><br>
                </div>
              </el-col>
              <el-col :span="6" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">中餐厅2 &nbsp;</a>
                </div>
              </el-col>
              <el-col :span="9" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1"> 赵薇苏有朋当月老</a><br>
                </div>
              </el-col>
              <el-col :span="8" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">王俊凯飙rap</a><br>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">幸福三重奏&nbsp;</a>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1"> 大S的送命题</a><br>
                </div>
              </el-col>
              <el-col :span="10" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">陈建斌气哭蒋勤勤</a><br>
                </div>
              </el-col>
              <el-col :span="7" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">热播综艺&ensp;&ensp;</a>
                </div>
              </el-col>
              <el-col :span="6" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">幻乐之城</a><br>
                </div>
              </el-col>
              <el-col :span="5" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">跨界歌王</a><br>
                </div>
              </el-col>
              <el-col :span="6" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">高能少年团</a><br>
                </div>
              </el-col>
              <el-col :span="6" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-caret-right w1">独播综艺&ensp;</a>
                </div>
              </el-col>
              <el-col :span="6" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">放开我北鼻</a><br>
                </div>
              </el-col>
              <el-col :span="8" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">不可思议的妈妈</a><br>
                </div>
              </el-col>
              <el-col :span="3" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">侣行2</a><br>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple w1">
        <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3">
          <img src="../../assets/时光船画轴.png" class="pictureYellow" stretch>
        </a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second',
      News:
      [
        {
          message: '河北隆化“小书桌”住进贫困学子家里',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 1
        },
        {
          message: '河北大厂：“共享车位”让城市更文明',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 2
        },
        {
          message: '河北雄安：4千余万尾青虾苗放流白洋淀',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 3
        },
        {
          message: '河北：半年为农民工追发工资待遇5.3亿元',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 4
        },
        {
          message: '涉案金额巨大！河北查处一起网络传销大案',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 5
        },
        {
          message: '河北：市民发明“神器” 瞬间破窗助人逃生军',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 6
        },
        {
          message: '河北山区教育扶贫学子：下山上学改变了命运',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 7
        },
        {
          message: '河北11地获批开展2018年农业产业强镇示范建设',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 8
        }
      ]
    }
  }
}
</script>

<style scoped>
.picture {
  padding: 1px 5px;
}
.pictureYellow {
  width: 100%;
  height: 320px;
}
.picturebule {
  width: 100%;
  height: 80%;
}
.word {
  height: 320px;
  text-align: left;
}
.word2 {
  line-height: 15px;
  height: 500px;
}
.word2 {
  line-height: 30px;
  height: 500px;
}
.word3 {
  line-height: 10px;
  height: 60px;
  padding: 10px 0;
}
.word4 {
  font-size:10px;
  line-height: 0px;
  height: 0px;
}
.word5 {
  font-size:15px;
  text-align: left;
}
.word6 {
  line-height: 27px;
  text-align: left;
}
.el-row {
  margin-bottom: 0px;
  height: 70px;
}
.el-col {
  border-radius: 0px;
}
.bg-purple-dark {
  background: rgb(251, 253, 255);
}
.bg-purple {
  background: rgb(251, 253, 255);
}
.bg-purple-light {
  background: rgb(251, 253, 255);
}
.grid-content {
  border-radius: 0px;
  min-height: 50px;
}
.row-bg {
  padding: 0px 0;
  background-color: rgb(251, 253, 255);
}
.w1 {
  text-decoration: none;
}
</style>
