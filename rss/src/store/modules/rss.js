export default {
    state: {
        follow: undefined,
        activeItem: undefined,
        bookmarks: [],
        recentAtcs: [
            {
                img: "https://www.designyourway.net/favicon.ico", 
                title: "Website Header Design: 44 Cool Examples and What Makes Them Good",
                time: "2 hours", 
                id: 21
            },
            { 
                img: require("../../assets/man.png"),
                title: "German Court: Bring Back Deported Jihadist",
                time: "3 hours",
                id: 22 
            },
            { 
                img: require("../../assets/cb.png"),
                title: "Russia Prepares For New Batch Of Stealth Fighter Jets",
                time: "5 hours",
                id: 23
            },
            { 
                img: require("../../assets/android.png"),
                title: "Craig Murray Rages At Britain’s “Gangster State”",
                time: "6 hours",
                id: 24
            },
            { 
                img: require("../../assets/blueBall.png"),
                title: "Visualizing The Social Media Universe In 2018",
                time: "7 hours",
                id: 25
            }
        ],
        feeds: [
            {
                img: require("../../assets/android.png"),
                title: "Android Developers Blog",
                isfollowed: true,
                id: 6 
            },
            {
                img: require("../../assets/dyw.png"),
                title: "Atomic Object",
                isfollowed: true,
                id: 7
            },
            { 
                img: require("../../assets/favicon.png"),
                title: "Codeburst",
                isfollowed: true,
                id: 8
            },
            {
                img: require("../../assets/google.png"),
                title: "CoreOS",
                isfollowed: true,
                id: 9
            },
            { 
                img: require("../../assets/leaf.png"),
                title: "Design your way",
                isfollowed: true,
                id: 10
            }
        ],
        suggestions: [
            { 
                img: require("../../assets/m.png"),
                title: "Bandcamp Daily",
                id: 11,
                isfollowed: false
            },
            {
                img: require("../../assets/papercut.png"),
                title: "Linux Journal - The Original Magazine of the Linux Community",
                id: 12,
                isfollowed: false
            },
            {   
                img: require("../../assets/triangle.png"),
                title: "HOW",
                id: 13,
                isfollowed: false
            },
            {
                img: require("../../assets/watch.png"),
                title: "VICE RSS Feed",
                id: 14,
                isfollowed: false
            },
            {
                img: require("../../assets/waveLine.png"),
                title: "Axios",
                id: 15,
                isfollowed: false
            }
        ]
    },
    mutations: {
        TRANS_ITEM(state, item) {
            state.activeItem = item
        },
        FOLLOW_FEED(state, feed) {
            let i = 0
            for(i; i < state.feeds.length; i++) {
                if(state.feeds[i].id === feed.id) {
                    feed.isfollowed = false
                    state.feeds.splice(i, 1)
                    break
                }
            }
            if(i === state.feeds.length) {
                feed.isfollowed = true
                state.feeds.unshift(feed)
            }
        },
        ADD_BOOK(state, item) {
            item.time = item.time.toLowerCase()
            let flag = true
            for(let i = 0; i<state.bookmarks.length; i++) {
                if(state.bookmarks[i].id === item.id) {
                    state.bookmarks.splice(i, 1)
                    flag = false
                }
            }
            if(flag) {
                state.bookmarks.unshift(item)
            }
        }
    },
    actions: {
        transItem({ commit }, data) {
            commit("TRANS_ITEM", data)
        },
        followFeed({ commit }, data) {
            commit("FOLLOW_FEED", data)
        },
        addBook({ commit }, data) {
            commit("ADD_BOOK", data)
        }
    }
}