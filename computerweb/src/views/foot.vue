<template>
    <div class="foot">
      <div class="mainWarp">
        <div class="ulink clearfix">
          <div class="tlink">
              <div class="txt clearfix">
                <h2>常用链接</h2>
                <ul>
                  <li v-for="(link,index) in tlinks" :key="index">
                    <a :href="link.href">{{link.a}}</a>
                  </li>
                </ul>
              </div>
          </div>
          <div class="plink">
            <ul>
              <li v-for="(plink,index) in plinks" :key="index">
                <a :href="plink.href">
                    <img :src="plink.imgUrl">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copy">
        <div class="mainWarp">
          <div class="en">
            <a href="#">English</a>
          </div>
          <div class="contact">
            <img src="../../public/images/logo_1.svg">
            <div class="text">
              <span class="phone"><i class="el-icon-phone">010-62793001</i></span>
              <span class="email"><i class="el-icon-message">webmaster@tsinghua.edu.cn</i></span>
              <span class="where"><i class="el-icon-location">北京市海淀区清华大学</i></span>
            </div>
          </div>
          <div class="last">版权所有 © 清华大学<span>京公网安备 110402430053 号</span></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tlinks: [
        {
          a: '校园公交车',
          href: '#'
        },
        {
          a: '校园地图',
          href: '#'
        },
        {
          a: '教育基金会',
          href: '#'
        },
        {
          a: '校园公告',
          href: '#'
        },
        {
          a: '实用信息',
          href: '#'
        },
        {
          a: '校友总会',
          href: '#'
        }
      ],
      plinks: [
        {
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/images/fimg-1.png',
          href: '#'
        },
        {
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/images/fimg-2.jpg',
          href: '#'
        },
        {
          imgUrl: 'http://www.tsinghua.edu.cn/publish/thu2018/images/fimg-3.png',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style>
.last {
  height: 50px;
  vertical-align: bottom;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  color:#fff;
  opacity: 0.7;
}
.last span {
  margin-left: 40px !important;
  opacity: 0.5;
}
.contact img {
  width: 168px;
}
.en {
  float: right;
  font-size: 14px
}
.foot .mainWarp {
  top: -150px;
  position: relative;
}
.plink {
  width: 75%;
}
.foot .plink ul {
  margin-left: -44px;
  position: relative;
  top: 25px;
  left: -100px;
}
.plink a {
  margin-left: 44px
}
.foot .plink li {
  width: 33.33%;
  display: table-cell;
}
.txt {
  margin-left: 60px;
  padding-left: 40px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}
.foot {
  position: relative;
  background: url(http://www.tsinghua.edu.cn/publish/thu2018/images/footer.jpg) no-repeat bottom center;
  background-size: cover;
}
.mainWarp {
  margin: 0 auto;
  width: 1400px;
}
.tlink li a {
  color: #fff;
  font-size: 14px;
  line-height: 38px;
}
.tlink li {
  width: 50%;
  float: left;
}
.tlink ul {
  padding: 0;
}
.tlink {
  float: right;
  width: 25%;
  color: white;
}
.foot {
  padding-top: 200px;
  padding-bottom: -300px;
}
.foot .copy {
  background: rgba(0, 0, 0, 0.5);
  padding-top: 200px;
}
.foot .text {
  width: 431px;
  position: relative;
  top: -55px;
  left: -132px;
  color:#fff;
  opacity: 0.7;
}
.foot span {
  margin: 10px;
}
</style>
