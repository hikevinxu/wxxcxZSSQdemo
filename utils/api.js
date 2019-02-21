// service.js
var request = require('./wxRequest.js');

//接口调用
module.exports = {
  //登录
  login: function (params) {
    return request.getRequest("/cats/lv2/statistics", params);
  },
  getHotWords: function (params){
    return request.getRequest('/book/search-hotwords', params);
  }
}