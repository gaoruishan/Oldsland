// pages/book/detail/index.js
import {BookModel} from "../../../models/book.js"
let bookModel = new BookModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetail: null,
    comments: null,
    edit:"../../../images/book/edit.png",
    input:"留下你的短评~",
    share:"../../../images/icon/share.png",
    clicking:false,
    inputValue:"",
    loading:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading();
    const bid = options.bid;
    const book =bookModel.getBookDetail(bid);
    const comments = bookModel.getBookComments(bid);

    // Promise.all([book,comments])
    //   .then((res) => console.log(res),
    //   (err)=>{
    //     console.log(err)
    //     this.setData({
    //       bookDetail: err[0],
    //       comments: err[1].comment
    //     })
    //     wx.hideLoading();
    //   })
    book.then(
      (res)=>console.log(res),
      (err)=>{
        this.setData({
          bookDetail:err,
          loading:false
        })
      }
    )
    comments.then(
      (res) => console.log(res),
      (err)=>{
        this.setData({
          comments:err.comment
        })
      }
    )
  },
  /**
   * 输入回车/确认
   */
  inputConfirm:function(e){
    const txt = e.detail.value || e.detail.text;
    if (txt){
      this.cancelClick();
      this.data.comments.unshift({
        content: txt,
        nums:1
      })
      this.setData({ comments: this.data.comments})
      this.setData({ inputValue:""})
    }else{
      wx.showToast({
        title: '请输入内容',
      })
    }
  },
  onInputClick:function(){
    this.setData({ clicking:true})
  },
  cancelClick:function(){
    this.setData({ clicking: false })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})