<template>
  <div>
    <el-row class="row">
      <el-col :span="3">
        <a href="https://www.qq.com/" target="_blank">
          <img src="../../assets/qq_logo.png" style="height: 40px">
        </a>
      </el-col>
      <el-col :span="5" class="compose">
        <a v-for="item in items" :key='item.nub' :href="item.msg" target="_blank" class="tab">
          {{item.message}}&emsp;
        </a>
      </el-col>
      <el-col :span="2">
        <el-dropdown class="drop">
          <span class="el-dropdown-link">
            <i class="el-icon-menu hover"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="menu">
            <el-row>
              <el-col :span="2">&ensp;</el-col>
              <el-col v-for="item in menus_fir" :key='item.nub' :span="4">
                <a :href="item.href" target="_blank">
                  <el-dropdown-item>
                    {{item.msg}}
                  </el-dropdown-item>
                </a>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="2">&ensp;&ensp;</el-col>
              <el-col v-for="item in menus_scd" :key='item.nub' :span="4">
                <a :href="item.href" target="_blank">
                  <el-dropdown-item>
                    {{item.msg}}
                  </el-dropdown-item>
                </a>
              </el-col>
            </el-row>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2" :offset="6">
        <a href="https://www.qq.com/" target="_blank">
          <i class="el-icon-location-outline weather">
            {{location}}
            {{temperature}}
            {{weather}}
          </i>
        </a>
      </el-col>
      <el-col :span="4" class="search_background">
        <el-col :span="21">
          <input v-model="newInput" class="search_content" placeholder=" 光明网">
        </el-col>
        <el-col :span="3">
          <a href="https://www.qq.com/" target="_blank">
            <button class="el-icon-search search_btn" href="https://www.qq.com/"></button>
          </a>
        </el-col>
      </el-col>
      <el-col :span="2" class="log_border">
        &emsp;
        <a href="https://www.qq.com/" target="_blank">
          <button class="log_btn" href="https://www.qq.com/">
            一键登录
          </button>
        </a>
      </el-col>
    </el-row>
    <hr class="hr">
  </div>
</template>

<script>
export default {
  data () {
    return {
      newInput: '',
      location: '保定市',
      temperature: '25°',
      weather: '多云',
      items:
      [
        {
          nub: 1,
          msg: 'http://news.qq.com/',
          message: '要闻'
        },
        {
          nub: 2,
          msg: 'http://news.qq.com/',
          message: '推荐'
        },
        {
          nub: 3,
          msg: 'http://news.qq.com/',
          message: '财经'
        },
        {
          nub: 4,
          msg: 'http://news.qq.com/',
          message: '娱乐'
        },
        {
          nub: 5,
          msg: 'http://news.qq.com/',
          message: '体育'
        },
        {
          nub: 6,
          msg: 'http://news.qq.com/',
          message: '时尚'
        }
      ],
      menus_fir:
      [
        {
          nub: 1,
          msg: '科技',
          href: 'http://news.qq.com/'
        },
        {
          nub: 2,
          msg: '游戏',
          href: 'http://news.qq.com/'
        },
        {
          nub: 3,
          msg: '数码',
          href: 'http://news.qq.com/'
        },
        {
          nub: 4,
          msg: '军事',
          href: 'http://news.qq.com/'
        },
        {
          nub: 5,
          msg: '社会',
          href: 'http://news.qq.com/'
        }
      ],
      menus_scd:
      [
        {
          nub: 1,
          msg: '房产',
          href: 'http://news.qq.com/'
        },
        {
          nub: 2,
          msg: '汽车',
          href: 'http://news.qq.com/'
        },
        {
          nub: 3,
          msg: '文化',
          href: 'http://news.qq.com/'
        },
        {
          nub: 4,
          msg: '教育',
          href: 'http://news.qq.com/'
        },
        {
          nub: 5,
          msg: '动漫',
          href: 'http://news.qq.com/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hr {
  width: 100%;
  border-top: 1px solid rgba(212, 212, 212, 0.993);
  border-bottom: 1px solid rgba(203, 205, 206, 0.623);
}
.log_border {
  padding: 3px 5px;
}
.log_btn {
  line-height: 24px;
  font-size: 13px;
  background-color: rgb(241, 243, 247);
  border: 1px solid rgb(96, 123, 247);
  color: rgb(96, 123, 247);
  border-radius: 5px;
}
.search_background {
  padding: 3px 0px;
  background-color: rgb(155, 158, 158);
  border: 2px solid rgb(155, 158, 158);
  border-radius:5px;
}
.search_content {
  width: 200px;
  font-size: 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 2px solid rgb(155, 158, 158);
  background-color:rgb(155, 158, 158);
}
.search_btn {
  height: 22px;
  background-color: rgb(155, 158, 158);
  border: 0.1px solid rgb(155, 158, 158);
}
.hover {
  padding: 10px 0px;
  font-size: 17px;
}
.compose {
  width: 19%
}
.menu {
  width: 430px;
}
.row {
  padding: 5px 20px;
}
.tab {
  line-height: 40px;
  text-decoration: none !important;
  color: black;
  font-size: 14px;
}
.weather {
  line-height: 40px;
  font-size: 12px;
  text-align: right;
}
.el-dropdown-item {
  text-decoration: none !important;
}

</style>
