var t = getApp();

Page({
  data: {
    num: 1,
    result: [],
    wangzhi: ' ',
    number:"",
    guanw:""
  },
  onLoad: function (e) {
    var n = this;
   

  },
  copyBtn: function (e) {
    var that = this;
    wx.setClipboardData({
      //准备复制的数据
      data: that.data.number,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  copyBtng: function (e) {
    var that = this;
    wx.setClipboardData({
      //准备复制的数据
      data: that.data.guanw,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
});