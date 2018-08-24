<template>
    <el-container>
        <el-aside class="aside"> 
            <div class="leftUp">
                <div class="headline">RSS</div>
                <el-menu :default-active="activeIndex" 
                         class="el-menu-demo" 
                         mode="horizontal" 
                >
                    <el-menu-item index="1" @click="count = 1">ALL FEEDS</el-menu-item>
                    <el-menu-item index="2" @click="count = 2">BOOKMARKS</el-menu-item>
                    <el-menu-item index="3" @click="count = 3">SUGGESTIONS</el-menu-item>
                </el-menu>
            </div>
            <div class="leftDown">
                <!--all feeds-->
                <div v-if="count == 1">
                    <router-link class="router" to="/recentAtcs">
                        <p class="subtitle">Recent Articles</p>
                    </router-link>
                    <wind-btn v-for="(recentAtc, index) in recentAtcs" :key="index" :item="recentAtc" @click.native="ViewAtc(recentAtc)">
                    </wind-btn>
                    <p class="subtitle">Feeds</p>
                    <wind-btni v-for="(feed, index) in feeds" :key="index" :item="feed" @click.native="ViewFeeds(feed)">
                    </wind-btni>
                </div>
                <!-- bookmarks -->
                <div v-show="count == 2">
                    <p class="subtitle">Bookmarks</p>
                    <div v-for="(bookmark, index) in bookmarks" :key="index">
                        <el-button class="leftBtn" @click="ViewBookmark(bookmark)">
                            <el-row>
                                <el-col :span="2">
                                    <img :src="bookmark.img" class="smallImg">
                                </el-col>
                                <el-col :span="16" class="bookmarkTitle">{{ bookmark.title }}</el-col>
                                <el-col :span="4">{{ bookmark.time }}</el-col>
                            </el-row>
                        </el-button>
                    </div>
                </div>
                <!-- suggestions -->
                <div v-show="count == 3">
                    <p class="subtitle">Suggested Feeds</p>
                    <div v-for="(suggestion, index) in suggestions" :key="index">
                        <el-button class="leftBtn" @click="ViewSuggestion(suggestion)">
                            <el-row>
                                <el-col :span="2">
                                    <img :src="suggestion.img" class="smallImg">
                                </el-col>
                                <el-col :span="16" class="sugTitle">{{ suggestion.title }}</el-col>
                                <el-col :span="4">
                                    <div class="clickable"
                                    :class="{ active: suggestion.isfollowed }" 
                                    @click.stop="follow(suggestion)"
                                    >FOLLOW</div>
                                </el-col>
                            </el-row>
                        </el-button>
                    </div>
                </div>
            </div>
        </el-aside>
        <el-main class="main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
    </el-container>
</template>

<style scoped>
.aside{
    width: 33%
}

.main {
    width: 66%
}

.leftUp {
    height: 100px
}

.leftDown {
    height: 400px
}

.el-menu-item {
    width: 33%;
    font-size: 11px;
    font-weight: 600;
    padding: 0
}

.headline {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    margin: 5px 0
}

.smallImg {
    height: 100%;
    width: 15px
}

.mediumImg {
    height: 100%;
    width: 20px;
    border-radius: 5px;
    border-style: solid
}

.bigImg {
    height: 100%;
    width: 30px;
    border-radius: 5px;
    border-style: solid
}

.leftBtn {
    width: 100%;
    height: 40px;
    border-color: transparent;
    line-height: 20px
}

.bookmarkTitle {
    overflow: hidden;
    text-overflow: ellipsis
}

.router {
    text-decoration: none;
}

.subtitle {
    text-align: left;
    font-weight: bold;
    font-size: 0.8em;
    margin-left: 1.5em
}

.followBtn {
    border-color: transparent;
    width: 80px;
    height: 30px;
    text-align: center;
    font-size: 10px
}

.sugTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left
}

.clickable {
    color: #44bc75;
    cursor: pointer;
    font-size: 80%;
    font-weight: 600;
    padding: .5em;
    text-transform: uppercase;
    display: inline-block;
    line-height: 1em;
    border-radius: 4px;
}

.clickable.active {
    background-color: #44bc75;
    color: #fff
}
</style>

<script>
import windBtn from '@/components/windBtn'
import windBtni from '@/components/windBtni'
import eventBus from '../router/eventBus.js'
import { mapGetters } from 'vuex'

export default {
    components: {
        windBtn,
        windBtni
    },
    data() {
        return {
            activeIndex: '1',
            count: 1,
            activeClass: 'background-color: #44bc75; color: #fff'
        }
    },
    created() {
        eventBus.$on('searchMark', (item) => {
            console.log('===')
            item.time = item.time.toLowerCase()
            let arr = item.time.split(/\s+/)
            item.time = arr[1] + " " + arr[2]
            let flag = true
            for(let i = 0; i < this.bookmarks.length; i++) {
                if(this.bookmarks[i].id === item.id) {
                    this.bookmarks.splice(i, 1)
                    flag = false
                }
            }
            if(flag) {
                this.bookmarks.unshift(item)
            }
            console.log(this.bookmarks, '----')
        })
    },
    methods: {
        ViewAtc(item) {
            this.$router.push({ path: `/recentAtc/${item.title}` })
            this.$store.commit('TRANS_ITEM', item)
        },
        ViewFeeds(feed) {
            this.$router.push({ path: `/feeds/${feed.title}` })
            this.$store.commit('TRANS_ITEM', feed)
        },
        ViewBookmark(item){
            this.$router.push({ path: `/bookmarks/${item.title}` })
            this.$store.commit('TRANS_ITEM', item)
        },
        ViewSuggestion(sug) {
            this.$router.push({ path: `/suggestions/${sug.title}` })
            this.$store.commit('TRANS_ITEM', sug)
        },
        follow(sug) {
            sug.isfollowed = !sug.isfollowed
            this.$store.commit('FOLLOW_FEED', sug)
        }
    },
    computed: {
        ...mapGetters([
            'recentAtcs',
            'suggestions',
            'feeds',
            'activeItem',
            'bookmarks'
        ])
    }
}
</script>
