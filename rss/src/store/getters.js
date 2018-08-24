const getters = {
    follow: state => state.rss.follow,
    activeItem: state => state.rss.activeItem,
    feeds: state => state.rss.feeds,
    suggestions: state => state.rss.suggestions,
    recentAtcs: state => state.rss.recentAtcs,
    bookmarks: state => state.rss.bookmarks
}

export default getters