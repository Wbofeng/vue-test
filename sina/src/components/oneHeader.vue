<template>
    <div class="margin-top: 15px;">
        <el-row>
            <el-col :span="7" :offset="6" class="rightXX">
                <el-input v-model="input1" placeholder="大家正在搜，办事大厅冷热有别" class="Iselect" size="small">
                   <el-select v-model="select" class="ing-select" placeholder="新闻" slot="prepend" trigger="hover">
                      <el-option label="新闻" value="2"></el-option>
                      <el-option label="微博" value="3"></el-option>
                      <el-option label="图片" value="4"></el-option>
                      <el-option label="博客" value="5"></el-option>
                      <el-option label="视频" value="6"></el-option>
                      <el-option label="网页" value="7"></el-option>
                      <el-option label="百科" value="8"></el-option>
                    </el-select>
                  </el-input>
                 </el-col>
             <el-col :span="1" :offset="0" class="left1">
                 <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
             </el-col>
             <el-col :span="9" :offest="2">
                 <i class="el-icon-location"></i>
                 <i class="el-icon-share"></i>
                 <i class="el-icon-circle-close"></i>
             </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    date(){
    return{
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      select: '',
      value: ''
    }
    }
}
</script>
<style scoped>
.Iselect{
  width: 379px !important;
  line-height: 0px !important;
}
.ing-select{
  background-color: rgb(251, 253, 255);
  width: 80px;
  line-height: 0px !important;
}
.oneHeaderPng1{
    width: 20%;
}
.left1{
    padding-left:-40px;
}
.rightXX{
    padding-left:20px;
}
</style>
