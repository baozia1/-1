var t = getApp();
Page({
  data: {
    code: "",
    url: ""
  },
  onLoad: function(n) {
    var o = this;
    t.func.req("change/doFindDownloadUrl", { acName: "扑克胜率计算" }, function (t) {
      o.setData({
        url: t
      })
    });
    o.setData({
      code: n.imageUrl
    })
  },
  copy: function(e){
    var that = this;
    wx.setClipboardData({
      //去找上面的数据
      data: that.data.url,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  }
})