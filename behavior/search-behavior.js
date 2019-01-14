//和组件类似
let searchBehavior = Behavior({
  properties: {},
  data: {
    total: 0,
    dataArray: [],
    empty: false,
    ending: false,
    loading: false
  },
  methods: {
    _loadMoreData: function() {

    },
    _initData: function() {
    
    },
    _showLoading(show){
      this.setData({
        loading:show
      })
    }
  }
})


export {
  searchBehavior
}