<template>
<div>
<div class="second">
  <el-carousel trigger="click" height="600px">
    <el-carousel-item v-for="(item,index) in items" :key="index">
      <transition name="show">
        <a :href="item.url">
          <img :src="item.imgurl" />
        </a>
      </transition>
    </el-carousel-item>
  </el-carousel>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          url: '#',
          imgurl: 'images/1.jpg'
        },
        {
          url: '#',
          imgurl: 'images/2.jpg'
        },
        {
          url: '#',
          imgurl: 'images/3.jpg'
        },
        {
          url: '#',
          imgurl: 'images/4.jpg'
        },
        {
          url: '#',
          imgurl: 'images/5.jpg'
        }
      ]
    }
  }
}
</script>
<style>
img{
  width: 100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
</style>
