<template>
  <el-row>
    <el-col :span="8" :offset="3">
      <div class="grid-content bg-purple">
        <el-row>
          <el-col :span="8" class="picture1">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">
            <img src="../assets/巴菲特 喝可乐.png" class="pictureBlue" stretch></a>
          </el-col>
          <el-col :span="16" class="word1">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word1 w1">吃着苹果喝着可乐，股神巴菲特又赚翻了</a>
          </el-col>
        </el-row>
        <el-row class="word2">
          <a v-for="item in news" :key="item.nub" :href="item.href" target="_blank" class="w1">{{item.msg}}<br></a>
        </el-row>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        <el-row class="word3">
          <el-col :span="10" :offset="1">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">今日图话</a>
          </el-col>
        </el-row>
        <el-row class="word4">
          <el-col :span="12">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">
              <img src="../assets/探访尘肺农民.png" class="picture2" >
            </a>
            <br>
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">袁立探访尘肺病农民家庭</a>
          </el-col>
          <el-col :span="12">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">
              <img src="../assets/出门小帅哥.png" class="picture2" >
            </a>
            <br>
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">他们外出时竟然带这些</a>
          </el-col>
        </el-row>
        <el-row v-for="item in today" :key="item.nub" class="word5">
          <el-col :span="3" >
            <a :href="item.href" target="_blank" class="w1">{{item.title}}</a>&ensp;|
          </el-col>
          <el-col :span="21" >
            <a :href="item.href" target="_blank" class="w1">{{item.msg}}</a>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple box">
        <el-row>
          <el-col :span="8" class="word6">
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">市场行情</a>
          </el-col>
          <el-col :span="16" class="word6">
            <div>
              <el-row>
                <el-col :span="16">
                  <input placeholder="代码/名称/拼音" v-model="input4" class="word7">
                </el-col>
                <el-col :span="8">
                  <button class="word8"><a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">查询</a></button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-col :span="24">
          <el-tabs v-model="activeName" @tab-click="handleClick" class="tab1">
            <el-tab-pane v-for="item in items" :key="item.nub" :label="item.label" :name="item.name" class="tab2">
              <el-row>
                <el-col :span="12">
                  <a :href="item.href" target="_blank"><img :src="item.img" class="picture3" stretch></a>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="24">
                      <a :href="item.href" target="_blank" class="tab3 w1">{{item.msg}}</a><br>
                    </el-col>
                    <el-col :span="20" :offset="3" class="number1">
                      {{item.data}}
                    </el-col>
                    <el-col :span="20" :offset="3" class="number2">
                      {{item.rase}}
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24">
                  <a :href="item.href" target="_blank" class="tab4 w1">[登录自选股] 查看我的股票走势</a>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="23" :offset="1" class="tab5">
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">星座运势</a><br>
        </el-col>
        <el-col :span="6" :offset="1" class="tab7">
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">
            <img src="../assets/白羊.png" class="picture4" >
          </a>
        </el-col>
        <el-col :span="15" :offset="2" class="tab6">
          <el-select v-model="value" placeholder="白羊座" class="tab6 w1">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          今日运势
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-off"></i>
          <i class="el-icon-star-off"></i>
        </el-col>
        <el-col :span="23" class="tab8" :offset="1">
          工作状态回升，更踏实肯干，享乐之心被理智克制。沟通或出行也比日前顺畅。有伴的白羊可以促进感...
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">[详细]</a>
        </el-col>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second',
      input3: '',
      input4: '',
      input5: '',
      select: '',
      picked: '',
      options:
      [
        {
          value: '选项1',
          label: '白羊座'
        },
        {
          value: '选项2',
          label: '金牛座'
        },
        {
          value: '选项3',
          label: '双子座'
        },
        {
          value: '选项4',
          label: '巨蟹座'
        },
        {
          value: '选项5',
          label: '狮子座'
        },
        {
          value: '选项6',
          label: '处女座'
        },
        {
          value: '选项7',
          label: '天秤座'
        },
        {
          value: '选项8',
          label: '天蝎座'
        }, {
          value: '选项9',
          label: '射手座'
        },
        {
          value: '选项10',
          label: '摩羯座'
        },
        {
          value: '选项11',
          label: '水瓶座'
        },
        {
          value: '选项12',
          label: '双鱼座'
        }
      ],
      value: '',
      items:
      [
        {
          nub: 1,
          label: '上证',
          name: 'first',
          href: 'https://news.qq.com/a/20180805/008163.htm',
          img: require('../assets/股票.png'),
          msg: '上证指数',
          data: '2779.37',
          rase: '+74.22 +2.74%'
        },
        {
          nub: 2,
          label: '恒指',
          name: 'second',
          href: 'https://news.qq.com/a/20180805/008163.htm',
          img: require('../assets/股票.png'),
          msg: '恒生指数',
          data: '28248.881',
          rase: '+429.322 +1.54%'
        },
        {
          nub: 3,
          label: '道指',
          name: 'third',
          href: 'https://news.qq.com/a/20180805/008163.htm',
          img: require('../assets/股票.png'),
          msg: '道琼斯',
          data: '25502.18',
          rase: '+39.60 +0.16%'
        },
        {
          nub: 4,
          label: '腾安',
          name: 'four',
          href: 'https://news.qq.com/a/20180805/008163.htm',
          img: require('../assets/股票.png'),
          msg: '腾讯济安',
          data: '1999.83',
          rase: '+55.41 +2.85%'
        }
      ],
      news:
      [
        {
          nub: 1,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '18元一只烤鸭靠谱吗？专家这样解释'
        },
        {
          nub: 2,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '研究称一些不孕治疗可能导致儿童自闭症'
        },
        {
          nub: 3,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '32℃不等于北极变热'
        },
        {
          nub: 4,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '美国汽车关税政策“不松口” 汽车巨头用“绝招”'
        },
        {
          nub: 5,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '花钱走后门能上大学？家长误信被骗近5万元'
        },
        {
          nub: 6,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '麦当劳纪念币1小时“涨价”30多倍！'
        },
        {
          nub: 7,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '抗癌药零关税满百天：多部门力促“救命药”降价'
        },
        {
          nub: 8,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '练瑜伽要有技巧 否则健身变伤身'
        },
        {
          nub: 9,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '全国首例“流量不限量”罚单 警示虚假电信广告'
        },
        {
          nub: 10,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '新骗术：领红包却破产 这种群里10个人9个托'
        },
        {
          nub: 11,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '皮肤损伤贴芦荟？使用不当会过敏！'
        }
      ],
      today:
      [
        {
          nub: 1,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '从买肉安电话到被割韭菜 中国人不停排队',
          title: '鹅眼'
        },
        {
          nub: 2,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '勇敢者游戏！高空瀑布跳水赛挑战极限',
          title: '体坛'
        },
        {
          nub: 3,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '侯虹斌：贵的更贵，廉价的更廉价',
          title: '入流'
        },
        {
          nub: 4,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '据说好看的女孩，都敢穿红色',
          title: '尤物'
        },
        {
          nub: 5,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '这8个动作 可以让汽车省油38%',
          title: '车族'
        },
        {
          nub: 6,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '退役战友后半夜：所有人都要面对柴米油盐',
          title: '谷雨'
        },
        {
          nub: 7,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '探访死囚犯：“死亡才是真正的解脱”',
          title: '谷雨'
        },
        {
          nub: 8,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          msg: '它一生破获毒案87起，告诉你什么是忠诚',
          title: '公益'
        }
      ]
    }
  }
}
</script>

