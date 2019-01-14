// components/search/index.js
import {
  BookModel
} from "../../models/book.js"
import {
  SearchModel
} from "search.js"
import {
  searchBehavior
} from "../../behavior/search-behavior.js"

const bookModel = new BookModel();
const searchModel = new SearchModel();

Component({

  //支持多继承
  behaviors: [searchBehavior],
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: "",
    bookList: [],
    history: [],
    showBook: false,
  },
  attached: function() {
    this.setData({
      history: searchModel.getHistory()
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDelete() {
      this.setData({
        inputValue: "",
        showBook: false
      })
    },
    onCancel(e) {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(e) {
      let txt = e.detail.value || e.detail.text;
      if (!txt) {
        wx.showToast({
          title: '请输入内容',
        })
        return
      }
      this.setData({
        inputValue: txt,

      })
      this._showLoading(true);
      bookModel.getHotList().then(
        (res) => console.log(res),
        (err) => {
          this.setData({
            bookList: err.books.slice(0, 3),
            showBook: true,
          })
          this._showLoading(false);
          searchModel.addHistory(txt);
        }
      )
    }
  }
})