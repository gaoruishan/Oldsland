// pages/classic/index.js
import {  ClassicModel} from "../../models/classic.js"
import {LikeModel} from "../../models/like.js"

let classicModel = new ClassicModel();
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    like: false,
    count: 0,
    last: true,
    first: false,
    index: 0
  },
  onLike: function(e) {
    console.log(e)
  },
  test: function() {
    return 123;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let a = 123;
    console.log(`${a}456`)
    console.log(`${this.test()}456`)
    classicModel.getLasest((data) => {
      this.setData({
        // ...data 扩展运算符 
        classic: data,
        like: data.like_status,
        count: data.fav_nums
      })
    });
  },
  onNext: function(e) {
    let index = this.data.index - 1;
    classicModel.getNext(index, (data) => {
      let last = data.length == (index + 1);
      let first = 0 == index;
      this._updateLikeStatus(data[index].id);
      this.setData({
        index: index,
        last: first,
        first: last,
        classic: data[index]
      })
    })
  },
  onPrevious: function(e) {
    let index = this.data.index + 1;
    classicModel.getPrevious(index, (data) => {
      let last = data.length == (index + 1);
      let first = 0 == index;
      this._updateLikeStatus(data[index]. id);
      this.setData({
        index: index,
        last: first,
        first: last,
        classic: data[index]
      });
    })
  },

  _updateLikeStatus: function(cid) {
    likeModel.getClassLikeStatus(cid, (data) => {
      this.setData({
        like: data.like_status,
        count: data.fav_nums
      })
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },


})