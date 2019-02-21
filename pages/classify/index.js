const app = getApp()
var api = require('../../utils/api.js');

// map.js
Page({
  data: {
    longitude: null,
    latitude: null,
    chooseAddress: '',
    chooseLongitude: '',
    chooseLatitude: ''
  },
  onReady: function (e) {
    // 定位
    this.getLocation();
  },
  onLoad: function(){
    
  },
  onShow: function(){
    
  },
  getLocation: function () {
    // 定位
    var that = this;
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        console.log(res);
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        var longitude = res.longitude;
        var latitude = res.latitude;
      }
    })
  },
  //移动选点
  chooseLocation: function() {
    console.log(111);
    var _page = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        _page.setData({
          chooseAddress: res.name,
          chooseLatitude: res.latitude,
          chooseLongitude: res.longitude
        });
      },
      fail: function(err) {
        console.log(err)
      }
    });
  },
  openLocation: function(){
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude
    })
  }
})