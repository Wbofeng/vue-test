<template>
    <div>
        <div class="title">
            <img :src="website.img" class="webImg">
            <span class="webTitle">{{ website.title }}</span>
            <el-button class="followBtn" @click="followFeed(website)">{{ followState }}</el-button>
        </div>
        <div v-for="(item, index) in items" :key="index">
            <el-button class="articleBtn">
                <div class="btn">
                    <img :src="item.img" class="bigImg">
                    <div class="btnRight">
                        <h2>{{ item.title }}</h2>
                        <div class="icons">
                            <img src="../assets/bookmark.png" class="icon">
                            <img src="../assets/share.png" class="icon">
                            <span class="link">WEBSITE</span>
                            <img src='../assets/comment.png' class="icon">
                            <span class="link">COMMENTS</span>
                            <span class="time">{{ item.time }}</span>
                        </div>
                        <h3>{{ item.description }}</h3>
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

.webImg {
    border-radius: 5px;
    height: 65px;
    width: 65px;
    border: black solid

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
    color: #44bc75;
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
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            followState: "FOLLOW",
            items: [
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "POSTED 4 HOURS AGO",
                        description: "the desciption of the passage"
                    }
                ]
        }
    },
    computed: {
        ...mapGetters([
            'activeItem'
        ]),
        website() {
            return this.activeItem
        }
    }
}
</script>