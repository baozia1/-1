var t = getApp();
Page({
  data: {
    code: "",
    url: ""
  },
  onLoad: function (n) {
    var o = this;
    t.func.req("change/doFindDownloadUrl", { acName: "正宗十三水" }, function (t) {
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