Page({
  data: {
    code: "",
    url: "https://dnglapp888e288.com"
  },
  onLoad: function(n) {
    var o = this;
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