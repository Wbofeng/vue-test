<template>
  <div>
    <el-row>
      <el-col :span="14" :offset="3">
        <el-button plain class="button" size="small">
          <img src="../assets/时光画轴.png" class="image" stretch>
        </el-button>
      </el-col>
      <el-col :span="4" :offset="0">
        <el-carousel height="110px">
          <el-carousel-item v-for="item in items" :key="item.nub">
            <a :href="item.href" class="word2" target="_blank">
              <img :src="item.img" class="image1">
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
          nub: 1,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          img: require('../assets/有害信息举报1.png')
        },
        {
          nub: 2,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          img: require('../assets/有害信息举报2.png')
        },
        {
          nub: 3,
          href: 'https://news.qq.com/a/20180805/008163.htm',
          img: require('../assets/有害信息举报2.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.button {
  padding: 1;
  float: right;
}
.image {
  width: 100%;
  display: block;
}
.image1 {
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
