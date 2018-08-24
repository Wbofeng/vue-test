<template>
    <div>
        <h1>Articles</h1>
        <div v-for="(atc, index) in atcs" :key="index">
            <el-button class="articleBtn">
                <div class="btn">
                    <img :src="atc.img" class="bigImg">
                    <div class="point"></div>
                    <div class="btnRight">
                        <h2>{{ atc.title }}</h2>
                        <div class="icons">
                            <img src="../assets/bookmark.png" @click="mark(atc)">
                            <div class="website">
                                <img src="../assets/share.png">
                                <span class="link">WEBSITE</span>
                            </div>
                            <span class="time">{{ atc.time }}</span>
                        </div>
                        <h3>{{ atc.description }}</h3>
                    </div>
                </div>
            </el-button>
        </div>
    </div>
</template>

<style scoped>
h1, .btnRight {
    text-align: left
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
    width: 75px
}

.point {
    border-radius: 50%;
    background-color: #44bc75;
    width: 0.5em;
    height: 0.5em;
    margin-right: 2em
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
    align-items: center;
    line-height: 1.5em
}

.website {
    line-height: 1.5em
}

img {
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

h3 {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
    font-size: 1.2em
}
</style>

<script>
import eventBus from '../router/eventBus.js'

export default {
    data() {
        return {
            atcs: [
                {   
                    img: require("../assets/atcsImg1.jpg"),
                    title: "passage title1",
                    time: "POSTED 1 HOURS AGO",
                    description: "the desciption of the passage1",
                    id: 1
                },
                {
                    img: require("../assets/atcsImg2.jpg"),
                    title: "passage title2",
                    time: "POSTED 2 HOURS AGO",
                    description: "the desciption of the passage2",
                    id: 2
                },
                {
                    img: require("../assets/atcsImg3.jpg"),
                    title: "passage title3",
                    time: "POSTED 3 HOURS AGO",
                    description: "the desciption of the passage3",
                    id: 3
                },
                {
                    img: require("../assets/atcsImg4.jpg"),
                    title: "passage title4",
                    time: "POSTED 4 HOURS AGO",
                    description: "the desciption of the passage4",
                    id: 4
                },
                {
                    img: require("../assets/atcsImg5.jpg"),
                    title: "passage title5",
                    time: "POSTED 5 HOURS AGO",
                    description: "the desciption of the passage5",
                    id: 5
                }
            ]
        }
    },
    methods: {
        mark(elem) {
            let { img, title, time, id } = elem
            let item = { img, title, time, id }
            console.log(item)
            eventBus.$emit('searchMark', item)
        }          
    }
}
</script>
