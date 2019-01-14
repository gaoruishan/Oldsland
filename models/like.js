var localData = require("../data/like-data.js")
import {
  HTTP
} from '../utils/http.js'

class LikeModel extends HTTP {
  constructor() {
    super();
  }
  getClassLikeStatus(cid, callBack) {
    this.request({
      url: 'classic/' + cid + '/favor',
      fail: (data) => {
        console.log(localData.likeData)
        callBack(localData.likeData[cid])
      }
    })
  }
}

export {
  LikeModel
}