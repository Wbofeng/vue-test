<template>
    <div>
        <div class="up">
            <h1>{{ activeItem.title }}</h1>   
            <div class="icons">
                <img src='../assets/bookmark.png' class="bookmark" @click="mark(activeItem)">            
                <img src='../assets/twitter.png' class="twitter">             
                <span class="link">WEBSITE</span>                                   
                <img src='../assets/comment.png' class="comment">
                <span class="link">COMMENTS</span>                              
                <span class="time">POSTED {{ activeItem.time }} AGO</span>
            </div>
        </div>
        <div class="down">text</div>
    </div>
</template>

<style scoped>
h1 {
    text-align: left
}

.icons {
    display: flex;
    font-size: 12px
}

img {
    width: 12px;
    height: 12px;
    border-radius: 4px
}

.bookmark, .twitter {
    margin-right: 1em
}

.comment {
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

.up {
    margin:10px 0
}

.down {
    text-align: left
}
</style>

<script>
import eventBus from '../router/eventBus.js'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            article: { 
                title: "title",
                time: "time"
            }
        }
    },
    methods: {
        mark(activeItem) {
            console.log(activeItem, '===')
            let elem = {}
            elem.img = activeItem.img
            elem.title = activeItem.title
            elem.time = activeItem.time
            elem.id = activeItem.id
            console.log(elem, '=')
            this.$store.commit('ADD_BOOK', elem)
        }
    },
    computed: {
        ...mapGetters([
            'activeItem'
        ])
    }
}
</script>
