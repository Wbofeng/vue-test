<template>
  <div class="center_foot">
    <div class="mainWarp"><!-- 校园看点 -->
        <h2>
            <span>校园看点</span>
            <a href="#">更多 ></a>
        </h2>
    </div>
    <div class="swiper">
      <div class="big_swiper">
        <contentswiper :swipers="bigSwipers"></contentswiper>
      </div>
      <div class="small_swiper">
        <contentswiper :swipers="smallSwipers"></contentswiper>
      </div>
    </div>
  </div>
</template>

<style>
/* center_foot */
.small_swiper .showingBottom p {
  display: none;
}
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
.center_foot {
    position: relative;
    margin-top:170px
}
.center_foot .mainWarp {
    position: relative;
    width: 1400px;
    margin: 0 auto;
}
.center_foot .mainWarp h2 {
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
.center_foot .mainWarp h2 span{
    width: 40px;
    display: block;
    padding-left: 36px;
}
.center_foot .mainWarp a {
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
</style>

<script>
import contentswiper from './centerSwiper.vue'

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
      ]
    }
  }
}
</script>
