<template>
  <el-row>
    <el-col :span="24" class="col_first">
      <a v-for="item in items" :key="item.nub" :href="item.href" class="wd">
        {{item.msg}}&ensp;|
      </a>
      <a href="last.href" class="wd">
        {{last.msg}}
      </a>
    </el-col>
    <el-col :span="24" class="col_scd">
      <a class="wd">
        Copyright © 1998 - 2018 Tencent. All Rights Reserved
      </a>
    </el-col>
    <el-col :span="24" class="col_scd">
      <a href="copyRight_first.href" class="wd">
        {{copyRight_first.text}}
      </a>
      <a href="copyRight_scd.href" class="wd">
        {{copyRight_scd.text}}
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      items:
      [
        {
          nub: 1,
          msg: '关于腾讯',
          href: 'https://www.qq.com/'
        },
        {
          nub: 2,
          msg: 'About Tencent',
          href: 'https://www.qq.com/'
        },
        {
          nub: 3,
          msg: '服务协议',
          href: 'https://www.qq.com/'
        },
        {
          nub: 4,
          msg: '隐私政策',
          href: 'https://www.qq.com/'
        },
        {
          nub: 5,
          msg: '开放平台',
          href: 'https://www.qq.com/'
        },
        {
          nub: 6,
          msg: '广告服务',
          href: 'https://www.qq.com/'
        },
        {
          nub: 7,
          msg: '腾讯招聘',
          href: 'https://www.qq.com/'
        },
        {
          nub: 8,
          msg: '腾讯公益',
          href: 'https://www.qq.com/'
        },
        {
          nub: 9,
          msg: '客服中心',
          href: 'https://www.qq.com/'
        },
        {
          nub: 10,
          msg: '举报中心',
          href: 'https://www.qq.com/'
        }
      ],
      last:
      {
        msg: '网站导航',
        href: 'https://www.qq.com/'
      },
      copyRight_first:
      {
        text: '腾讯公司',
        href: 'https://www.qq.com/'
      },
      copyRight_scd:
      {
        text: '版权所有',
        href: 'https://www.qq.com/'
      }
    }
  }
}
</script>

<style scoped>
.col_first {
  padding-top: 50px;
  text-align: center;
}
.col_scd {
  padding-top: 10px;
  text-align: center;
}
.wd {
  text-decoration: none;
  color: rgb(119, 119, 119);
  font-size: 12px;
  text-align: center;
}
</style>
