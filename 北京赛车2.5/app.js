var e = require("server/http.js");
App({
  onLaunch: function() {
    var o = wx.getStorageSync("logs") || [];
    o.unshift(Date.now()), wx.setStorageSync("logs", o);
  },
  getUserInfo: function(o) {
    var n = this;
    this.globalData.userInfo ? "function" == typeof o && o(this.globalData.userInfo) : wx.login({
      success: function() {
        wx.getUserInfo({
          success: function(t) {
            n.globalData.userInfo = t.userInfo, "function" == typeof o && o(n.globalData.userInfo);
          }
        });
      }
    });
  },
  globalData: {
    hasLogin: !1
  },
  func: {
    req: e.req


  }
});