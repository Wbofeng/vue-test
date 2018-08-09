<template>
    <div>
      <el-row>
        <el-col :span="18" :offset="3"  class="w1"><div class="grid-content bg-purple-dark">
          <hr><br>
        </div></el-col>
        <el-col :span="4" :offset="3" class="w2"><div class="grid-content bg-purple-dark">
          <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w5">视觉焦点</a><br>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-carousel height="140px" :autoplay="false" class="w4" indicator-position="none">
            <el-carousel-item>
              <el-row>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">杨洋在新剧中演技被大赞</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">最不讲理的五大星座</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">麦当劳纪念币“涨价”30倍</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">苹果股价或将再涨</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">刚柔并济”的建筑之美</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">汽车冷知识知多少</a>
                </el-col>
              </el-row>
            </el-carousel-item>
            <el-carousel-item>
              <el-row>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">乔布斯在禅中获得了什么？</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">小猪佩奇已落伍，它上位了</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">用什么拯救你的夏天</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">佟丽娅生日陈思诚高调秀恩爱</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">外媒评最省电手机</a>
                </el-col>
                <el-col :span="4" class="w4">
                  <img src="../assets/出门小帅哥.png" class="image1">
                  <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" class="w5">伊瓜因卡尔达拉亮相米兰</a>
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
.w5{
  text-decoration: none !important;
}
.image1{
  width: 100%;
}

</style>
