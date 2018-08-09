<template>
    <div>
        <div class='above'>
            <div class="headline">Featured on Winds</div>
            <el-row :gutter="12">
                <el-col :span="4" v-for="(card, index) in cards" :key="index" >
                    <el-card shadow="hover" class="background">
                        <p class="abstract">{{ card.title }}</p>
                        <p class="photoTitle">{{ card.abstract }}</p>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class='below'>
            <!-- below1 -->
            <el-card class='podcasts' :span="8">              
                <el-button class="button">
                    <div style='float: right'>
                        <label>View All</label>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class='headline'>Podcasts</div>
                </el-button>
                <div class="scroll">
                    <el-button class="passageBtn">Recent Episodes</el-button>
                    <div v-for='(recentEpisode, index) in recentEpisodes' :key="index">
                        <el-button class='passageBtn'>
                            <el-row>
                                <el-col span="2"><img src='../assets/logo.png' class='passageImg'></el-col>
                                <el-col span="16"><span class='passageTitle'>{{ recentEpisode.title }}</span></el-col>
                                <el-col span="4"><span class='epiTime'>{{ recentEpisode.time }}</span></el-col>
                            </el-row>
                        </el-button>
                    </div>
                    <el-button class='passageBtn'>Podcasts</el-button>
                    <div v-for='(podcast, index) in podcasts' :key="index"> 
                        <el-button class='passageBtn'>
                            <el-row>
                                <el-col span="2"><img src='../assets/logo.png' class='passageImg'></el-col>
                                <el-col span="16"><span class='passageTitle'>{{ podcast.title }}</span></el-col>
                                <el-col span="4"><i class="el-icon-arrow-right"></i></el-col>
                            </el-row>
                        </el-button>
                    </div>
                </div>
            </el-card>
            <!-- below2 -->
            <el-card class='rss' :span="8">               
                <el-button class="button">
                    <div style="float: right">
                        <label>
                            <router-link to="/rss" class="viewAll">View All</router-link>
                        </label>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class='headline'>Rss</div>
                </el-button>            
                <div class="scroll">
                    <el-button class="passageBtn">Recent Articles</el-button>
                    <div v-for="(recentArticle, index) in recentArticles" :key="index">
                        <el-button class="passageBtn">
                            <el-row>
                                <el-col :span="2"><img src="../assets/logo.png" class="passageImg"></el-col>
                                <el-col :span="16"><span class="passageTitle">{{ recentArticle.title }}</span></el-col>
                                <el-col :span="4"><span class="artTime">{{ recentArticle.time }}</span></el-col>
                            </el-row>
                        </el-button>
                    </div>
                    <el-button class="passageBtn">Feeds</el-button>
                    <div v-for="(feed, index) in feeds" :key="index">
                        <el-button class="passageBtn">
                            <el-row>
                                <el-col :span="4"><img src="../assets/logo.png" class="passageImg"></el-col>
                                <el-col :span="16"><span class="passageTitle">{{ feed.title }}</span></el-col>
                                <el-col :span="4"><i class="el-icon-arrow-right"></i></el-col>
                            </el-row>
                        </el-button>
                    </div>
                </div>
            </el-card>
            <!-- below3 -->
            <el-card class='discover' :span="8">
                <div class='headline'>Discover</div>
                <div class="scroll">
                    <el-row :gutter="20">                     
                            <el-col v-for="(disCard, index) in disCards" :key="index" :span="8">
                                <div>
                                    <el-card  shadow="hover" class="background"></el-card>
                                    <span>{{ disCard.title }}</span>
                                </div>
                            </el-col>                      
                    </el-row>
                    <div v-for="(discover,index) in discovers" :key="index">
                        <el-button class="passageBtn">
                            <el-row>
                                <el-col :span="2"><img src="../assets/logo.png" class="passageImg"></el-col>
                                <el-col :span="16"><span class="passageTitle">{{ discover.title }}</span></el-col>                         
                                <el-col :span="4"><h>View All</h></el-col>
                                <el-col :span="1"><i class="el-icon-arrow-right"></i></el-col>
                            </el-row>
                        </el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.scroll {
    height: 200px;
    overflow: auto
}
.headline {
    text-align: left;
    padding-top: 5px;
    padding-bottom: 20px;
    font-weight: bold;
    color:black;
    clear: none
}
.abstract {
    font-size: 16px;
    margin-top: 0px
}
.photoTitle {
    font-size: 20px;
    margin-top: 60px;
    margin-bottom: 0px;
}
.above {
    padding: 20px 20px;
    height: 50%;
    background-color:lightgray
}
.below {
    height: 50%;
    display: flex
}
.podcasts, .rss, .discover {
    height: 300px;
    width: 33%;
}
.button {
    border-color: transparent;
    width: 100%;
    height: 60px;
}
.passageBtn {
    border-color: transparent;
    width: 100%;
    height: 40px;
}
.background {
    background-image: url('../assets/logo.png');
    background-size: 100% 100%;
    text-align: left;
    border-radius: 10px
}
.passageImg {
    height: 100%;
    width: 15px;
    border-radius: 5px;
    border-color:black;
    border-style: solid
}
.passageTitle {
    overflow: hidden;
    text-overflow: ellipsis;
}
.viewAll {
    text-decoration: none
}
</style>

<script>
    export default {
        data() {
           return {
                cards: [
                   {
                       title: '1',
                       abstract: '11'
                   },
                   {
                       title: '2',
                       abstract: '11'
                   },
                   {
                       title: '3',
                       abstract: '11'
                   },
                   {
                       title: '3',
                       abstract: '11'
                   },
                   {
                       title: '3',
                       abstract: '11'
                   },
                   {
                       title: '3',
                       abstract: '11'
                   }
                ],
                recentEpisodes: [
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
                podcasts: [
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" }
                ],
                recentArticles: [
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
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" },
                    { title: "passage title" }
                ],
                discovers: [
                    { title: "podCast title" },
                    { title: "podCast title" },
                    { title: "podCast title" },
                    { title: "podCast title" },
                    { title: "feed title" },
                    { title: "feed title" },
                    { title: "feed title" },
                    { title: "feed title" },
                    { title: "feed title" },
                    { title: "feed title" },
                    { title: "feed title" }
                ],
                disCards: [
                    { title: "a" },
                    { title: "a" },
                    { title: "a" }
                ],
                time1s: [
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" },
                    { title: "a year" }
                ],
                time2s: [
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                    { title: "2 hours" },
                ]
            }
        }
    }
</script>
