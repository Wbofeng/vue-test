<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-button-group>
          <el-button v-for="item in line_1" :key="item.nub" type="primary" size="small" class="row-unify" :href="href">{{item.msg}}</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="21" :offset="2">
        <el-button-group>
          <el-button v-for="item in line_2" :key="item.nub" type="primary" size="small" class="row-unify" :href="href">{{item.msg}}</el-button>
          <el-select v-model="value"  placeholder="天气" size="small" class="row-unify2">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '天气'
      },
      {
        value: '选项2',
        label: '谷雨'
      },
      {
        value: '选项3',
        label: '城市'
      },
      {
        value: '选项4',
        label: '科普'
      },
      {
        value: '选项5',
        label: '德甲'
      },
      {
        value: '选项6',
        label: '美容'
      },
      {
        value: '选项7',
        label: '动漫'
      },
      {
        value: '选项8',
        label: '享看'
      },
      {
        value: '选项9',
        label: '港股'
      },
      {
        value: '选项10',
        label: '全部'
      }
      ],
      value: '选项1',
      line_1: [
        {
          nub: 1,
          msg: '新闻',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 2,
          msg: '图片',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 3,
          msg: '军事',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 4,
          msg: '视频',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 5,
          msg: '热剧',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 6,
          msg: '综艺',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 7,
          msg: '娱乐',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 9,
          msg: '明星',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 10,
          msg: '电影',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 11,
          msg: '汽车',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 12,
          msg: '车型',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 13,
          msg: '购物',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 14,
          msg: '科技',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 15,
          msg: '数码',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 17,
          msg: '手机',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 18,
          msg: '教育',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 19,
          msg: '课程',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 20,
          msg: '出国',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 21,
          msg: '公益',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 22,
          msg: '佛学',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        }
      ],
      line_2: [
        {
          nub: 1,
          msg: '财经',
          href: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 2,
          msg: '证券',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 3,
          msg: '理财',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 4,
          msg: '体育',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 5,
          msg: 'NBA',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 6,
          msg: '英超',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 7,
          msg: '时尚',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 9,
          msg: '健康',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 10,
          msg: '育儿',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 11,
          msg: '房产',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 12,
          msg: '家居',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 13,
          msg: '家电',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 14,
          msg: '游戏',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 15,
          msg: '儿童',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 17,
          msg: '星座',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 18,
          msg: '教育',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 19,
          msg: '大家',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 20,
          msg: '文学',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        },
        {
          nub: 21,
          msg: '拍客',
          herf: 'https://news.qq.com/a/20180805/008163.htm'
        }
      ]
    }
  }
}
</script>

<style>
.row-unify {
  width: 55px;
}
.row-unify2 {
  width: 116px;
}
</style>
