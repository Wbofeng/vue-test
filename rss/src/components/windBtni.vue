<template>
    <el-button class='btn'>
        <el-row>
            <el-col :span="2">
                <img :src="item.img">
            </el-col>
            <el-col :span="18">
                <p class='title'>{{ item.title }}</p>
            </el-col>
            <el-col :span="2">
                <i class="el-icon-arrow-right"></i>
            </el-col>
        </el-row>
    </el-button>
</template>

<style scoped>
.btn {
    border-color: transparent;
    width: 100%;
    height: 40px;
    margin-left: 0;
    line-height: 20px
}

img {
    height: 100%;
    width: 15px
}

.title {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1em;
    color: black;
    text-align: left
}
</style>

<script>
    export default {
       props: [
           'item'
        ]
    }
</script>