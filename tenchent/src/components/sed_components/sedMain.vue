<template>
  <div>
    <el-row>
      <el-col :span="2" :offset="2">
        <br>
        <el-row>
          <el-col :span="6" :offset="2" class="hr"><hr></el-col>
          <el-col :span="8" class="wd1">{{year}}</el-col>
          <el-col :span="6" class="hr"><hr></el-col>
        </el-row>
        <br>
        <el-row class="wd2">
          <el-col :span="24">
            {{month}}/{{day}}
          </el-col>
        </el-row>
        <br>
        <el-cow>
          <el-col :span="24" class="w3">
            {{hour}}:{{min}}
          </el-col>
        </el-cow>
        <br><br><br><br>
        <el-row>
          <el-col :span="24" class="w3">
            光明网
          </el-col>
        </el-row>
        <br><br><br><br><br><br><br><br>
        <el-row>
          <el-col :span="6" :offset="2" class="hr"><hr></el-col>
          <el-col :span="7" class="wd4">分享</el-col>
          <el-col :span="6" class="hr"><hr></el-col>
        </el-row>
        <br><br>
        <el-row>
          <el-col :span="24" class="shape1">
            <a href="http://news.qq.com/">
              <i class="el-icon-star-off shape1"></i>
            </a>
          </el-col>
          <el-col :span="24" class="shape1">
            <a href="http://news.qq.com/">
              <i class="el-icon-share shape1"></i>
            </a>
          </el-col>
          <el-col :span="24" class="shape1">
            <a href="http://news.qq.com/">
              <i class="el-icon-info shape1"></i>
            </a>
          </el-col>
        </el-row>
        <br><br>
        <el-row>
          <el-col :span="6" :offset="2" class="hr"><hr></el-col>
          <el-col :span="7" class="wd4">评论</el-col>
          <el-col :span="6" class="hr"><hr></el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="shape2">
            <a href="http://news.qq.com/">
              <i class="el-icon-edit-outline shape2"></i>
            </a>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1">
        <hr class="long">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: '2018',
      month: '08',
      day: '10',
      hour: '09',
      min: '04'
    }
  }
}
</script>

<style scoped>
.el-main {
    background-color: rgb(239, 248, 115);
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 2000px;
}
.wd{
  text-align: center;
}
.wd1{
  padding-left: 2px;
  font-size: 16px;
}
.hr{
  padding-top: 3px;
}
.long{
  width: 1px;
  height: 750px;
  border-top: 1px solid rgba(252, 250, 250, 0.993);
  border-bottom: 1px solid rgb(255, 255, 255);
  border-right: 1px solid rgba(252, 250, 250, 0.993);
}
.wd2{
  font-size: 30px;
  text-align: center;
}
.w3 {
  text-align: center;
  font-size: 16px;
}
.wd4 {
  font-size: 16px;
  text-align: center;
}
.shape1{
  text-align: center;
  font-size: 30px;
  padding-right: 5px;
  color: rgba(180, 182, 184, 0.425)
}
.shape2{
  text-align: center;
  font-size: 60px;
  padding-right: 5px;
  color: rgba(180, 182, 184, 0.425)
}
</style>
