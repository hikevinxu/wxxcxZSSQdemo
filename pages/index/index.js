const app = getApp()

Page({
  data: {
    background: ['../../images/bannerone.jpg', '../../images/bannertwo.jpg', '../../images/bannerthree.jpg', '../../images/bannerfour.jpg', '../../images/bannerfive.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    bookList: [
      { bookCover: "https://img3.doubanio.com/view/subject/m/public/s27264181.jpg", bookName: "解忧杂货店" }, 
      { bookCover: "https://img1.doubanio.com/view/subject/m/public/s2768378.jpg", bookName: "三体" }, 
      { bookCover: "https://img1.doubanio.com/view/subject/m/public/s10339418.jpg", bookName: "偷影子的人" }
    ]
  },
  onLoad: function () {
    console.log("index");
  },
  onTap: function(){
    console.log(123);
    wx.navigateTo({
      url: '../new/index'
    })
  }
})
