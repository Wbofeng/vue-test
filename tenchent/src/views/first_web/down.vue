<template>
  <el-container>
    <el-header>
      <downheader>
      </downheader>
    </el-header>
    <el-main>
      <downMain>
      </downMain>
    </el-main>
    <el-footer>
      <downFooter>
      </downFooter>
    </el-footer>
  </el-container>
</template>

<script>
import downheader from '../../components/first_web/downHeader.vue'
import downMain from '../../components/first_web/downMain.vue'
import downFooter from '../../components/first_web/downFooter.vue'

export default {
  components: {
    downheader,
    downMain,
    downFooter
  }
}
</script>

<style scoped>
.el-header {
  background-color: rgb(251, 253, 255);
  color: #333;
  text-align: center;
  line-height: 20px;
  height: 320px !important;
}
.el-footer {
  background-color: rgb(251, 253, 255);
  color: #333;
  text-align: center;
  line-height: 185px;
  height: 200px !important;
}
.el-main {
  background-color: rgb(251, 253, 255);
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 431px !important;
}
</style>
