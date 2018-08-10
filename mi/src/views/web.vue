<template>
  <div class="web" >
    <div class="top" style="position: absolute;top:0px">
      <a href="https://www.mi.com/a/h/6554.html?client_id=180100041086&masid=17409.0417">
        <img height="120px" width="1400px" src="../assets//top.jpg"/>
      </a>
    </div>
    <div class="menu" style="position: absolute;top:120px">
      <p>小米商城| MIUI| loT| 云服务| 金融| 有品| 小爱开放平台| 政企服务 |<el-button type="text" @click="open">Select Region</el-button></p>
      <p id="one">| 登录| 注册| 消息通知| 🛒购物车(0)</p>
    </div>
    <div style="position: absolute;top:180px;left:30px" >
      <a href="https://www.mi.com/index.html">
        <img height="50px" width="50px" src="../assets//logo-footer.png" />
      </a>
      <a href="https://www.mi.com/a/h/6554.html?client_id=180100041086&masid=17409.0417">
        <img style="position: relative;left:30px" src="../assets//under.png"/>
      </a>
    </div>
    <div id="first" style="position: absolute;top:180px;left:5cm">
      <p>小米&nbsp;&nbsp;手机红米&nbsp;&nbsp;电视&nbsp;&nbsp;笔记本&nbsp;&nbsp;盒子&nbsp;&nbsp;新品&nbsp;&nbsp;路由器&nbsp;&nbsp;智能硬件&nbsp;&nbsp;服务&nbsp;&nbsp;社区</p>
    </div>
    <div style="position: absolute;top:180px;right:60px" height:40px width:80px>
      <el-input placeholder="小米8 小米MIX2S" v-model="input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div>
      <ul id="sidebar">
        <li v-for="item in items" v-bind:key="item.msg">
          {{item.msg}}
        </li>
      </ul>
      <el-carousel id="block">
        <el-carousel-item v-for="photo in photos" :key="photo.pic">
          <img class="min" :src="photo.pic">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="table">
      <table cellspacing="10">
        <tr>
          <td>选购手机<br/>Buy mobile phones</td>
          <td>企业团购<br/>Corporate group-buying</td>
          <td>F码通道<br/>Code channel F</td>
        </tr>
        <tr>
          <td>不限量卡<br/>Unlimited card</td>
          <td>以旧换新<br/>Old for new </td>
          <td>话费充值<br/>Prepaid calls</td>
        </tr>
      </table>
    </div>
    <div class="tabl-side">
      <div>
        <img id="table-sideleft" src="../assets//miunderbig1jpg.jpg"/>
      </div>
      <div>
        <img id="table-sidemiddle" src="../assets//miunderbig2.jpg"/>
      </div>
      <div>
        <img id="table-sideright" src="../assets//mibigscreen1.jpg"/>
      </div>
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
      input: '',
      items: [
        {msg: '手机 电话卡'},
        {msg: '电视 盒子'},
        {msg: '笔记本 平板'},
        {msg: '家电 插线板'},
        {msg: '出行 穿戴'},
        {msg: '智能 路由器'},
        {msg: '电源 配件'},
        {msg: '个护 儿童'},
        {msg: '耳机 音箱'},
        {msg: '生活 箱包'}
      ],
      photos: [
        {pic: require('../assets/mibigscreen2.jpg')},
        {pic: require('../assets/mibigscreen4.jpg')},
        {pic: require('../assets/mibigscreen5.jpg')},
        {pic: require('../assets/mibigscreen3.jpg')},
        {pic: require('../assets/mibigscreen6.jpg')}
      ]
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
#one{
  position: relative;
  bottom:40px;
  left:85%;
}
#sidebar {
  background-color: #606266;
  color:beige;
  width: 100px;
  height: 250px;
  margin-left: 30px;
  margin-top: 200px;
  padding-top: 25px;
}
#block {
  height: 270px;
  width: 80%;
  position: relative;
  left: 210px;
  bottom:290px;
}
#table {
  background-color: #909399;
  color: #F2F6FC;
  width:  280px;
  height: 150px;
  margin-left: 30px;
  padding: 5px;
  position: relative;
  bottom: 250px;
}
#table-sideleft {
  height: 182px;
  width: 320px;
  position: relative;
  bottom: 420px;
  right: 180px;
}
#table-sidemiddle {
  height: 182px;
  width: 320px;
  position: relative;
  bottom: 605px;
  left: 150px;
}
#table-sideright {
  height: 182px;
  width: 320px;
  position: relative;
  bottom: 790px;
  left: 480px;
}

.min {
  height: 270px;
  width: 100%;
}
.menu {
  background-color:#303133;
  color: #909399;
  height: 40px;
  width:100%;
  font-size: 2px;
  text-align: left;
}
</style>
