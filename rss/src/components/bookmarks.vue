<template>
    <div>
        <div class="up">
            <h1>{{activeItem.title}}</h1>   
            <div class="icons">
                <img src='../assets/bookmark.png' class="icon">            
                <img src='../assets/twitter.png' class="icon">            
                <span class="link">WEBSITE</span>                                   
                <span class="time">POSTED NUMBER HOURS AGO</span>
            </div>
        </div>
        <div class="down">passage</div>
    </div>
</template>

<style scoped>
h1 {
    text-align: left;
    margin: 0.5em 0
}

.icons {
    display: flex;
    font-size: 12px
}

.icon {
    width: 12px;
    height: 12px;
    border-radius: 4px
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

.up {
    margin:10px 0
}

.down {
    text-align: left
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
    data () {
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
    },
    computed: {
        ...mapGetters([
            'activeItem'
        ])
    }
}
</script>