var localData = require("../data/book-data.js");
import {
  HTTP
} from "../utils/http-p.js"


class BookModel extends HTTP {
  constructor() {
    super()
  }

  getHotList() {
    //再包一层返回
    return new Promise((resolve, reject) => {
      this.request({
        url: "book/hot_list"
      }).then(
        (res) => resolve(res),
        (err) => reject(localData.bookData)
      )
    })
    //直接返回
    // return this.request({
    //   url: "book/hot_list"
    // })
  }

  getBookDetail(bid) {
    return new Promise((resolve, reject) => {
      this.request({
        url: "/book/" + bid + "/detail"
      }).then(
        (res) => resolve(res),
        (err) => reject(localData.bookDetail)
      )
    })
  }

  getBookComments(bid) {
    return new Promise((resolve, reject) => {
      this.request({
        url: "/book/" + bid + "/short_comment"
      }).then(
        (res) => resolve(res),
        (err) => reject(localData.bookComments)
      )
    })
  }


  
}


export {
  BookModel
}