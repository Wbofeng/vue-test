<template>
<div>
  <el-row>
    <el-col :span="14" :offset="3">
      <el-button plain class="button" size="small"><img src="../assets/时光画轴.png" class="image" stretch></el-button>
    </el-col>
    <el-col :span="4" :offset="0">
      <el-carousel height="110px">
        <el-carousel-item>
          <img src="../assets/时光画轴.png" class="image1">
          <img src="../assets/时光画轴.png" class="image1">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/时光画轴.png" class="image1">
          <img src="../assets/时光画轴.png" class="image1">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/时光画轴.png" class="image1">
          <img src="../assets/时光画轴.png" class="image1">
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
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
  .run {
    height: 110px;
  }
  .button {
    padding: 1;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .image1 {
    width: 200%;
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
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
