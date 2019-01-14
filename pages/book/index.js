// pages/book/index.js
import {
  BookModel
} from "../../models/book.js"

const bookModel = new BookModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    searching: false,
    loading: true,
    loadMore: false,
    total: 0,
    ending:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getHotList()
  },
  getHotList() {
    bookModel.getHotList().then(
      (res) => console.log(res),
      (err) => {
        this.setData({
          bookList: this.data.bookList.concat(err.books),
          total: err.total,
          loading: false,
          loadMore: false
        })
      }
    )
  },
  onSearch() {
    this.setData({
      searching: true
    })
  },
  onSearchCancel() {
    this.setData({
      searching: false
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.data.bookList = [];
    this.getHotList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.total <= this.data.bookList.length) {
      this.setData({ ending:true})
      return
    }
    this.getHotList()
    this.setData({
      loadMore: true
    })
  },

})