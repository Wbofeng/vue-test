<template>
<div class="content"><!-- 页面中间部分 -->
    <contenttop></contenttop>
    <contentfoot></contentfoot>
</div>
</template>

<script>
import contenttop from '../components/centerTop.vue'
import contentfoot from '../components/centerFoot.vue'

export default {
  components: {
    contenttop,
    contentfoot
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
