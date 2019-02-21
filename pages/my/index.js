const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log("my")
  },
  showMyWork: function(){
    console.log(123);
    wx.navigateTo({
      url: '../myWork/myWork',
    })
  },
  onShareAppMessage: function () {
    return {
      title: '无名追书',
      desc: '自定义分享描述',
      path: './index?id=123'
    }
  },
  showMyFuLiCard: function(){
    wx.navigateTo({
      url: '../myFuLiCard/myFuLiCard',
    })
  }
})