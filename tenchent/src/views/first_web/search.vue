<template>
  <el-container>
    <el-header>
      <searchSearch>
      </searchSearch>
    </el-header>
    <el-main>
      <searchSearch2>
      </searchSearch2>
    </el-main>
  </el-container>
</template>

<script>
import searchSearch from '../../components/first_web/searchSearch.vue'
import searchSearch2 from '../../components/first_web/searchSearch2.vue'

export default{
  components: {
    searchSearch,
    searchSearch2
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: rgb(251, 253, 255);
  color: rgb(5, 5, 5);
  text-align: center;
}
.el-main {
  background-color: rgb(251, 253, 255);
  color: rgb(7, 7, 7);
  text-align: center;
  line-height: 25px;
}
</style>
