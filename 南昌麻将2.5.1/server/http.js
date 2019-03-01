var t = 'https://www.mmffu.com/ssm/';

module.exports = {
  req: function (o,e,n) {
   
    wx.request({
      url: t +o,
      data: e,
      method: "post",
      header: {
        "Content-Type": "application/json"
      },
      success: function (t) {
    
        return "function" == typeof n && n(t.data);
  
      },
      fail: function (e) {
        return "function" == typeof n && n(!1);
      },
      complete: function () {
        wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
      }
    });
  }
};