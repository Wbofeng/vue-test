<template>
  <div class="center_swiper">
    <el-carousel height="673px" @mouseover.native="mouseover" ref="Carsousel" arrow="never" indicator-position="none" class="carousel">
      <el-carousel-item v-for="(Swiper,index) in swipers" :key="index">
        <a :href="Swiper.href">
          <img :src="Swiper.imgUrl">
          <div class="showingBottom">
            <div>{{Swiper.main}}</div>
            <h3>{{Swiper.title}}</h3>
            <p>{{Swiper.p}}</p>
          </div>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.center_swiper h3 {
  color: black;
}
.center_swiper a:hover h3 {
  color: #d18e59;
}
.showingBottom p {
  color: #777;
  padding-top: 10px;
  font-size: 10px;
}
.showingBottom div{
  background: #5e068c;
  color: #fff;
  padding: 8px 20px;
  display: inline-block;
  margin-bottom: 10px;
}
.showingBottom{
  color: black;
  margin-top: -80px;
  background: #fff;
  width: 85%;
  z-index: 1;
  padding: 40px 50px;
  position: relative;
  box-sizing: border-box;
}
.center_swiper a img {
  vertical-align: bottom;
}
.center_swiper {
  width: 868px;
}
</style>

<script>
export default {
  props: [
    'swipers'
  ],
  methods: {
    mouseover () {
      this.$refs.Carsousel.handleMouseEnter = () => {
        console.log()
      }
      this.$refs.Carsousel.handleMouseLeave = () => {
        console.log()
      }
    }
  }
}
</script>
