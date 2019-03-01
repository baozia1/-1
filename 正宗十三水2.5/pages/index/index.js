var tt = getApp(),
  n = 20,
  o = 1;
var w = "https://www.mmffu.com/";

Page({


  data: {
    inputValue: null,
    data_code: false,
    viper:[
      "/images/swiper_1.png"
    ],
    ban:[
      "/images/banner_1.png",
    ],
    swiper: [],
    banner: [],
    imageUrl:"",
    autoplay: true,
    interval: 2000,
    duration: 1000,
    curIndex: 0,
    loadingHidden: true

  },
  btnClick: function(){
    var o = this;
    wx.showModal({
      title: '确认提交',
      content: '提交成功稍后我们会与您取得联系',
      success: function (res) {
        if (res.confirm) {
          o.setData({
            loadingHidden: false
          });
          setTimeout(function () {
            o.setData({
              loadingHidden: true
            });
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            }),
            o.setData({
              inputValue:""
            })
          }, 3000);
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  onLoad: function (n) {

    var o = this;
    tt.func.req("/change/doFindStateByName", {acName: "正宗十三水"}, function (t) {
      o.setData({
        data_code: t  
      })
    });
    tt.func.req("change/doFindImageUrl", { acName: "正宗十三水" }, function (t) {
      for (var i = 1; i <= 5; i++) {
        o.data.swiper[i - 1] = w + t + "/swiper_" + i + ".png"
      }
      for (var i = 1; i <= 4; i++) {
        o.data.banner[i - 1] = w + t + "/banner_" + i + ".png"
      }
      o.setData({
        swiper: o.data.swiper,
        banner: o.data.banner,
        imageUrl: t
      })
    });
  },
  onListItemTap: function (t) {
    var img = this.data.imageUrl;
    wx.navigateTo({
      url: "/pages/index/logs/logs?imageUrl=" + w + img + "/QR_code.png"
    });
  },

  
})

