<template>
  <div class="web" >
    <div class="top" style="position: absolute;top:0px">
      <a href="https://www.mi.com/a/h/6554.html?client_id=180100041086&masid=17409.0417">
      <img height="120px" width="1400px" src="../assets//top.jpg"/></a>
    </div>
    <div class="menu" style="position: absolute;top:120px">
      <a>
        <pre>小米商城| MIUI| loT| 云服务| 金融| 有品| 小爱开放平台| 政企服务 |<el-button type="text" @click="open">Select Region</el-button>                                                                                              | 登录| 注册| 消息通知| 🛒购物车(0)</pre>
      </a>
    </div>
    <div style="position: absolute;top:180px;left:30px">
      <a href="https://www.mi.com/index.html">
      <img align="left" height="50px" width="50px" src="http://news.shangbiao.com/editor/attached/image/20160823/20160823021453_89534.jpg" /></a><a href="https://www.mi.com/a/h/6554.html?client_id=180100041086&masid=17409.0417">
      <img style="position: relative;left:30px" align="left" height="50px" width="50px" src="../assets//under.png"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a id="first">小米&nbsp;&nbsp;手机红米&nbsp;&nbsp;电视&nbsp;&nbsp;笔记本&nbsp;&nbsp;盒子&nbsp;&nbsp;新品&nbsp;&nbsp;路由器&nbsp;&nbsp;智能硬件&nbsp;&nbsp;服务&nbsp;&nbsp;社区</a>
      <el-input placeholder="小米8 小米MIX2S" v-model="input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open () {
      this.$confirm(
        'Welcome to Mi.com',
        'Please select your country or region',
        {
          cancelButtonText: 'HongKong',
          confirmButtonText: 'Mainland China'
        }
      )
    }
  },
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped type="text/css">
#first {
    color:#303133;
    text-decoration:none;
    padding-left: 0.5cm;
}

.menu {
  background-color:#303133;
  color: #909399;
  height: 40px;
}
</style>
