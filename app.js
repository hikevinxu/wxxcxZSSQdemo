App({
  onLaunch: function () {
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res);
          // 查看是否授权
          wx.getSetting({
            success(res) {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success(res) {
                    console.log(res.userInfo)
                  }
                })
              }else{
                console.log(res);
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})
