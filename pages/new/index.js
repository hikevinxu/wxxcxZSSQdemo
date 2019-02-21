// pages/new/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: 0,
    total: 0,
    dataArray: [],
    isLoading: true,
    searchLoading: true,
    searchLoadingComplete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初次加载，请求第一页数据
    this.fetchArticleList(0, false)
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
    // 上拉刷新
    wx.showNavigationBarLoading()
    console.log(123);
    this.setData({
      start: 0,
      total: 0,
      searchLoading: true,
      searchLoadingComplete: false
    })
    this.fetchArticleList(0, false);
  },  

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(456);
    console.log(this.data.start);
    console.log(this.data.total);
    if (this.data.start + 10 >= this.data.total){
      this.setData({
        searchLoading: false,
        searchLoadingComplete: true
      })
      return;
    }
    this.setData({
      searchLoading: true
    })
    // 下拉触底，先判断是否有请求正在进行中
    // 以及检查当前请求页数是不是小于数据总页数，如符合条件，则发送请
    this.fetchArticleList(this.data.start + 10,true);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  fetchArticleList: function (pageNo, override){
    this.loading = true
    console.log(pageNo);
    let that = this;
    // 向后端请求指定页码的数据
    wx.request({
      url: "https://douban.uieee.com/v2/book/search?tag=小说&count=10&start=" + pageNo, 
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {
        console.log(res.data);
        console.log(that.data.dataArray);
        if (override){
          that.setData({
            start: pageNo,
            total: res.data.total,
            dataArray: that.data.dataArray.concat(res.data.books)
          })
        }else{
          that.setData({
            start: pageNo,
            total: res.data.total,
            dataArray: res.data.books
          },function(){
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
          })
        }
      }
    })
  }
})