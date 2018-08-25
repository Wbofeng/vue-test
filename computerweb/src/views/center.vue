<template>
<div class="content"><!-- 页面中间部分 -->
    <div class="section1">
        <div class="contentBgd"></div><!-- 背景图 -->
        <div class="newwrap"><!-- 新闻 -->
            <div class="mainnews"><!-- 主要新闻 -->
                <div class="news"><!-- 带图的 -->
                    <ul>
                        <li class="newsli" v-for="(list,index) in lists" :key="index">
                            <a :href="list.href">
                                <img :src="list.imgUrl">
                                <i class="el-icon-time">{{list.time}}</i>
                                <p>{{list.p}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="events"><!-- 不带图的 -->
                    <h2><b></b>新闻<b></b></h2>
                    <ul class="clearfix">
                        <li v-for="(item,index) in items" :key="index">
                            <a :href="item.href">
                                <div class="time">
                                    <span>{{item.day}}</span>{{item.time}}
                                </div>
                                <div class="text">
                                    <h3>{{item.title}}</h3>
                                    <p>{{item.p}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="newsmore">更多新闻</a>
            </div>
        </div>
    </div>
    <div class="section2">
        <div class="mainWarp"><!-- 校园看点 -->
            <h2>
                <span>校园看点</span>
                <a href="#">更多 ></a>
            </h2>
        </div>
        <div class="swiper">
            <div class="big_swiper">
              <contentswiper>
                <el-carousel-item slot="my" v-for="(bigSwiper,index) in bigSwipers" :key="index">
                  <a :href="bigSwiper.href">
                    <img :src="bigSwiper.imgUrl">
                    <div class="showingBottom">
                      <div>{{bigSwiper.main}}</div>
                      <h3>{{bigSwiper.title}}</h3>
                      <p>{{bigSwiper.p}}</p>
                    </div>
                  </a>
                </el-carousel-item>
              </contentswiper>
             </div>
             <div class="small_swiper">
              <contentswiper>
                <el-carousel-item slot="my" v-for="(smallSwiper,index) in smallSwipers" :key="index">
                  <a :href="smallSwiper.href">
                    <img :src="smallSwiper.imgUrl">
                    <div class="showingBottom">
                      <div>{{smallSwiper.main}}</div>
                      <h3>{{smallSwiper.title}}</h3>
                    </div>
                  </a>
                </el-carousel-item>
              </contentswiper>
             </div>
        </div>
    </div>
</div>
</template>

<script>
import contentswiper from '../components/centerSwiper.vue'

export default {
  components: {
    contentswiper
  },
  data () {
    return {
      bigSwipers: [
        {
          href: '#',
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/11484/20180719161659602113930/20180719161711405783741.jpg',
          title: '英国福斯特及合伙人：可持续人居 | 共享的未来',
          main: '展览',
          p: '本展览从可持续发展的角度探索由诺曼·福斯特勋爵带领的世界知名建筑设计事务所的工作。在建筑环境中关注“以人为本”体验重要性的同时，分享英国福斯特及合伙人建筑设计事务所从工程研发到工业设计多专业整合的综合式设计手法的经验。'
        },
        {
          href: '#',
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/11484/20180718084031656794017/20180718084113147579117.jpg',
          title: '2018国际迷你古典系列音乐会之五·波兰克拉夫二重奏音乐会',
          main: '音乐会',
          p: '著名的斯特拉杂志对“克拉科夫二重奏”写道：“卡利诺夫斯基和兹勒泽二人是自童年以来的朋友，他们之间的关系非常好，他们的演奏更好，可以说为音乐创造了生命。'
        },
        {
          href: '#',
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/11484/20180718084031656794017/20180718084819738602592.jpg',
          title: '材料学院《材料工程名师讲座》：Digital Product...',
          main: '学术活动',
          p: 'Digitization of information is indispensable in our today’s life as for example the use of computers and smartphones. Inkjhkhlkjlkjlkjlkjlkjlk'
        }
      ],
      smallSwipers: [
        {
          href: '#',
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/11484/20180718084031656794017/20180718084113147579117.jpg',
          title: '2018国际迷你古典系列音乐会之五·波兰克拉夫二重奏音乐会',
          main: '音乐会',
          p: '著名的斯特拉杂志对“克拉科夫二重奏”写道：“卡利诺夫斯基和兹勒泽二人是自童年以来的朋友，他们之间的关系非常好，他们的演奏更好，可以说为音乐创造了生命。'
        },
        {
          href: '#',
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/11484/20180718084031656794017/20180718084819738602592.jpg',
          title: '材料学院《材料工程名师讲座》：Digital Product...',
          main: '学术活动',
          p: 'Digitization of information is indispensable in our today’s life as for example the use of computers and smartphones. Inkjhkhlkjlkjlkjlkjlkjlk'
        },
        {
          href: '#',
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/11484/20180719161659602113930/20180719161711405783741.jpg',
          title: '英国福斯特及合伙人：可持续人居 | 共享的未来',
          main: '展览',
          p: '本展览从可持续发展的角度探索由诺曼·福斯特勋爵带领的世界知名建筑设计事务所的工作。在建筑环境中关注“以人为本”体验重要性的同时，分享英国福斯特及合伙人建筑设计事务所从工程研发到工业设计多专业整合的综合式设计手法的经验。'
        }
      ],
      items: [
        {
          href: '#',
          day: '03',
          time: '2018.08',
          title: '薛其坤率团访问日本东北大学 双方续签校级合作协议并举行联合学术研讨会',
          p: '7月25日-27日，清华大学副校长薛其坤率团访问日本东北大学，双方续签校级合作协议和学生交换协议，并举行联合学术研讨会。在清华大学与日本东北大学合作签... '
        },
        {
          href: '#',
          day: '03',
          time: '2018.08',
          title: '培育从游文化 打造海外课堂 清华大学师生赴巴西开展“丝路新探”实践调研',
          p: '7月12日至28日，在清华大学新闻与传播学院胡钰教授、范红教授的带领下，来自9个院系的12名本科生、硕士生和博士生，在巴西共同开展“丝路新探”海外社会... '
        },
        {
          href: '#',
          day: '03',
          time: '2018.08',
          title: '【微观清华】GIX全球创新夏令营开幕',
          p: ' 北京时间7月29日，参加2018GIX全球创新夏令营的学生们参观了位于西雅图地区的GIX大楼、比尔及梅琳达·盖茨基金会和西雅图图书馆。 '
        }
      ],
      lists: [
        {
          imgUrl: 'images/4.jpg',
          href: '#',
          p: '清华大学与东京大学签署战略合作协议  两校联合研讨会在东京大学召开',
          time: '2018.08.08'
        },
        {
          imgUrl: 'images/6.jpg',
          href: '#',
          p: '清华结构超滑研究团队首次实验展示微米尺度异质界面中旋转稳定的结构超滑特性',
          time: '2018.08.08'
        },
        {
          imgUrl: 'images/5.jpg',
          href: '#',
          p: '第九届丘成桐大学生数学竞赛顺利落幕 清华参赛选手揽获8个奖项',
          time: '2018.08.08'
        }
      ]
    }
  }
}
</script>

<style>
/* section2 */
.small_swiper .showingBottom {
  font-size: 76%;
}
.small_swiper .center_swiper {
  width: 450px;
}
.small_swiper {
  position: absolute;
  top: 90px;
  z-index: 10;
  right: 20px;
}
.big_swiper .center_swiper {
    width: 900px;
    padding-left: 210px;
}
.focus {
    position: relative;
    margin-left: 160px;
}
.section2 {
    position: relative;
    margin-top:170px
}
.section2 .mainWarp {
    position: relative;
    width: 1400px;
    margin: 0 auto;
}
.section2 .mainWarp h2 {
    font-size: 40px;
    color: #6416a6;
    width: 110px;
    top: 0px;
    margin: 0;
    line-height: 40px;
    background: #e7eaea;
    padding-top: 60px;
    float: left;
    position: relative;
}
.section2 .mainWarp h2 span{
    width: 40px;
    display: block;
    padding-left: 36px;
}
.section2 .mainWarp a {
    position: absolute;
    bottom: -80px;
    font-size: 14px;
    color: #777;
    width: 1em;
    line-height: 14px;
    left: 50%;
    margin-left: -7px;
    writing-mode: vertical-lr;
}
/* section1 */
.section1 .news a:hover p {
    color: #d18e59;
}
.section1 .news {
    position: relative;
    top:-160px;
    z-index: 10;
}
.section1 .newsli {
    display: table-cell;
    width: 26%;
    vertical-align: top;
    position: relative;
    background: #fff;
    border-left: 1px solid #5e068c;
}
.section1 .news ul {
    padding: 0;
    display: table;
    position: relative;
    top:75%;
}
.section1 .news ul > :first-child {
    width: 48%;
}
.section1 .news ul > :first-child i {
    position: absolute;
    bottom: 32px;
    color: #9f8027;
    left: 290px;
    z-index: 10;
}
.section1 .news ul i {
    position: absolute;
    bottom: 30px;
    color: #9f8027;
    left: 38px;
}
.section1 .news ul > :first-child p {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    background: #fff;
    height: 29.5%;
    margin-bottom: 0;
    font-size: 18px;
    padding: 35px 40px;
    line-height: 1.5em;
}
.section1 .newsli p {
    padding: 26px 40px;
    color:black;
}
.section1 .newswrap {
    position: relative;
}
.section1 .mainnews {
    width: 1400px;
    margin: 0 auto;
}
/* 背景图 */
.contentBgd {
    transform: rotate(-3deg);
    transform-origin: center top;
    position: absolute;
    height: 150%;
    width: 200%;
    background-image: url("../../public/images/tbg.jpg");
    top: -20px;
    right: -5px;
    z-index: -1;
}
.section1 {
    position: relative;
}
/* events*/
.events {
    margin-top: -80px;
}
.events ul {
    margin-left:-50px
}
.events h2 {
    font-size: 36px;
    text-align: center;
    color: white;
}
.events h2 b {
    height: 1px;
    width: 60px;
    background: #fff;
    display: inline-block;
    vertical-align: middle;
    opacity: 0.5;
    margin: 0 20px;
}
.events a:hover h3,.events a:hover .time {
    color: #d18e59;
}
.events li a {
    display: block;
    color: #fff;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    padding-left: 20px;
    margin-left: 50px;
}
.events li {
    float: left;
    width: 33.33%;
}
.time {
    font-size: 12px;
    float: left;
    width: 80px;
    text-align: center;
}
.events h3 {
    font-size: 16px;
    line-height: 1.5em;
}
.text {
    margin-left: 23%;
}
.text p {
    opacity: 0.7;
    padding-top: 10px;
    font-size: 12px;
}
.time span {
    display: block;
    font-size: 36px;
    line-height: 1em;
}
.newsmore {
    height: 48px;
    font-size: 14px;
    line-height: 48px;
    border: 1px solid #fff;
    padding: 0 20px;
    display: block;
    margin: 60px auto 0px auto;
    width: 150px;
    color: #fff;
    text-align: center;
    opacity: 0.5
}
.content {
    position: relative;
    z-index: 0;
}
</style>
