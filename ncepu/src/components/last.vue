<template>
<div>
<el-container>
  <el-aside class="number1" width="800px">
    <el-container>
        <el-header class="li1">Header</el-header>
            <el-container>
            <el-aside class="number2" width="200px">Aside</el-aside>
            <el-main class="pass2">Main</el-main>
            </el-container>
    </el-container>
  </el-aside>
    <el-main class="pass1">
        <el-container>
            <el-header class="li2">Header</el-header>
                <el-container>
                <el-aside class="number3" width="200px">Aside</el-aside>
                <el-main class="pass3">Main</el-main>
                </el-container>
        </el-container>
    </el-main>
</el-container>
</div>
</template>
<style scoped>
.el-aside.number1 {
    background-color: #D3DCE6;
    color: #333;
    height: 500px;
  }
  .el-main.pass1{
    background-color: #E9EEF3;
    color: #333;
    height: 500px;
  }
</style>
