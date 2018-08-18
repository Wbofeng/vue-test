<template>
    <div>
        <div class="up">
            <h1>Article Title</h1>   
            <div class="icons">
                <img src='../assets/bookmark.png'>            
                <img src='../assets/twitter.png'>            
                <span>WEBSITE</span>                                   
                <div>
                    <img src='../assets/comment.png'>
                    <span>COMMENTS</span>                               
                </div>
                <span class="time">POSTED NUMBER HOURS AGO</span>
            </div>
        </div>
        <div class="down">passage</div>
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
    export default {
        data() {
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
        }
    }    
</script>
