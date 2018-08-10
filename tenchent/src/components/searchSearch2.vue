<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3">
        <el-button-group>
          <el-button type="primary" size="small" class="row-unify">新闻</el-button>
          <el-button type="primary" size="small" class="row-unify">图片</el-button>
          <el-button type="primary" size="small" class="row-unify">军事</el-button>
          <el-button type="primary" size="small" class="row-unify">视频</el-button>
          <el-button type="primary" size="small" class="row-unify">热剧</el-button>
          <el-button type="primary" size="small" class="row-unify">综艺</el-button>
          <el-button type="primary" size="small" class="row-unify">娱乐</el-button>
          <el-button type="primary" size="small" class="row-unify">明星</el-button>
          <el-button type="primary" size="small" class="row-unify">电影</el-button>
          <el-button type="primary" size="small" class="row-unify">汽车</el-button>
          <el-button type="primary" size="small" class="row-unify">车型</el-button>
          <el-button type="primary" size="small" class="row-unify">购物</el-button>
          <el-button type="primary" size="small" class="row-unify">科技</el-button>
          <el-button type="primary" size="small" class="row-unify">数码</el-button>
          <el-button type="primary" size="small" class="row-unify">手机</el-button>
          <el-button type="primary" size="small" class="row-unify">教育</el-button>
          <el-button type="primary" size="small" class="row-unify">课程</el-button>
          <el-button type="primary" size="small" class="row-unify">出国</el-button>
          <el-button type="primary" size="small" class="row-unify">公益</el-button>
          <el-button type="primary" size="small" class="row-unify">佛学</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="21" :offset="2">
        <el-button-group>
          <el-button type="primary" size="small" class="row-unify">财经</el-button>
          <el-button type="primary" size="small" class="row-unify">证券</el-button>
          <el-button type="primary" size="small" class="row-unify">理财</el-button>
          <el-button type="primary" size="small" class="row-unify">体育</el-button>
          <el-button type="primary" size="small" class="row-unify">NBA</el-button>
          <el-button type="primary" size="small" class="row-unify">英超</el-button>
          <el-button type="primary" size="small" class="row-unify">时尚</el-button>
          <el-button type="primary" size="small" class="row-unify">健康</el-button>
          <el-button type="primary" size="small" class="row-unify">育儿</el-button>
          <el-button type="primary" size="small" class="row-unify">房产</el-button>
          <el-button type="primary" size="small" class="row-unify">家居</el-button>
          <el-button type="primary" size="small" class="row-unify">家电</el-button>
          <el-button type="primary" size="small" class="row-unify">游戏</el-button>
          <el-button type="primary" size="small" class="row-unify">儿童</el-button>
          <el-button type="primary" size="small" class="row-unify">星座</el-button>
          <el-button type="primary" size="small" class="row-unify">教育</el-button>
          <el-button type="primary" size="small" class="row-unify">大家</el-button>
          <el-button type="primary" size="small" class="row-unify">文学</el-button>
          <el-button type="primary" size="small" class="row-unify">拍客</el-button>
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
      value: '选项1'
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
