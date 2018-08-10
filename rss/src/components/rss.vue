<template>
    <el-container>
        <el-aside class="aside"> 
            <div class="leftUp">
                <div class="headline">RSS</div>
                <el-menu :default-active="activeIndex" 
                         class="el-menu-demo" 
                         mode="horizontal" 
                         @select="handleSelect"
                >
                    <el-menu-item index="1" @click="count = 1">ALL FEEDS</el-menu-item>
                    <el-menu-item index="2" @click="count = 2">BOOKMARKS</el-menu-item>
                    <el-menu-item index="3" @click="count = 3">SUGGESTIONS</el-menu-item>
                </el-menu>
            </div>
            <div class="leftDown">
                <!--all feeds-->
                <div v-if="count == 1">
                    <router-link to="/rss/recentAtcs">
                        <el-button class="leftBtn">Recent Articles</el-button>
                    </router-link>
                    <div v-for="(recentAtc, index) in recentAtcs" :key="index">
                        <el-button class="leftBtn">
                            <router-link to="/rss/recentAtc">
                                <el-row>
                                    <el-col :span="2">
                                        <img src="../assets/logo.png" class="smallImg">
                                    </el-col>
                                    <el-col :span="16">{{ recentAtc.title }}</el-col>
                                    <el-col :span="4">{{ recentAtc.time }}</el-col>
                                </el-row>
                            </router-link>
                        </el-button>
                    </div>
                    <p>Feeds</p>
                    <div v-for="(feed, index) in feeds" :key="index">
                        <el-button class="leftBtn">
                            <router-link to="/rss/feeds">
                                <el-row>
                                    <el-col :span="2">
                                        <img src="../assets/logo.png" class="smallImg">
                                    </el-col>
                                    <el-col :span="16">{{feed.title}}</el-col>
                                    <el-col :span="1">
                                        <i class="el-icon-arrow-right"></i>
                                    </el-col>
                                </el-row>
                            </router-link>
                        </el-button>
                    </div>
                </div>
                <!-- bookmarks -->
                <div v-show="count == 2">
                    <div>Bookmarks</div>
                    <div v-for="(bookmark, index) in bookmarks" :key="index">
                        <el-button class="leftBtn">
                            <router-link to="/rss/bookmarks">
                                <el-row>
                                    <el-col :span="2">
                                        <img src="../assets/logo.png" class="smallImg">
                                    </el-col>
                                    <el-col :span="16">{{ bookmark.title }}</el-col>
                                    <el-col :span="4">{{ bookmark.time }}</el-col>
                                </el-row>
                            </router-link>
                        </el-button>
                    </div>
                </div>
                <!-- suggestions -->
                <div v-show="count == 3">
                    <div>Suggested Feeds</div>
                    <div v-for="(suggestion, index) in suggestions" :key="index">
                        <el-button class="leftBtn">
                            <router-link to="/rss/suggestions">
                                    <el-row>
                                        <el-col :span="2">
                                            <img src="../assets/logo.png" class="smallImg">
                                        </el-col>
                                        <el-col :span="16">{{ suggestion.title }}</el-col>
                                        <el-col :span="4">
                                            <el-button class="followBtn">FOLLOW</el-button>
                                        </el-col>
                                    </el-row>
                            </router-link>
                        </el-button>
                    </div>
                </div>
            </div>
        </el-aside>
        <el-main clas="main">
            <router-view></router-view>
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
    width: 15px;
    border-radius: 5px;
    border-color:black;
    border-style: solid
}

.mediumImg {
    height: 100%;
    width: 20px;
    border-radius: 5px;
    border-color:black;
    border-style: solid
}

.bigImg {
    height: 100%;
    width: 30px;
    border-radius: 5px;
    border-color:black;
    border-style: solid
}

.leftBtn {
    width: 100%;
    border-color: transparent
}

.followBtn {
    border-color: transparent;
    width: 80px;
    text-align: center;
    font-size: 10px
}
</style>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            count: 1,
            recentAtcs: [
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                }
            ],
            feeds: [
                { title: "passage title" },
                { title: "passage title" },
                { title: "passage title" },
                { title: "passage title" },
                { title: "passage title" }
            ],
            bookmarks: [
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                },
                { 
                    title: "passage title",
                    time: "2 hours" 
                }
            ],
            suggestions: [
                { title: "passage title" },
                { title: "passage title" },
                { title: "passage title" },
                { title: "passage title" },
                { title: "passage title" }
            ]
        }
    }
}
</script>
