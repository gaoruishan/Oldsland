import {
  config
} from '../config.js'

const errorInfo = {
  "1005": "appKey验证失败"
}
//延迟时间
const delay = 2500;
class HTTP {
  constructor() {
    this.baseRestUrl = config.api_url
  }

  //解构{}
  request({  url,  data = {},  method = "GET" }) {
    return new Promise((resolve, reject) => {
      //模拟延迟
      setTimeout(() => {
        this._request(url, resolve, reject, data, method)
      }, delay)
    })
  }
  //http 请求类
  _request(url, resolve, reject, data = {}, method = "GET") {
    wx.request({
      url: this.baseRestUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        // 判断以2（2xx)开头的状态码为正确
        const code = res.statusCode.toString();
        if (code.startsWith("2")) {
          resolve(res.data);
        } else {
          this._showError(res.data.error_code)
          console.log(res)
          reject(res);
        }
      },
      fail: (err) => {
        // this._showError(err.errMsg)
        console.log(err)
        reject(err)
      }
    });
  }

  _showError(code) {
    wx.showToast({
      title: errorInfo[code] ? errorInfo[code] : code
    })
  }


}


export {
  HTTP
};