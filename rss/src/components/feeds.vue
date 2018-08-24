<template>
    <div>
        <div class="title">
            <img :src="activeItem.img" class="titleImg">
            <span class="webTitle">{{activeItem.title}}</span>
            <el-button class="followBtn" @click="change">Unfollow</el-button>
        </div>   
        <div v-for="(article, index) in articles" :key="index">
            <el-button class="articleBtn">
                <div class="btn">
                    <img :src="article.img" class="bigImg">
                    <div class="btnRight">
                        <h2>{{ article.title }}</h2>
                        <div></div>
                        <div class="icons">
                            <img src="../assets/bookmark.png" class="icon" @click="addBook(article)">
                            <img src="../assets/share.png" class="icon">
                            <span class="link">WEBSITE</span>
                            <img src="../assets/comment.png" class="icon">
                            <span class="link">COMMENTS</span>
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
    border-radius: 5px;
    margin-left: 1em
}

.link {
    color:#44bc75
}

.link:hover {
    text-decoration: underline
}

.time {
    margin-left: 1em;
    color: #aaa
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
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            articles: [
                {
                    img: require("../assets/feedsImg1.jpg"),
                    title: "Evolution of Android Security Updates",
                    time: "POSTED 4 HOURS AGO",
                    description: "the desciption of the passage",
                    id: 16
                },
                {
                    img: require("../assets/feedsImg2.jpg"),
                    title: "Streamlining the developer experience for instant games",
                    time: "POSTED 5 HOURS AGO",
                    description: "the desciption of the passage",
                    id: 17
                },
                {
                    img: require("../assets/feedsImg3.png"),
                    title: "Alternative input methods for Android TV",
                    time: "POSTED 6 HOURS AGO",
                    description: "the desciption of the passage",
                    id: 18
                },
                {
                    img: require("../assets/feedsImg4.png"),
                    title: "Streaming support spec for hearing aids on Android",
                    time: "POSTED 7 HOURS AGO",
                    description: "the desciption of the passage",
                    id: 19
                },
                {
                    img: require("../assets/feedsImg5.jpg"),
                    title: "Updating Wear OS Google Play Store policy to increase app quality",
                    time: "POSTED 8 HOURS AGO",
                    description: "the desciption of the passage",
                    id: 20
                }
            ]
        }
    },
    computed: {
        ...mapGetters([
            'activeItem'
        ])
    },
    methods: {
        addBook(article) {
            let elem = {}
            elem.img = article.img
            elem.title = article.title
            elem.time = article.time
            elem.id = article.id
            this.$store.commit('ADD_BOOK', elem)
        }
    }
}
</script>