<template>
        <el-row>
        <el-col :span="18" class="footsize" :offset="0">
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我爱看图" name="first">
                <el-col :span="4" :offset="1">
             <el-carousel height="300px">
              <el-carousel-item v-for="item in items" :key="item.number">
                <a :href="item.href" class="z-Wrod-A" target="_blank" stretch>
                <img :src="item.img" class="photosize">
                </a>
             </el-carousel-item>
            </el-carousel>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="猜你喜欢" name="second">
            <el-col :span="4" :offset="1">
            <el-carousel height="300px">
              <el-carousel-item v-for="item in news" :key="item.number">
                <a :href="item.href" class="z-Wrod-A" target="_blank">
                <img :src="item.img" class="photosize">
                </a>
             </el-carousel-item>
            </el-carousel>
                </el-col>
            </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data () {
    return {
      currentDate: new Date(),
      items:
      [
        {
          number: 1,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/图片1.png')
        },
        {
          number: 2,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/图片2.png')
        },
        {
          number: 3,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/图片3.png')
        },
        {
          number: 4,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/图片4.png')
        },
        {
          number: 5,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/图片5.png')
        }
      ],
      nwes:
      [
        {
          number: 1,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/图片4.png')
        },
        {
          number: 2,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/图片5.png')
        }
      ]
    }
  }
}
</script>
<style scoped>
.z-Wrod-A {
  line-height: 0px;
  height: 60px;
  width: 10px;
}
.z-Photo-A {
  width: 100%;
  height: 100%;
  display: block;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
  height: 110px;
}
.el-carousel__item:nth-child(2n) {
  background-color: rgb(251, 253, 255);
}
.el-carousel__item:nth-child(2n+1) {
  background-color:  rgb(251, 253, 255);
}
.photosize{
    height: 300px;
    width: 1000px;
}
.footsize{
    height: 300px;
    width: 6000px;
}
</style>


