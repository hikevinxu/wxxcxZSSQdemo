var Promise = require('./es6-promise.js');

var path = {
  local: 'https://api.zhuishushenqi.com',
}

function wxPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        //成功
        if (res.statusCode !== 200){
          reject(res);
          return;
        }
        resolve(res.data);
      }
      obj.fail = function (res) {
        //失败
        reject(res)
      }
      fn(obj)
    })
  }
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
  var requestUrl = path.local + url;
  var getRequest = wxPromisify(wx.request)
  return getRequest({
    url: requestUrl,
    method: 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json'
    }
  })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, data) {
  var requestUrl = path.local + url;
  var postRequest = wxPromisify(wx.request)
  return postRequest({
    url: requestUrl,
    method: 'POST',
    data: data,
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
  })
}

module.exports = {
  postRequest: postRequest,
  getRequest: getRequest
}