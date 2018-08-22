<template>
  <div>
    <el-row>
      <el-col :span="4" :offset="1">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in items" :key="item.number">
            <a :href="item.href" class="z-Wrod-A" target="_blank">
              <img :src="item.img" class="z-Photo-A">
            </a>
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
      currentDate: new Date(),
      items:
      [
        {
          number: 1,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/汽车.jpg')
        },
        {
          number: 2,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/唐嫣2.jpg')
        },
        {
          number: 3,
          href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
          img: require('../assets/英超2.jpg')
        },
        {
        number: 4,
        href:'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
        img: require('../assets/十佳银行.jpg')
        },
        {
        number: 5,
        href: 'http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1',
        img: require('../assets/大学生.jpg')
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
</style>



