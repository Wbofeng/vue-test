<template>
    <div>
        <div class='above'>
            <h2>Featured on Winds</h2>
            <el-row :gutter="12">
                <el-col :span="4" v-for="(card, index) in cards" :key="index" >
                    <el-card shadow="hover" class="background">
                        <p class="abstract">{{ card.title }}</p>
                        <h2>{{ card.abstract }}</h2>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class='below'>
            <!-- below_left -->
            <el-card class='podcasts' :span="8"> 
                <el-button class="passageBtn">             
                    <el-row>
                        <el-rol :span="4">Podcasts</el-rol>
                        <el-rol :span="6" :offset="14">
                            <label>View All</label>
                            <i class="el-icon-arrow-right"></i>
                        </el-rol>
                    </el-row>
                </el-button>
                <div class="scroll">
                    <el-button class="passageBtn">Recent Episodes</el-button>
                    <wind-btn v-for='(recentEpi, index) in recentEpis' :key="index" :item="recentEpi"></wind-btn>
                    <el-button class='passageBtn'>Podcasts</el-button>
                    <wind-btni v-for='(podcast, index) in podcasts' :key="index" :item="podcast"></wind-btni>
                </div>
            </el-card>
            <!-- below_center -->
            <el-card class='rss' :span="8">
                <el-button class="passageBtn">               
                    <el-row>
                        <router-link to="/rss">
                            <el-col :span="4">Rss</el-col>
                            <el-col :span="6" :offset="14">
                                <label>View All</label>
                                <i class="el-icon-arrow-right"></i>
                            </el-col>
                        </router-link>
                    </el-row>  
                </el-button>          
                <div class="scroll">
                    <el-button class="passageBtn">Recent Articles</el-button>
                    <wind-btn v-for='(recentAtc, index) in recentAtcs' :key="index" :item="recentAtc"></wind-btn>
                    <el-button class="passageBtn">Feeds</el-button>
                    <wind-btni v-for='(feed, index) in feeds' :key="index" :item="feed"></wind-btni>
                </div>
            </el-card>
            <!-- below_right -->
            <el-card class='discover' :span="8">
                <el-button class="passageBtn"> 
                    <el-row>
                        <el-col :span="6">Discover</el-col>
                        <el-col :span="4" :offset="10">Refresh</el-col>
                        <el-col :span="4">
                            <img src="../assets/logo.png" class="passageImg">
                        </el-col>
                    </el-row>
                </el-button>
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
                                <el-col :span="2">
                                    <img src="../assets/logo.png" class="passageImg">
                                </el-col>
                                <el-col :span="16">
                                    <span class="passageTitle">{{ discover.title }}</span>
                                </el-col>                         
                                <el-col :span="4">View All</el-col>
                                <el-col :span="1">
                                    <i class="el-icon-arrow-right"></i>
                                </el-col>
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

h2 {
    text-align: left;
    font-weight: bold;
    color: black
}

.abstract {
    font-size: 16px;
    margin-top: 0px
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
    width: 33%
}

titleRight {
    margin-right: 0
}

.passageBtn {
    border-color: transparent;
    width: 100%;
    height: 40px
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
    text-overflow: ellipsis
}

.viewAll {
    text-decoration: none
}
</style>

<script>
    import windBtn from'@/components/windBtn'
    import windBtni from '@/components/windBtni'

    export default {
        components: {
            windBtn,
            windBtni
        },
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
                recentEpis: [
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
                ]
            }
        }
    }
</script>
