// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean,
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    yes_url: "image/like.png",
    no_url: "image/like@dis.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(e) {
      let count = this.properties.count;
      count = this.properties.like ? count - 1 : count + 1;
      this.setData({
        count:count,
        like:!this.properties.like
      })
      let b = this.properties.like?"like":"cancal"
      //"like": 自定义点击名称 <like-cmp bind:like="onLike" />
      this.triggerEvent("likeTap",{
        behavior:b
      },{})
    }
  }
})