<template>
      <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <div>
          <el-row>
            <a v-for="item in items" :key="item.nub">
              <a :href="item.href" target="_blank" class="w1">{{item.msg}}</a>&ensp;|&ensp;
            </a>
            <a href="http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1" target="_blank" class="w1">不良信息举报</a>&ensp;
          </el-row>
          <el-row class="w2">
            Copyright ©1996-2018 SINA Corporation, All Rights Reserved
          </el-row>
          <el-row class="goright">
              <a href="http://slide.sports.sina.com.cn/g_pl/slide_2_730_190668.html#p=1" target="_blank" class="w1 adjustX">隐私保护 新浪公司 版权所有 京ICP证000007</a>
          </el-row>
          <el-row class="goright2">
              <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1 adjust">客户服务热线：4006900000 违法和不良信息举报电话：010-62675637　举报邮箱：jubao@vip.sina.com</a>
          </el-row><br/>
          <el-row class="w2">
              京网文【2017】10231-1151号 &ensp;&ensp;互联网新闻信息服务许可
          </el-row>
          <el-row class="w2">
              国家药监局（京）-经营性-2014-0004&ensp;&ensp;京教研[2002]7号&ensp;&ensp;电信业务审批[2001]字第379号
          </el-row>
          <el-row class="w2">
              增值电信业务经营许可证B2-20090108&ensp;&ensp;电信与信息服务业务经营许可证000007号
          </el-row>
          <el-row class="w2">
              广播电视节目制作经营许可证（京）字第828号&ensp;甲测资字1100078 甲测资字1100078
          </el-row>
          <el-row class="w2">
              
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data () {
    return {
      items:
      [
        {
          nub: 1,
          msg: '新浪简介',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 2,
          msg: 'About Sina',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 3,
          msg: '广告服务',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 4,
          msg: '联系我们',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 5,
          msg: '诚聘英才',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 6,
          msg: '广告服务',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 7,
          msg: '网站律师',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 8,
          msg: 'SINA English',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 9,
          msg: '注册',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 10,
          msg: '隐私保护',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 11,
          msg: '联系方法',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 12,
          msg: '意见反馈',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        }
      ]
    }
  }
}
</script>

<style scoped>
.w1 {
  font-size: 13px;
  text-align: left;
  text-decoration:none;
}
.w2 {
  font-size: 13px;
  text-align: center;
  line-height: 20px;
  text-decoration:none;
}
.goright{
    padding-left:18px;
}
.goright2{
    padding-left:-30px;
}
</style>
