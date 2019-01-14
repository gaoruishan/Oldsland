// pages/me/likebook/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    like: false,
    count: 0,
    type: 0,
    image: "",
    content: "",
    url: "",
    title: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      index: options.index,
      like: options.like,
      count: options.count,
      type: options.type,
      image: options.image,
      content: options.content,
      title: options.title,
      url: options.url.replace("#", "?").replace("@", "="),
    })
    console.log(this.data.url)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})