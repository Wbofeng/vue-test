<template>
    <div>
        <div class='above'>
            <h2>Featured on Winds</h2>
            <el-row :gutter="12">
                <el-col :span="4" v-for="(card, index) in cards" :key="index" >
                    <el-card shadow="hover" class="background">
                        <p class="abstract">{{ card.variety }}</p>
                        <h4>{{ card.title }}</h4>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class='below'>
            <!-- below_left -->
            <el-card class='podcasts' :span="8"> 
                <el-button class="titleBtn">             
                    <el-row>
                        <el-rol :span="6" class="title">Podcasts</el-rol>
                        <el-rol :span="6" :offset="12">
                            <label>View All</label>
                            <i class="el-icon-arrow-right"></i>
                        </el-rol>
                    </el-row>
                </el-button>
                <div class="scroll">
                    <el-button class="subtitle">Recent Episodes</el-button>
                    <wind-btn v-for='(recentEpi, index) in recentEpis' :key="index" :item="recentEpi"></wind-btn>
                    <el-button class='subtitle'>Podcasts</el-button>
                    <wind-btni v-for='(podcast, index) in podcasts' :key="index" :item="podcast"></wind-btni>
                </div>
            </el-card>
            <!-- below_center -->
            <el-card class='rss' :span="8">
                <el-button class="titleBtn">               
                    <el-row>
                        <router-link to="/rss">
                            <el-col :span="4" class="title">Rss</el-col>
                            <el-col :span="6" :offset="14">
                                <label>View All</label>
                                <i class="el-icon-arrow-right"></i>
                            </el-col>
                        </router-link>
                    </el-row>  
                </el-button>          
                <div class="scroll">
                    <el-button class="subtitle">Recent Articles</el-button>
                    <wind-btn v-for='(recentAtc, index) in recentAtcs' :key="index" :item="recentAtc"></wind-btn>
                    <el-button class="subtitle">Feeds</el-button>
                    <wind-btni v-for='(feed, index) in feeds' :key="index" :item="feed"></wind-btni>
                </div>
            </el-card>
            <!-- below_right -->
            <el-card class='discover' :span="8">
                <el-button class="titleBtn"> 
                    <el-row>
                        <el-col :span="6" class="title">Discover</el-col>
                        <el-col :span="6" :offset="12">
                            <label>Refresh</label>
                            <img src="../assets/refresh.png" class="refresh">
                        </el-col>
                    </el-row>
                </el-button>
                <div class="scroll">
                    <el-row :gutter="20">                     
                            <el-col v-for="(disCard, index) in disCards" :key="index" :span="8">
                                <div>
                                    <el-card  shadow="hover" class="discoverCard"></el-card>
                                    <span>{{ disCard.title }}</span>
                                </div>
                            </el-col>                      
                    </el-row>
                    <div v-for="(discover,index) in discovers" :key="index">
                        <el-button class="passageBtn">
                            <el-row>
                                <el-col :span="2">
                                    <img src="../assets/logo.png" class="smallImg">
                                </el-col>
                                <el-col :span="16" class="passageTitle">{{ discover.title }}</el-col>                         
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

.abstract {
    font-size: 14px;
    margin-top: 0px;
    font-weight: 600;
}

h4 {
    display: inline-block;
    width: 140px;
    margin-bottom: 0;
    position: absolute;
    bottom: 20px;
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

.passageBtn, .subtitle, .titleBtn {
    border-color: transparent;
    width: 100%;
    height: 40px
}

.titleBtn {
    height: 50px
}

.subtitle, .title, h2{
    text-align: left;
    color: black;
    font-weight: bold
}

.title {
    font-size: 1.5em
}

.subtitle, label {
    font-size: 0.8em
}

.background {
    /* background: linear-gradient(to top, black, transparent);     */
    background-image: url('../assets/logo.png');
    background-size: 100% 100%;
    text-align: left;
    border-radius: 10px;
    height: 170px
}

.background:hover {
    transform: scale(1.05);
}

.discoverCard {
    background-image: url('../assets/logo.png');
    background-size: 100% 100%;
    text-align: left;
    border-radius: 10px;
    height: 100px
}

.smallImg {
    height: 100%;
    width: 15px;
    border-radius: 5px
}

.refresh {
    height: 15px;
    width: 15px
}

.passageTitle {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1em;
    color: black;
    text-align: left
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
                       variety: 'PODCAST',
                       title: 'Invisibilia'
                   },
                   {
                       variety: 'PODCAST',
                       title: 'Smashing Magazine'
                   },
                   {
                       variety: 'PODCAST',
                       title: 'Shop Talk'
                   },
                   {
                       variety: 'RSS',
                       title: 'Codeburst'
                   },
                   {
                       variety: 'RSS',
                       title: 'Hacker Noon'
                   },
                   {
                       variety: 'RSS',
                       title: 'Design&Business'
                   }
                ],
                recentEpis: [
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    }
                ],
                podcasts: [
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title"
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    }
                ],
                recentAtcs: [
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title",
                        time: "2 hours"
                    }
                ],
                feeds: [
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title"
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title"
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    { 
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    },
                    {
                        img: require("../assets/logo.png"),
                        title: "passage title" 
                    }
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
