// pages/myFuLiCard/myFuLiCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    currentTab: 0,
    allData: ["aaaa"],
    pendingData: [],
    settledData: [],
    billingFailureData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setSwiperHeight();
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  switchTab: function(e){
    this.setData({
      currentTab: e.target.dataset.current
    })
  },
  switchSwiper: function(e){
    this.setData({
      currentTab: e.detail.current
    })
  },
  setSwiperHeight: function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('.swiperItem').boundingClientRect(function (rect) {
      console.log(rect);
      that.setData({
        windowHeight: rect.height
      })
    }).exec();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})