<template>
    <div>
        <div class="title">
            <img src="../assets/logo.png" class="titleImg">
            <span class="webTitle">Website Name</span>
            <el-button class="followBtn">Unfollow</el-button>
        </div>   
        <div v-for="(article, index) in articles" :key="index">
            <el-button class="articleBtn">
                <div class="btn">
                    <img src="../assets/logo.png" class="bigImg">
                    <div class="btnRight">
                        <h2>{{ article.title }}</h2>
                        <div class="icons">
                            <img src="../assets/logo.png" class="icon">
                            <div>
                                <img src="../assets/logo.png" class="icon">
                                <span class="">WEBSITE</span>
                            </div>
                            <div>
                                <img src="../assets/logo.png" class="icon">
                                <span>COMMENTS</span>
                            </div>
                            <span class="time">{{ article.time }}</span>
                        </div>
                        <h3>{{ article.description }}</h3>
                    </div>
                </div>
            </el-button>
        </div>
    </div>
</template>

<style scoped>
.title {
    margin: 1.7em 0;
    display: flex;
    align-items: center
}

.titleImg {
    width: 50px;
    height: 50px;
    margin-right: 1em;
    border:black 1px;
    border-radius: 8px
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
    margin-left: 1em
}

h3{
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
                articles: [
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