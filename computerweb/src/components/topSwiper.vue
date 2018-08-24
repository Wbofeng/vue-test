<template>
  <div class="top_swiper">
    <div class="top_swiper_main">
      <transition-group class="top_swiper_img clearfix" name="fade" tag="ul">
        <li v-for="(list,index) in lists" v-if="mark === index" :style="list.style" :key="index">
          <a :href="list.href">
            <p>{{list.p}}</p>
          </a>
        </li>
      </transition-group>
      <ul class="top_swiper_button">
        <li v-for="(list,index) in lists"
            :key="index"
            @mouseover="stop()"
            @mouseout="play()"
            @click="change(index)">
          <button>{{index + 1}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null,
      mark: 0,
      lists: [
        {
          href: '#',
          style: 'background-image: url(http://www.tsinghua.edu.cn/publish/thu2018/11499/20180811085731973594613/20180811085859155735805.jpg)',
          p: '清华藏珍·翰墨流芳”书画展：邂逅书香墨韵的清凉'
        },
        {
          href: '#',
          style: 'background-image: url(http://www.tsinghua.edu.cn/publish/thu2018/11499/20180806120755067157037/20180806120918497951616.jpg)',
          p: '清华第一个礼堂——同方部'
        },
        {
          href: '#',
          style: 'background-image: url(http://www.tsinghua.edu.cn/publish/thu2018/11498/20180726091415645508761/20180730143149782601224.jpg)',
          p: '用画笔追寻真理的力量——清华美院教师作品亮相纪念马克思诞辰200周年展'
        }
      ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      this.mark = this.mark % 3
    },
    play () {
      this.timer = setInterval(this.autoPlay, 4000)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    }
  },
  created () {
    this.play()
  }
}
</script>

<style>
.top_swiper_img {
  height: 100%;
  width: 4611px;
}
.top_swiper_button {
  position: absolute;
  left: 70px;
  bottom: 220px;
}
.top_swiper_button li {
  float: left;
  position: relative;
  z-index: 11;
}
.top_swiper_button button {
  font-size: 20px;
  color: #fff;
  background: none;
  height: 50px;
  width: 34px;
  border-radius: 0;
}
.top_swiper a {
  width: 100%;
  position: relative;
  z-index: 2;
}
.top_swiper .top_swiper_img li:nth-child(2) {
  position: relative;
  left: -1519px;
}
.top_swiper .top_swiper_img li {
  float: left;
  width: 1519px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  height: calc(100vh - 6px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.top_swiper a {
  width: 100%;
  height: 100%;
}
.top_swiper p {
  font-size: 40px;
  color: #fff;
  position: absolute;
  bottom: 220px;
  right: 110px;
  line-height: 1.5em;
  text-shadow: 2px 2px 0px #000;
  text-align: right;
  max-width: 70%;
}
.top_swiper {
  overflow: hidden;
}
</style>
