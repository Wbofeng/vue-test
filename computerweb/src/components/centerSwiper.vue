<template>
  <div class="center_swiper">
    <el-carousel height="673px" @mouseover.native="mouseover" ref="Carsousel" arrow="never" indicator-position="none" class="carousel">
        <slot name="my"></slot>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    mouseover () {
      console.log(this.$refs.Carsousel)
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
