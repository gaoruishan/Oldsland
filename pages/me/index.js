// pages/me/index.js
import { ClassicModel} from "../../models/classic.js"

const classicModel = new ClassicModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mybg: "../../images/my/my@bg.png",
    avatar: "../../images/my/my.png",
    about: "../../images/my/about.png",
    userInfo: null,
    likeBookList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getUserInfo({
      success: data => {
        console.log(data)
        this.setUserInfo(data.userInfo)
      }
    });
    classicModel.getLikeList((data)=>{
      this.setData({ likeBookList:data})
    })
  },
  /**
   * 点击获取用户信息
   */
  onGetUserInfo(event) {
    this.setUserInfo(event.detail.userInfo)
  },
  setUserInfo(userInfo) {
    if (userInfo) {
      this.setData({
        userInfo,
      })
    }
  },
  /**
   * 我的书单
   */
  onMyBook() {
    wx.navigateTo({
      url: 'mybook/index',
    })
  },
  /**
   * 关于我们
   */
  onAbout() {
    wx.navigateTo({
      url: 'about/index',
    })
  },
  /**
   * 点击学习
   */
  onStudy(){
    wx.navigateTo({
      url: 'course/index',
    })
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