import { config } from '../config.js'


class HTTP {
  constructor() {
    this.baseRestUrl = config.api_url
  }

  //http 请求类, 当noRefech为true时，不做未授权重试机制
  request(params) {
    var that = this
    var url = this.baseRestUrl + params.url;

    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.method,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: function (res) {
        // 判断以2（2xx)开头的状态码为正确
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.success && params.success(res.data);
        } else {
          console.log(res)
          params.fail && params.fail(res);
        }
      },
      fail: function (err) {
        console.log(err)
        params.fail && params.fail(err)
      }
    });
  }
};

export { HTTP };