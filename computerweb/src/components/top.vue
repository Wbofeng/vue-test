<template>
<div class="top">
  <div class="topline"></div>
  <div class="navwrapper">
    <div class="logo">
      <a href="#">
        <img src="../../public/images/logo_1.svg">
      </a>
    </div>
    <div class="nav">
      <div class="mainnav clearfix">
      </div>
    </div>
  </div>
  <topswiper></topswiper>
</div>
</template>

<script>
import topswiper from './topSwiper.vue'

export default{
  components: {
    topswiper
  }
}
</script>
<style>
.top {
  position: relative;
}
.topline {
  height: 6px;
  background:linear-gradient(to right,#6510ad,#104fad)
}
.logo {
  position: absolute;
  z-index: 10;
  width: 180px;
  left:60px;
  top:50px;
}
.navwrapper {
  position: absolute;
  width: 100%;
  z-index: 10;
}
.nav {
  float: right;
  top:8%;
  padding:30px 35px 30px 0px;
}
.mainnav {
  padding: 32px 0 16px 0;
}
</style>