<style scoped>
.box {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
.picture1 {
  line-height: 20px;
  text-align: left;
}
.picture2 {
  line-height: 0px;
  text-align: center;
  width: 80%;
}
.picture3 {
  text-align: center;
  width: 100%;
  padding: 0px 10px;
}
.picture4 {
  text-align: center;
  width: 120%;
  padding: 0px 1px;
  height: 130%;
}
.word0 {
  margin-bottom: 0px;
}
.word1 {
  line-height: 80px;
  text-align: left;
}
.word2 {
  font-size: 15px;
  line-height: 27px;
  text-align: left;
}
.word3 {
  font-size: 16px;
  line-height: 40px;
  text-align: left;
}
.word4 {
  font-size: 10px;
  line-height: 10px;
  margin-bottom: 5px;
}
.word5 {
  font-size: 16px;
  line-height: 31px;
  text-align: left;
}
.word6 {
  font-size: 16px;
  line-height: 31px;
  text-align: center;
}
.word7 {
  padding: 0 2px;
  width: 110px;
}
.word8 {
  padding: 0 0px;
  width: 40px;
  line-height: 17px;
  font-size: 13px;
}
.word9 {
  line-height: 0px;
  height: 10px;
  padding: 0px 0px;
}
.word10 {
  line-height: 10px;
  height: 30px;
  padding: 0 0px;
}
.word11 {
  line-height: 10px;
  font-size: 12px;
}
.tab1 {
  line-height: 0px;
  padding: 0 0px;
}
.tab2 {
  line-height: 0px;
  padding: 0 0px !important;
}
.tab3 {
  line-height: 20px;
  font-size: 14px;
  text-align: left;
}
.tab4 {
  line-height: 30px;
  font-size: 15px;
  text-align: left;
}
.tab5 {
  line-height: 40px;
  font-size: 15px;
  text-align: left;
}
.tab6 {
  line-height: 20px;
  font-size: 13px;
  text-align: left;
}
.tab7 {
  line-height: 30px;
  font-size: 15px;
  text-align: left;
}
.tab8 {
  line-height: 25px;
  font-size: 14px;
  text-align: center;
}
.number1 {
  font-size: 20px;
  line-height: 30px;
  text-align: center;
}
.number2 {
  font-size: 10px;
  line-height: 10px;
  text-align: center;
}
.el-row {
  margin-bottom: 0px;
}
.el-col {
  border-radius: 4px;
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
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: rgb(251, 253, 255);
}
.el-select .el-input {
  width: 130px;
  border-radius: 0px;
}
.input-with-select .el-input-group__prepend {
  background-color: rgb(251, 253, 255);
  border-radius: 0px;
}
.w1 {
  text-decoration: none;
}
</style>
