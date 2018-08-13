<template>
    <el-row>
    <el-col :span="7">
      <div class="grid-content bg-purple-light">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="娱乐视频" name="first">
            <el-row>
              <el-col :span="9">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                 <img src="../assets/郑爽.jpg" class="picture" stretch>
                  </a><br/>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;郑爽生图颜值耐打</a><br>
              </el-col>
              <el-col :span="12">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right"> 节目制片:鹿晗退出对节目伤害大</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right"> 王菲夸窦靖童作品:至今最好的1个</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right"> 王菊方称英模公司立场摇摆不定</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right"> 《延禧》皇后下线 秦岚喊话璎珞</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">娜扎吴亦凡方否认恋爱传闻 李荣浩否认假唱:不要乱说话</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">王菲带李嫣追星找娄艺潇合影 白敬亭方辟谣热恋传言</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">林宥嘉被指侵权华研相信发声 EXO遭黑粉激光笔扫眼睛</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">张翰穿印骰子衬衫壕气十足 李佳航等力挺《爱情公寓》</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">张丹峰旧文称对爱专一 张杰开唱谢娜赵丽颖等群星助阵</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">小S造型凹不停张钧甯丸子头蔡依林秀蛮腰美腿</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">片酬超过5000万的明星都有谁？演员酬劳一览</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">《西虹市首富》22亿票房带火一句台词，沈腾听了都没反应过来</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">王晶尽力了，拉刘德华周润发都捧不红她！沈腾却让她15天赚23亿</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">孟美岐宣仪紫宁退出火箭少女 称工作超负荷</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">拍《还珠》背后辛酸曝光 皇阿玛曝赵薇累到偷跑</a><br>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="电子竞技" name="second">
            <el-row>
              <el-col :span="9">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../assets/电竞.png" class="picture" stretch>
                  </a>
                  <br>
              </el-col>
              <el-col :span="12">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">央视报道电子竞技已入选亚运会</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">TI8奖金池距离破纪录仅差100万</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">Artifact与炉石经济系统的不同</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">英雄联盟7周年庆典一起相约南京</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">萧敬腾成立吃鸡战队The Jams ESL宣布芝加哥IEM赛事</a>
              </el-col>
               <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">KPL选秀QG力争辅助新秀 VP与旗下DOTA2选手续签一年</a>
                </div>
              </el-col>
               <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">DOTA2五名7000分大神挑战OpenAI惨遭血虐</a>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">珑讯电竞CBEL首个商业电竞联赛专题报道而法网认同</a>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">Fantasy：抱着夺冠的心回归星际II很幸福 怪物猎人世界Steam已知问题</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">战地5第二次封测8月14日开始 泰国开放中国旅客专用通道</a>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">十几岁中学生撰写政协“提案”：豪言改变世界</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">国务院：师范生“免费教育”升为“公费教育”</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">无证无照无资质！西安734家校外培训机构被叫停</a>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">《美关停255家EB-5移民中心 超九成投资人来自中国</a><br>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">林心如熬夜追《延禧》 每天看到凌晨两三点</a><br>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="手游" name="third">
            <el-row>
              <el-col :span="9">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
                    <img src="../assets/手游.jpg" class="picture" stretch>
                  </a>
                  <br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IG豪取八连胜</a><br>
                </div>
              </el-col>
              <el-col :span="12">
                <div>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">QGhappy4比2胜eStarpro夺冠</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">王者荣耀攻略:项羽使用技巧轻松</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">亚运会电竞项目比赛日程公布项目</a><br>
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word4 w1 el-icon-caret-right">英雄联盟穿越火线CS:GO上榜</a><br>
                </div>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">风哥任周杰伦战队总教练 台湾网友:LMS可没UZI这样打可不行</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">CSGO天禄IEM上海站0-2惨败 不敌NRG屈居亚军网友表示遗憾</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">央视采访电竞国家队 UZI：上网被父母抓住就打 网友评论炸锅</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">绝地求生设计师：开挂玩家极少 遇到是你运气差 或许是你技术差</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">王者荣耀冠军杯：BA.黑凤梨4-0胜M8H晋级八强 粉丝尖叫！</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">孤存是队里最节俭的人 蜂蜜仔:除韦神孤存最富打电玩问阿斯顿</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">IG27分钟领先RW17000千珏十层印记太恐怖</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">IG再次集合Theshsy休学回归 网友: 要夺总冠军?太疯狂！！</a><br/>
              </el-col>
              <el-col :span="24" class="word6">
                  <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="el-icon-star-on w1">LOL神超直播谈微笑当教练 称当教练太累不想做想轻松对待生活</a><br/>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
    <el-col :span="9" :offset="1" class="shangwai">
        <div class="word grid-content bg-purple">
            <el-row>
        <el-col :span="5" :offset="0">
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="word3 w1">
          <img src="../assets/社会主义核心价值观.png" class="oto" stretch>
          </a>
        </el-col>
      </el-row>
            <a v-for="item in News" :href="item.msg" :key='item.nub' target="_blank" class="word2 w1">
            {{item.message}}
            <br>
          </a>
        </div>
    </el-col>
    <el-col :span="4" class="guanggao1" :offset="0">
        <el-row>
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank">
            <img src="../assets/厂家广告.jpg" class="guanggao1">
            </a>
        </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
    data(){
        return{
           activeName: 'second',
           News:
      [
        {
          message: '',
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
          message: '',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 5
        },
        {
          message: '河北雄安：4千余万尾青虾苗放流白洋淀 世界高科技城市正在崛起！',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 6
        },
        {
          message: '经济快报：深圳甩开广州 武汉增势猛 京津冀一体化持续增长未来可期',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 7
        },
        {
          message: '华山跳崖：男子开路虎拿不出百元被迫自杀?警方回应 网友热评不断',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 8
        },
        {
          message: '乔布斯女：寡情刻薄善变的父亲 但又是一位卓越才能的父亲 敬佩！',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 9
        },
        {
          message: '丑闻再现：日本汽车排废检验造假风暴卷入更多公司仍然持续不断',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 10
        },
        {
          message: '降价榜单：新桑塔纳仅5.49万起 奥迪A4L降7.54万 特斯拉进军中国',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 11
        },
        {
          message: '天价片酬：10家公司响应抵制天价片酬联合声明 起效需行业共识！',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 12
        },
        {
          message: '国际消息：谷歌可能在6到9个月之内回归中国，李彦宏朋友圈回复',
          msg: 'https://news.qq.com/a/20180805/008163.htm',
          nub: 13
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
.shangwai{
    margin-top:0cm;
}
.oto{
    height: 200px;
    width: 500px;
}
.guanggao1{
    height: 450px;
    width: 200px;
}
</style>


