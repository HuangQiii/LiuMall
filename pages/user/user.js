var app = getApp();

Page({
  data: {
    userInfo: {},
    isLogin: false
  },
  onShow: function () {
    let userInfo = wx.getStorageSync('userInfo');
    let isLogin = wx.getStorageSync('isLogin');

    if (userInfo && isLogin) {
      this.setData({
        userInfo: userInfo,
        isLogin: isLogin
      });
    } else {
      this.setData({
        userInfo: app.globalData.userInfo
      });
    }
  },
})