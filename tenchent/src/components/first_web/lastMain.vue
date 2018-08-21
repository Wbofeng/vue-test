<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <div>
          <el-row>
            <a v-for="item in fis_line" :key="item.nub">
              <a :href="item.href" target="_blank" class="w1">{{item.msg}}</a>&ensp;|&ensp;
            </a>
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">版权所有</a>&ensp;
          </el-row>
          <el-row>
            <a v-for="item in scd_line" :key="item.nub">
              <a :href="item.href" target="_blank" class="w1">{{item.msg}}</a>&ensp;|&ensp;
            </a>
            <a href="https://news.qq.com/a/20180805/008163.htm" target="_blank" class="w1">广东省通管局</a>&ensp;
          </el-row>
          <el-row class="w2">
            <a v-for="item in thr_line" :key="item.nub">
              <a>{{item.text}}</a>
              <a :href="item.href" target="_blank" class="w1">{{item.msg}}</a>&ensp;
            </a>
          </el-row>
          <el-row class="w2">
            <a v-for="item in four_line" :key="item.nub">
              <a>{{item.text}}&ensp;</a>
              <a :href="item.href" target="_blank" class="w1">{{item.msg}}</a>&ensp;
            </a>
          </el-row>
          <el-row class="w2">
            Copyright 1998 - 2018 Tencent. All Rights Reserved
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
      fis_line:
      [
        {
          nub: 1,
          msg: '关于腾讯',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 2,
          msg: 'About Tencent',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 3,
          msg: '服务协议',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 4,
          msg: '隐私政策',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 5,
          msg: '开放平台',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 6,
          msg: '广告服务',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 7,
          msg: '商务洽谈',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 8,
          msg: '腾讯招聘',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 9,
          msg: '腾讯公益',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 10,
          msg: '客服中心',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 11,
          msg: '网站导航',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 12,
          msg: '客户端下载',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        }
      ],
      scd_line:
      [
        {
          nub: 1,
          msg: '深圳举报中心',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 2,
          msg: '深圳公安局',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 3,
          msg: '抵制违法广告承诺书',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 4,
          msg: '阳光·绿色网络工程',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 5,
          msg: '版权保护投诉指引',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        }
      ],
      thr_line:
      [
        {
          nub: 1,
          msg: '广东省通管局',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 2,
          msg: '粤网文[2017]6138-1456号',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 3,
          msg: '新出网证（粤）字010号',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 4,
          msg: '网络视听许可证1904073号',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 5,
          msg: '粤B2-20090059',
          href: 'https://news.qq.com/a/20180805/008163.htm',
          text: '增值电信业务经营许可证:'
        },
        {
          nub: 6,
          msg: ' B2-20090028',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        }
      ],
      four_line:
      [
        {
          nub: 1,
          msg: '新闻信息服务许可证',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 2,
          msg: '粤府新函[2001]87号',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 3,
          msg: '粤公网安备 44030002000001号',
          href: 'https://news.qq.com/a/20180805/008163.htm',
          text: '违法和不良信息举报电话：0755-83765566-9'
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
</style>
