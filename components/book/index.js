// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookModel:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail:function(){
      let bid = this.properties.bookModel.id;
      wx.navigateTo({
        url: '/pages/book/detail/index?bid=' + bid,
      })
    }
  }
})
