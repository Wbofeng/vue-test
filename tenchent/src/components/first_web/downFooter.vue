<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3"  class="w1">
        <div class="grid-content bg-purple-dark">
          <hr><br>
        </div>
      </el-col>
      <el-col :span="4" :offset="3" class="w2">
        <div class="grid-content bg-purple-dark">
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w5">视觉焦点</a><br>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-carousel height="140px" :autoplay="false" class="w4" indicator-position="none">
          <el-carousel-item>
            <el-row>
              <el-col v-for="item in items" :key="item.nub" :span="4" class="w4">
                <img :src="item.img" class="image1">
                <a :href="item.href" target="_blank" class="w5">{{item.msg}}</a>
              </el-col>
            </el-row>
          </el-carousel-item>
          <el-carousel-item>
            <el-row>
              <el-col v-for="item in items_scd" :key="item.nub" :span="4" class="w4">
                <img :src="item.img" class="image1">
                <a :href="item.href" target="_blank" class="w5">{{item.msg}}</a>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items:
      [
        {
          nub: 1,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '最不讲理的五大星座',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 2,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '麦当劳纪念币“涨价”30倍',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 3,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '苹果股价或将再涨',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 4,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '刚柔并济”的建筑之美',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 5,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '最不讲理的五大星座',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 6,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '汽车冷知识知多少',
          img: require('../../assets/出门小帅哥.png')
        }
      ],
      items_scd:
      [
        {
          nub: 1,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '乔布斯在禅中获得了什么？',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 2,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '小猪佩奇已落伍，它上位了',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 3,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '用什么拯救你的夏天',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 4,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '佟丽娅生日陈思诚高调秀恩爱',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 5,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '外媒评最省电手机',
          img: require('../../assets/出门小帅哥.png')
        },
        {
          nub: 6,
          href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
          msg: '伊瓜因卡尔达拉亮相米兰',
          img: require('../../assets/出门小帅哥.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.w1 {
  line-height: 7px;
}
.w2 {
  font-size:15px;
  line-height: 0px;
  height: 15px;
  text-align: left;
  padding: 0px 7px;
}
.w3 {
  height: 600px;
}
.w4 {
  line-height: 20px;
  font-size: 12px;
  padding: 4px 8px;
}
.w5 {
  text-decoration: none !important;
}
.image1 {
  width: 100%;
}
</style>
