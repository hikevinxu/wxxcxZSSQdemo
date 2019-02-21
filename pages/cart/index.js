const app = getApp()
import api from '../../utils/api.js'
Page({
  data: {
    historyData: ['校花的贴身高手','row1','row2','很纯很暧昧','斗破苍穹'],
    boxColor: ['#90C5F0', '#91CED5', '#F88F55', '#C0AFD0', '#E78F8F', '#67CCB7', '#F6BC7E'],
    allTags: [],
    tags: []
  },
  onLoad: function () {
    console.log("cart");
    this.getHotWords();
  },
  /**
   * 绑定输入框的事件
   */
  bindSearchInput: function(e){
    this.searchInfo(e.detail.value);
  },
  /**
   * 接收子组件点击事件传过来的参数
   * 点击标签搜索内容
   */
  onMyTagChange: function(e){
    this.searchInfo(e.detail.tagName);
  },
  getRandomArrayElements: function (arr, count) {
    const array = [];
    for (let i = 0; i < count; i++) {
      var r = Math.random() * (arr.length - 1 - 0);
      var re = Math.round(r + 0);
      re = Math.max(Math.min(re, arr.length - 1), 0);
      var boxColorIndex = i % 7;
      var color = this.data.boxColor[boxColorIndex];
      array.push({
        tag: arr[re],
        tagColor: color
      });
    }
    return array;
  },
  /**
   * 获取热词通过便签组件展示，把数据通过组件传值给子组件
   */
  getHotWords: function(){
    var that = this;
    api.getHotWords().then(res => {
      const tagsArr = [];
      for (let i = 0; i < res.searchHotWords.length; i++) {
        tagsArr.push(res.searchHotWords[i].word)
      }
      that.setData({
        allTags: tagsArr
      }, function () {
        that.setData({
          tags: that.getRandomArrayElements(that.data.allTags, 20)
        })
      })
    })
  },
  /**
   * 换一批热词功能
   */
  changeTags: function(){
    this.getHotWords();
  },
  /**
   * 点击热点词汇 或 输入内容搜索 或 点击历史记录
   */
  searchInfo: function(name){
    wx.navigateTo({
      url: '../searchList/searchList?searchInfo=' + name,
    })
  },
  /**
   * 点击历史记录搜索
   */
  searchHistoryItem: function(e){
    this.searchInfo(e.currentTarget.dataset.history);
  }
})