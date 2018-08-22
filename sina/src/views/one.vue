<template>
    <el-container>
        <el-header>
           <oneHeader>
           </oneHeader>
        </el-header>
        <el-main>
           <oneMain>
           </oneMain>
        </el-main>
    </el-container>
</template>

<script>
import oneHeader from '../components/oneHeader.vue'
import oneMain   from '../components/oneMain.vue'
export default {
    components:{
        oneHeader,
        oneMain
    }
}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
    background-color: #1E90FF;
    color:rgb(255,255,255);
    text-align: center;
    line-height: 50px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>


