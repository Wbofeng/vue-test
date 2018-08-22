<template>
  <div class="web" >
    <div class="top" style="position: absolute;top:0px">
      <a href="https://www.mi.com/a/h/6554.html?client_id=180100041086&masid=17409.0417">
        <img height="120px" width="1400px" src="../assets//top.jpg"/>
      </a>
    </div>
    <div class="menu" style="position: absolute;top:120px">
      <p>小米商城| MIUI| loT| 云服务| 金融| 有品| 小爱开放平台| 政企服务 |</p>
      <p id="one">| 登录| 注册| 消息通知|</p>
      <el-popover width="400" trigger="click">
        <el-table :data="gridData">
          <el-table-column width="133" property="c1" label="Mainland China"></el-table-column>
          <el-table-column width="130" property="c2" label="Hong kong"></el-table-column>
          <el-table-column width="130" property="c3" label="Taiwan"></el-table-column>
        </el-table>
        <el-button id="SR" slot="reference">Select Region</el-button>
      </el-popover>
      <button class="btn" :class="{'btn-primary': isShow}" @mouseover="toggleShow()" @mouseout="toggleShow()" v-text="btnStyle"></button>
      <span v-show="isShow" class="sp" :class="{'fadeIn': isShow}">购物车中还没有商品，赶快来选购吧！</span>
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
      <p style="font-size: 15px;font-family: Arial"><pre>            红米   电视   笔记本   盒子   新品   路由器   智能硬件   服务   社区</pre></p>
    </div>
    <div class="dropdn">
      <button class="dropbtn">小米手机</button>
      <div class="dpd-content">
        <div class="dpd-content-left">
          <img src="../assets//uh11.jpg"/>
          <p id="dpd2">红米6A</p>
          <p id="dpd3">579元起</p>
        </div>
        <div class="dpd-content-middle">
          <p id="dpd1">新品</p>
          <img src="../assets//uh12.jpg"/>
          <p id="dpd2">小米8</p>
          <p id="dpd3">2699元起</p>
        </div>
        <div class="dpd-content-right">
          <p id="dpd1">新品</p>
          <img height="200px" width="180px" src="../assets//uh13.jpg"/>
          <p id="dpd2">小米8 SE</p>
          <p id="dpd3">1799元起</p>
        </div>
      </div>
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
    <div>
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
    <div>
      <p id="quick-shop">小米闪购</p>
      <p class="quick-shop-left">
        <p id="qsltop"><b>国庆00:00场</b></p>
        <img align=center height=50px width=40px style="position:relative;bottom: 980px;right: 520px" src="../assets//flash.png"/>
        <p id="qslmiddle">距离开始还有</p>
        <div id="qslbottom">{{`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`}}</div>
    </div>
    <a href="https://www.mi.com/seckill/" style="text-decoration:none" target="_blank">
      <div id="quick-shop1">
        <img align=center height=110px width=150px src="../assets/qs1.jpg"/>
        <p id="qsr1">米家电水壶 白色</p>
        <p id="qsr2">一杯水，是一家人的安心</p>
        <p id="qsr3">79元</p>
        <p id="qsr2"><del>99元</del></p>
      </div>
      <div id="quick-shop2">
        <img align=center height=110px width=150px src="../assets/qs2.jpg"/>
        <p id="qsr1">米家蓝牙温湿度计 白色</p>
        <p id="qsr2">冷暖干湿，一目了然</p>
        <p id="qsr3">55元</p>
        <p id="qsr2"><del>69元</del></p>
      </div>
      <div id="quick-shop3">
        <img align=center height=110px width=150px src="../assets/qs4.jpg"/>
        <p id="qsr1">米兔智能积木 白色</p>
        <p id="qsr2">动手又动脑</p>
        <p id="qsr3">159元</p>
        <p id="qsr2"><del>199元</del></p>
      </div>
      <div id="quick-shop4">
        <img align=center height=110px width=150px src="../assets/qs5.jpg"/>
        <p id="qsr1">米兔儿童磁力积木 彩色</p>
        <p id="qsr2">孩子手中的百变世界</p>
        <p id="qsr3">179元</p>
        <p id="qsr2"><del>199元</del></p>
      </div>
    </a>
    <a href="https://item.mi.com/product/10000100.html">
      <img align="center" width="90%" height="150px" style="position:relative;bottom:1900px" src="../assets/fen.jpg"/>
    </a>
    <div class="half-down">
      <div id="telephone">
        <p style="font-size:20px;color:#303133;position:relative;top:30px;right:600px">手机</p>
        <a href="https://www.mi.com/p/1915.html" style="text-decoration:none" target="_blank">
         <p style="font-size:15px;color:#303133;position:relative;bottom:18px;left:576px">查看全部</p>
         <el-row>
           <el-button style="position:relative;bottom:64px;left:635px" type="info" icon="el-icon-arrow-right" circle></el-button>
         </el-row>
        </a>
        <a href="https://item.mi.com/product/10000111.html">
          <img width="250px" height="790px" style="position:relative;bottom:34px;right:500px" src="../assets//uhl.jpg"/>
        </a>
        <div id="uhr11">
          <p id="uhr">减20元</p>
          <a href="https://item.mi.com/product/8274.html">
            <img src="../assets//uh11.jpg"/>
          </a>
          <p id="qsr1">红米6A</p>
          <p id="qsr2">AI人脸解锁，小巧全面屏，高性能处...</p>
          <p id="qsr3"><pre>579元<p id="qsr2"><del>599元</del></p></pre></p>
        </div>
        <div id="uhr12">
          <a href="https://item.mi.com/product/10000099.html">
            <img src="../assets//uh12.jpg"/>
          </a>
          <p id="qsr1">小米8 6GB+64GB</p>
          <p id="qsr2">全球首款双频GPS，骁龙845处理器</p>
          <p id="qsr3">2699元</p>
        </div>
        <div id="uhr13">
          <a href="https://item.mi.com/product/10000100.html">
            <img src="../assets//uh13.jpg"/>
          </a>
          <p id="qsr1">小米8 SE 6GB+64GB</p>
          <p id="qsr2">AI 超感光双摄，三星 AMOLED 屏幕</p>
          <p id="qsr3">1799元</p>
        </div>
        <div id="uhr21">
          <p id="uhr">减200元</p>
          <a href="https://item.mi.com/product/10000091.html">
            <img src="../assets//uh21.jpg"/>
          </a>
          <p id="qsr1">小米6X 4GB+32GB</p>
          <p id="qsr2">全索尼相机，骁龙660 AIE处理器</p>
          <p id="qsr3"><pre>1299元 <p id="qsr2"><del>1499元</del></p></pre></p>
        </div>
        <div id="uhr22">
          <p id="uhr">享8折</p>
          <a href="https://item.mi.com/product/10000057.html">
            <img src="../assets//uh22.jpg"/>
          </a>
          <p id="qsr1">小米Max 4GB+64GB</p>
          <p id="qsr2">6.44''大屏，5300mAh 充电宝级的大...</p>
          <p id="qsr3"><pre>1199元 <p id="qsr2"><del>1699元</del></p></pre></p>
        </div>
        <div id="uhr23">
          <p id="uhr">享7折</p>
          <a href="https://item.mi.com/product/10000070.html">
            <img src="../assets//uh23.jpg"/>
          </a>
          <p id="qsr1">小米MIX2 全陶瓷尊享版</p>
          <p id="qsr2">全面屏2.0，Unibody 全陶瓷</p>
          <p id="qsr3"><pre>2999元 <p id="qsr2"><del>4699元</del></p></pre></p>
        </div>
        <a href="https://www.mi.com/a/h/6450.html?client_id=180100041086&masid=17409.0408">
          <img align="center" width="95%" height="150px" style="position:relative;bottom:2380px" src="../assets//fen2.jpg"/>
        </a>
      </div>
      <div id="houapp">
        <p style="font-size:20px;color:#303133;position:relative;bottom:2370px;right:600px">家电</p>
        <div id="hsaldpdn2">
          <p id="hsaldpdn2-button">电视影音</p>
          <div id="hsaldpdn21">
            <p id="uhr">减400元</p>
            <img src="../assets//houapp211.png"/>
            <el-tooltip placement="bottom">
              <div slot="content">可以，不错，看周星驰更清楚了<br/>来自于 海航CPA 的评价</div>
              <el-button style="background-color: rgb(162, 190, 233);border:none">小米电视4A 55英寸</el-button>
            </el-tooltip>
            <p id="qsr2">4k高清HDR/真四核64位高性能处理器</p>
            <p id="qsr3"><pre>2399元 <p id="qsr2"><del>2799元</del></p></pre></p>
          </div>
          <div id="hsaldpdn22">
            <p id="uhr">减300元</p>
            <img src="../assets//houapp212.jpg"/>
            <el-tooltip placement="bottom">
              <div slot="content">一直信赖小米电视，非常好很喜欢<br/>来自于 情为何物 的评价</div>
              <el-button style="background-color: rgb(162, 190, 233);border:none">小米电视4 55英寸</el-button>
            </el-tooltip>
            <p id="qsr2">4.9mm极超薄机身/2GB+8GB 大内...</p>
            <p id="qsr3"><pre>3699元 <p id="qsr2"><del>3999元</del></p></pre></p>
          </div>
          <div id="hsaldpdn23">
            <p id="uhr">减100元</p>
            <img src="../assets//houapp213.jpg"/>
            <el-tooltip placement="bottom">
              <div slot="content">小米同学，你真是不错啊<br/>来自于 5211314 的评价</div>
              <el-button style="background-color: rgb(162, 190, 233);border:none">小米电视4A 32英寸</el-button>
            </el-tooltip>
            <p id="qsr2">64位四核处理器/1GB+4GB大内存</p>
            <p id="qsr3"><pre>899元 <p id="qsr2"><del>999元</del></p></pre></p>
          </div>
          <div id="hsaldpdn24">
            <p id="uhr">减800元</p>
            <img src="../assets//houapp214.png"/>
            <p id="qsr1">小米电视4A 65英寸</p>
            <p id="qsr2">4k超高清屏/真四核64位高性能处理器</p>
            <p id="qsr3"><pre>3699元 <p id="qsr2"><del>4499元</del></p></pre></p>
          </div>
          <div id="hsaldpdn25">
            <p id="uhr">减300元</p>
            <img src="../assets//houapp222.png"/>
            <p id="qsr1">小米电视4C 43英寸</p>
            <p id="qsr2">人工智能/全高清屏幕/大内存</p>
            <p id="qsr3"><pre>1499元 <p id="qsr2"><del>1799元</del></p></pre></p>
          </div>
          <div id="hsaldpdn26">
            <p id="uhr">减50元</p>
            <img src="../assets//houapp223.jpg"/>
            <p id="qsr1">小米盒子3 增强版</p>
            <p id="qsr2">高端/4K/网络机顶盒</p>
            <p id="qsr3"><pre>399元 <p id="qsr2"><del>499元</del></p></pre></p>
          </div>
        </div>
        <div id="hsaldpdn1">
          <button id="hsaldpdn1-button">热门</button>
          <div id="hsaldpdn1-content">
            <div id="hsaldpdn11">
              <p id="uhr">减200元</p>
              <img src="../assets//houapp113.jpg"/>
              <p id="qsr1">13.3''小米笔记本Air i5 8G 256G...</p>
              <p id="qsr2">全金属超薄机身搭配独显</p>
              <p id="qsr3"><pre>5199元 <p id="qsr2"><del>5399元</del></p></pre></p>
            </div>
            <div id="hsaldpdn12">
              <img src="../assets//houapp114.jpg"/>
              <p id="qsr1">15.6''小米笔记本Pro i7 16G MX...</p>
              <p id="qsr2">性能更强悍的专业笔记本</p>
              <p id="qsr3">6999元</p>
            </div>
            <div id="hsaldpdn13">
              <p id="uhr">享8折</p>
              <img src="../assets//houapp121.jpg"/>
              <p id="qsr1">米家空气净化器Pro</p>
              <p id="qsr2">OLED显示屏幕/激光颗粒物传感器</p>
              <p id="qsr3"><pre>1199元 <p id="qsr2"><del>1499元</del></p></pre></p>
            </div>
            <div id="hsaldpdn14">
              <img src="../assets/houapp122.jpg"/>
              <p id="qsr1">米家电水壶 白色</p>
              <p id="qsr2">一杯水，是一家人的安心</p>
              <p id="qsr3">79元</p>
              <p id="qsr2"><del>99元</del></p>
            </div>
            <div id="hsaldpdn15">
              <p id="qsr4">新品</p>
              <img src="../assets//houapp123.png"/>
              <p id="qsr1">米家LED吸顶灯</p>
              <p id="qsr2">用光线，还原理想生活</p>
              <p id="qsr3">399元</p>
            </div>
          </div>
        </div>
        <div id="hsaldpdn3">
          <button id="hsaldpdn3-button">电脑</button>
          <div id="hsaldpdn3-content">
            <div id="hsaldpdn31">
              <p id="qsr4">新品</p>
              <img src="../assets//houapp314.jpg"/>
              <p id="qsr1">小米笔记本Air 12.5英寸</p>
              <p id="qsr2">更轻更薄，像杂志一样随身携带</p>
              <p id="qsr3">4999元</p>
            </div>
            <div id="hsaldpdn32">
              <img src="../assets//houapp313.jpg"/>
              <p id="qsr1">小米笔记本Air 13.3英寸</p>
              <p id="qsr2">Intel酷睿i5 处理器 独立显卡</p>
              <p id="qsr3"><pre>3699元 <p id="qsr2"><del>4499元</del></p></pre></p>
            </div>
            <div id="hsaldpdn33">
              <img src="../assets//houapp321.png"/>
              <p id="qsr1">小米无线鼠标</p>
              <p id="qsr2">耐脏亲肤涂层，人体工学设计</p>
              <p id="qsr3">69元</p>
            </div>
            <div id="hsaldpdn34">
              <img src="../assets//houapp322.jpg"/>
              <p id="qsr1">小米便携鼠标</p>
              <p id="qsr2">轻薄便携，铝合金外壳+ABS材质</p>
              <p id="qsr3">99元</p>
            </div>
            <div id="hsaldpdn35">
              <img src="../assets//houapp323.png"/>
              <p id="qsr1">悦米机械键盘</p>
              <p id="qsr2">铝合金机身，TTC红轴，87键</p>
              <p id="qsr3">289元</p>
            </div>
          </div>
        </div>
        <div id="hsaldpdn4">
          <button id="hsaldpdn4-button">家具</button>
          <div id="hsaldpdn4-content">
            <div id="hsaldpdn41">
              <p id="qsr4">新品</p>
              <img src="../assets//houapp412.jpg"/>
              <p id="qsr1">小米随身手电筒</p>
              <p id="qsr2">11挡调光，随心而亮</p>
              <p id="qsr3">79元</p>
            </div>
            <div id="hsaldpdn42">
              <p id="uhr">减100元</p>
              <img src="../assets//houapp413.jpg"/>
              <p id="qsr1">米家扫地机器人</p>
              <p id="qsr2">智能路径规划，扫得干净扫得快</p>
              <p id="qsr3"><pre>1599元 <p id="qsr2"><del>1699元</del></p></pre></p>
            </div>
            <div id="hsaldpdn43">
              <p id="uhr">减50元</p>
              <img src="../assets//houapp421.jpg"/>
              <p id="qsr1">米家压力IH电饭煲</p>
              <p id="qsr2">智能烹饪，灰铸铁粉体涂层内胆</p>
              <p id="qsr3"><pre>949元 <p id="qsr2"><del>999元</del></p></pre></p>
            </div>
            <div id="hsaldpdn44">
              <p id="uhr">减4元</p>
              <img src="../assets//houapp422.jpg"/>
              <p id="qsr1">飞利浦智睿球灯泡</p>
              <p id="qsr2">自由调节亮度，WiFi随时操控</p>
              <p id="qsr3"><pre>45元 <p id="qsr2"><del>49元</del></p></pre></p>
            </div>
            <div id="hsaldpdn45">
              <p id="uhr">减10元</p>
              <img src="../assets//hpouapp423.jpg"/>
              <p id="qsr1">米家LED智能台灯</p>
              <p id="qsr2">无可视频闪，四种场景优化调光</p>
              <p id="qsr3"><pre>159元 <p id="qsr2"><del>169元</del></p></pre></p>
            </div>
          </div>
        </div>
        <img id="houappl1" src="../assets//houappl1.jpg"/>
        <img id="houappl2" src="../assets//houappl2.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    countdown () {
      const end = Date.parse(new Date('2018-10-01'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
    },
    toggleShow () {
      this.isShow = !this.isShow
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
      ],
      gridData: [{
        c1: 'Sinapore',
        c2: 'Malaysia',
        c3: 'Philippines'
      }, {
        c1: 'India',
        c2: 'Indonesia',
        c3: 'Global Home'
      }],
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      isShow: false,
      btnStyle: '🛒购物车'
    }
  },
  mounted () {
    this.countdown()
  },
  watch: {
    isShow (newVal) {
      newVal ? this.btnStyle = '购物车(0)' : this.btnStyle = '🛒购物车'
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
#one {
  position: relative;
  bottom:29px;
  left:85%;
}
#sidebar {
  background-color: #606266;
  color:beige;
  width: 100px;
  height: 230px;
  margin-left: 30px;
  margin-top: 200px;
  padding-top: 35px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 35px;
  list-style: none;
}
#block {
  height: 340px;
  width: 80%;
  position: relative;
  left: 210px;
  bottom: 315px;
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
#quick-shop {
  color:black;
  position: relative;
  bottom: 800px;
  right: 520px;
}
#qsltop {
  color: red;
  position: relative;
  bottom: 980px;
  right: 520px;
}
#qslmiddle {
  color: rgba(6, 9, 17, 0.404);
  font-size: 10px;
  position: relative;
  bottom: 980px;
  right: 520px;
}
#qslbottom {
  color: black;
  position: relative;
  bottom: 980px;
  right: 520px;
}
#quick-shop1 {
  background-color:#EBEEF5;
  width: 250px;
  height :260px;
  position: relative;
  bottom: 1170px;
  left: 290px;
}
#quick-shop2 {
  background-color: #EBEEF5;
  width: 250px;
  height :260px;
  position: relative;
  bottom: 1430px;
  left:550px;
}
#quick-shop3 {
  background-color: #EBEEF5;
  width: 250px;
  height :260px;
  position: relative;
  bottom: 1690px;
  left: 810px;
}
#quick-shop4 {
  background-color: #EBEEF5;
  width: 250px;
  height :260px;
  position: relative;
  bottom: 1950px;
  left: 1070px;
}
#qsr1 {
  color: #303133;
  font-size: 15px;
}
#qsr2 {
  color:#606266;
  font-size: 12px;
}
#qsr3 {
  color:rgb(204, 109, 46);
  font-size: 15px;
}
#qsr4{
  background-color: aquamarine;
  width: 50px;
  margin-left: 110px;
}
#uhr {
  color: white;
  background-color: red;
  width: 70px;
  height: 18px;
  font-size: 15px;
  margin-left: 100px;
}
#uhr11 {
  width: 300px;
  height: 390px;
  background-color: white;
  position: relative;
  left:350px;
  bottom: 845px;
}
#uhr12 {
  width: 300px;
  height: 390px;
  background-color: white;
  position: relative;
  left: 700px;
  bottom: 1235px;
}
#uhr13 {
  width: 300px;
  height: 390px;
  background-color: white;
  position: relative;
  left: 1050px;
  bottom: 1625px;
}
#uhr21 {
  width: 300px;
  height: 390px;
  background-color: white;
  position: relative;
  left: 350px;
  bottom: 1625px;
}
#uhr22 {
  width: 300px;
  height: 390px;
  background-color: white;
  position: relative;
  left: 700px;
  bottom: 2030px;
}
#uhr23 {
  width: 300px;
  height: 390px;
  background-color: white;
  position: relative;
  left: 1050px;
  bottom: 2435px;
}
#SR {
  position: relative;
  bottom: 67px;
  left: 350px;
}
#dpd1 {
  color: orange;
  border: orange;
  background-color: white;
  border: 1px;
  width: 50px;
  height: 18px;
  font-size: 15px;
  margin-left: 80px;
  margin-bottom: 8px;
  margin-bottom: 20px;
}
#dpd2 {
  color: black;
  font-size: 12px;
  margin-left: 55px;
  margin-top: 10px;
}
#dpd3 {
  color: orange;
  font-size: 12px;
  margin-left: 55px;
}
#houappl1 {
  width: 250px;
  height: 350px;
  position: relative;
  bottom: 4510px;
  right: 388px;
}
#houappl2 {
  width: 250px;
  height: 350px;
  position: relative;
  bottom: 4935px;
  right: 628px;
}
#hsaldpdn1 {
  background-color: #F2F6FC;
  width: 80px;
  height:40px;
  position: relative;
  bottom: 4879px;
  left: 932px;
}
#hsaldpdn3 {
  background-color: #F2F6FC;
  width: 80px;
  height:40px;
  position: relative;
  bottom: 4918px;
  left: 1110px;
}
#hsaldpdn4 {
  background-color: #F2F6FC;
  width: 80px;
  height:40px;
  position: relative;
  bottom: 4958px;
  left: 1190px;
}
#hsaldpdn1-button {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: orange;
  border-bottom-style: solid;
  outline: none;
  background-color: inherit;
  color: black;
  font-size: 15px;
  margin-right: 0px;
  position: relative;
}
#hsaldpdn2-button {
  border-bottom: orange;
  border-bottom-style: solid;
  outline: none;
  color: black;
  font-size: 15px;
  width: 62px;
  height: 22px;
  position: relative;
  bottom: 2423px;
  left: 1030px;
}
#hsaldpdn3-button {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: orange;
  border-bottom-style: solid;
  outline: none;
  background-color: inherit;
  color: black;
  font-size: 15px;
  position: relative;
}
#hsaldpdn4-button {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: orange;
  border-bottom-style: solid;
  outline: none;
  background-color: inherit;
  color: black;
  font-size: 15px;
  position: relative;
}
#hsaldpdn1:hover #hsaldpdn1-button {
  color: orange;
}
#hsaldpdn3:hover #hsaldpdn3-button {
  color: orange;
}
#hsaldpdn4:hover #hsaldpdn4-button {
  color: orange;
}
#hsaldpdn1-content {
  display: none;
  background-color: rgb(162, 190, 233);
  width: 929px;
  height: 750px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  position: relative;
  right: 582px;
  top: 14px;
}
#hsaldpdn3-content {
  display: none;
  background-color: rgb(162, 190, 233);
  width: 929px;
  height: 750px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  position: relative;
  right: 760px;
  top: 12px;
}
#hsaldpdn4-content {
  display: none;
  background-color: rgb(162, 190, 233);
  width: 929px;
  height: 750px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  position: relative;
  right: 840px;
  top: 12px;
}
#hsaldpdn1:hover #hsaldpdn1-content {
  display: block;
}
#hsaldpdn3:hover #hsaldpdn3-content {
  display: block;
}
#hsaldpdn4:hover #hsaldpdn4-content {
  display: block;
}
#hsaldpdn21 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 2410px;
  left: 350px;
  background-color: rgb(162, 190, 233);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#hsaldpdn22 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 2815px;
  left: 680px;
  background-color: rgb(162, 190, 233);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#hsaldpdn23 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 3220px;
  left: 1010px;
  background-color: rgb(162, 190, 233);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#hsaldpdn24 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 3220px;
  left: 350px;
  background-color: rgb(162, 190, 233);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#hsaldpdn25 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 3625px;
  left: 680px;
  background-color: rgb(162, 190, 233);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#hsaldpdn26 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 4030px;
  left: 1010px;
  background-color: rgb(162, 190, 233);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
