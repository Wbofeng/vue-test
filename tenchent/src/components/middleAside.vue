<template>
<el-row>
  <el-col :span="8" :offset="5">
  <el-tabs v-model="activeName" @tab-click="handleClick" class="word">
    <el-tab-pane label="要闻" name="first" class="word1">
      <ul>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="河北新闻" name="second" class="word1">
      <ul>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：</a><br>
            <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：</a>
      </ul>
    </el-tab-pane>
  </el-tabs>
  </el-col>
  <el-col :span="11" :offset="0" class="wd">
    <a href="https://news.qq.com/a/20180805/008163.htm" class="word3">今日话题</a>
    <img src="../assets/空白2.png" class="pictureW" stretch>
    <a href="https://news.qq.com/a/20180805/008163.htm" class="word3"><img src="../assets/时光蓝画轴.png" class="pictureBlue" stretch></a>
    <ul>
      <a href="https://news.qq.com/a/20180805/008163.htm" class="word2">燃！各军集结：使命不怠 百炼成军</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a><br>
      <a href="https://news.qq.com/a/20180805/008163.htm" class="word2"> 燃！各军集结：使命不怠 百炼成军</a>
    </ul>
  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.wd {
  line-height: 20px;
  height: 227px;
}
.word {
  line-height: 0px;
  height: 227px;
}
.word1 {
  line-height: 20px;
}
.word2 {
  line-height: 0px;
  height: 60px;
}
.word3 {
  line-height: 40px;
  height: 60px;
}
.pictureBlue{
  line-height: 40px;
  height: 30px;
  width: 150px;
}
.pictureW{
  line-height: 0px;
  height: 30px;
  width: 50%;
}
h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000201;
}
</style>
