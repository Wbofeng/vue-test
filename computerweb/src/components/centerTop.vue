<template>
<div class="center_top">
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
</template>

<style>
/* center_top */
.center_top .news a:hover p {
    color: #d18e59;
}
.center_top .news {
    position: relative;
    top:-160px;
    z-index: 10;
}
.center_top .newsli {
    display: table-cell;
    width: 26%;
    vertical-align: top;
    position: relative;
    background: #fff;
    border-left: 1px solid #5e068c;
}
.center_top .news ul {
    padding: 0;
    display: table;
    position: relative;
    top:75%;
}
.center_top .news ul > :first-child {
    width: 48%;
}
.center_top .news ul > :first-child i {
    position: absolute;
    bottom: 32px;
    color: #9f8027;
    left: 290px;
    z-index: 10;
}
.center_top .news ul i {
    position: absolute;
    bottom: 30px;
    color: #9f8027;
    left: 38px;
}
.center_top .news ul > :first-child p {
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
.center_top .newsli p {
    padding: 26px 40px;
    color:black;
}
.center_top .newswrap {
    position: relative;
}
.center_top .mainnews {
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
.center_top {
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

<script>
export default {
  data () {
    return {
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