#hsaldpdn11 {
  height: 390px;
  width: 270px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn12 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 330px;
  bottom: 390px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn13 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 380px;
  left: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn14 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 660px;
  bottom: 1185px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn15 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 490px;
  bottom: 1175px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn31 {
  height: 390px;
  width: 270px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn32 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 330px;
  bottom: 390px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn33 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 370px;
  left: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn34 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 660px;
  bottom: 1170px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn35 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 490px;
  bottom: 1150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn41 {
  height: 390px;
  width: 270px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn42 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 330px;
  bottom: 405px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn43 {
  height: 390px;
  width: 270px;
  position: relative;
  bottom: 400px;
  left: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn44 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 660px;
  bottom: 1215px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}
#hsaldpdn45 {
  height: 390px;
  width: 270px;
  position: relative;
  left: 490px;
  bottom: 1210px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: rgb(124, 169, 236);
}

.dropdn {
  background-color: white;
}
.dropbtn {
  border: none;
  outline: none;
  background-color: inherit;
  color: black;
  font-size: 15px;
  position: relative;
  top: 106px;
  right: 430px;
}
.dropdn:hover .dropbtn {
  color: orange;
}
.dpd-content{
  display: none;
  background-color: white;
  height: 350px;
  width: 740px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  position: relative;
  top: 150px;
  left: 100px;
}
.dropdn:hover .dpd-content {
  display: block;
}
.dpd-content-left {
  width: 100px;
  height: 130px;
  position: relative;
  top: 45px;
  left: 25px;
}
.dpd-content-middle {
  width: 100px;
  height: 130px;
  position: relative;
  left: 245px;
  bottom: 135px;
}
.dpd-content-right {
  width: 100px;
  height: 130px;
  position: relative;
  bottom: 270px;
  left: 490px;
}
.half-down {
  background-color: #F2F6FC;
  height: 2800px;
  width: 100%;
  position: relative;
  bottom: 1850px;
}
.quick-shop-left{
  background-color: #E4E7ED;
  width: 250px;
  height :200px;
  position: relative;
  bottom: 790px;
  left: 30px;
}
.btn {
  position: relative;
  left: 1137px;
  bottom: 67px;
}
.sp {
  color: black;
  position: relative;
  left: 940px;
  bottom: 40px;
}
.min {
  height: 340px;
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
