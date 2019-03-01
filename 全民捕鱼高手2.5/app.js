var e = require("server/http.js");
App({
  onLaunch: function () {
  
    var e = wx.getStorageSync('logs') || []
    e.unshift(Date.now())
    wx.setStorageSync('logs', e)

  },
  globalData: {
    userInfo: null
  },
  func:{
    req:e.req


  }
})