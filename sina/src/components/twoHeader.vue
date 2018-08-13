<template>
<div>
  <el-row>
    <el-col :span="14" :offest="5" class="float">
      <el-button plain size="small">
          <a href="https://news.qq.com/a/20180805/008163.htm" class="pic2" target="_blank">
          <img src="../assets/NBA最佳新秀争夺.jpg" class="float">
          </a>
      </el-button>
    </el-col>
    <el-col :span="4" :offset="1">
        <el-button plain size="small">
            <a href="https://news.qq.com/a/20180805/008163.htm" class="pic2" target="_blank">
            <img src="../assets/国际.jpg" class="two-Right">
            </a>
        </el-button>
    </el-col>
    <el-col :span="3" :offset="2">
        <el-button plain size="small">
            <a href="https://news.qq.com/a/20180805/008163.htm" class="pic2" target="_blank">
            <img src="../assets/手机.jpg" class="two-Right" stretch>
            </a>
        </el-button>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
.float{
    width: 550px;
    height: 95px;
    display: block;
    border-style: none; border-width: 50px;
}
.two-Right{
    width: 250px;
    height: 95px;
    display: block;
}
.pic2{
    width: 200px;
    height: "30";
}
</style>