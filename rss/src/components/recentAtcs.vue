<template>
    <div>
        <h1>Articles</h1>
        <div v-for="(suggestion, index) in suggestions" :key="index">
            <el-button class="articleBtn">
                <div class="btn">
                    <img src="../assets/logo.png" class="bigImg">
                    <div class="btnRight">
                        <h2>{{ suggestion.title }}</h2>
                        <div class="icons">
                            <img src="../assets/logo.png" class="icon">
                            <div>
                                <img src="../assets/logo.png" class="icon">
                                <span class="">WEBSITE</span>
                            </div>
                            <span class="time">{{ suggestion.time }}</span>
                        </div>
                        <h3>{{ suggestion.description }}</h3>
                    </div>
                </div>
            </el-button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: left;

}
.title {
    margin: 1.7em 0;
    display: flex;
    align-items: center
}
.followBtn {
    font-size: 0.6em;
    margin-left: auto;
    margin-right: 0
}
.webTitle {
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px
}
.articleBtn {
    width:100%;
    border-color: transparent
}
.btn {
    width: 100%;
    display: flex
}
.bigImg {
    border: black solid;
    border-radius: 8px;
    height: 75px;
    width: 75px;
    margin-right: 2em
}
.btnRight {
    text-align: left
}
h2 {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.5em;
    margin: 0
}
.icons {
    margin-bottom: 1em;
    margin-top: 1em;
    display: flex;
    align-items: center
}
.icon {
    width: 15px;
    height: 15px;
    border: black solid;
    border-radius: 5px;
    margin-left: 1em
}
.time {
    margin-left: 1em;
    color: #aaa
}
h3 {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    font-size: 1.2em
}
</style>

<script>
    export default {
        data() {
            return {
                suggestions: [
                    {
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    }
                ]
            }
        }
    }
</script>
