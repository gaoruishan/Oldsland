var localData = require("../data/classic-data.js");
import {
  HTTP
} from "../utils/http.js"


class ClassicModel extends HTTP {
  constructor() {
    super()
  }

  //最新一期
  getLasest(callBack) {
    //方式1:参数形式
    let param ={
      url: 'classic/latest',
      //强制返回本地数据
      fail: callBack(localData.classicLast)
    }
    this.request(param);
    //方式2:可以出来回调
    // this.request({
    //   url: 'classic/latest',
    //   fail: (data) => {
    //     callBack(localData.classicLast)
    //   }
    // });
  }

  //前一期
  getPrevious(index, callBack) {
    let param = {
      url: "/classic/" + index + "/previous",
      //强制返回本地数据
      fail: callBack(localData.classicData)
    }
    this.request(param);
  }

  //后一期
  getNext(index, callBack) {
    let param = {
      url: "/classic/" + index + "/next",
      //强制返回本地数据
      fail: callBack(localData.classicData)
    }
    this.request(param);
  }
  //喜欢的
  getLikeList(callBack){
    let param = {
      url: "/classic/favor",
      //强制返回本地数据
      fail: callBack(localData.classicData)
    }
    this.request(param);
  }
}

export {
  ClassicModel
}