<template>
    <el-button class='btn'>
        <el-row>
            <el-col :span="2">
                <img src='../assets/logo.png'>
            </el-col>
            <el-col :span="18">
                <span class='title'>{{ item.title }}</span>
            </el-col>
            <el-col :span="4">
                <span class='time'>{{ item.time }}</span>
            </el-col>
        </el-row>
    </el-button>
</template>
    
<style scoped>
.btn {
    border-color: transparent;
    width: 100%;
    height: 40px
}

img {
    height: 100%;
    width: 15px;
    border-radius: 5px;
    border-color: black;
    border-style: solid
}

.title {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1em;
    color: black
}

.time {
    color: #aaa;
    font-size: 1em
}
</style>

<script>
export default {
    props: [
        'item'
    ]
}
</script>