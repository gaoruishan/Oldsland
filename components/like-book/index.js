// components/like-book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object,
      observer: function(newD, oldD, changeD) {
        this.setData({
          music: newD.type == 200,
          movie: newD.type == 100,
          essay: newD.type == 300
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    music: false,
    movie: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLikeBook(e) {
      const like = this.properties.book.like_status == 1;
      let tempUrl = this.properties.book.url;
      //特殊处理
      if (tempUrl && tempUrl.includes("?")) {
        tempUrl = tempUrl.replace("?", "#").replace("=", "@");
      }
      const url = '/pages/me/likebook/index?index=' + this.properties.book.index +
        "&like=" + like +
        "&count=" + this.properties.book.fav_nums +
        "&type=" + this.properties.book.type +
        "&image=" + this.properties.book.image +
        "&content=" + this.properties.book.content +
        "&title=" + this.properties.book.title +
        "&url=" + tempUrl;

      console.log(url)
      wx.navigateTo({
        url: url
      })
    }
  }
})