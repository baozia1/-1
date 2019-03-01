var e = getApp(), t = [ [ "camera" ], [ "album" ], [ "camera", "album" ] ], o = [ [ "compressed" ], [ "original" ], [ "compressed", "original" ] ];

Page({
    data: {
        hasNetworkType: !1,
        systemInfo: {},
        sourceTypeIndex: 2,
        sourceType: [ "拍照", "相册", "拍照或相册" ],
        sizeTypeIndex: 2,
        sizeType: [ "压缩", "原图", "原图或压缩" ],
        countIndex: 8,
        count: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
        imageList: wx.getStorageSync("imageList"),
        src: "http://dl.stream.qqmusic.qq.com/C200000NU7383cWdmL.m4a?vkey=E31E70383485A0459D7205BB83D038F37F75AF304BCEA8EF9CBAFB894A6DF31637EAB85BD4DBF49345768B96F6DBF709971AF5AA97D17B9F&guid=5261462800&fromtag=30",
        poster: "http://y.gtimg.cn/music/photo_new/T002R300x300M000002dvsSx27UO6o.jpg?max_age=2592000",
        name: "Until You",
        author: "Shayne Ward"
    },
    onLoad: function() {
        this.setData({
            hasLogin: e.globalData.hasLogin
        });
    },
    getNetworkType: function() {
        var e = this;
        wx.getNetworkType({
            success: function(t) {
                console.log(t), e.setData({
                    hasNetworkType: !0,
                    networkType: t.networkType
                });
            }
        });
    },
    clear: function() {
        this.setData({
            hasNetworkType: !1,
            networkType: ""
        });
    },
    getSystemInfo: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t), e.setData({
                    systemInfo: t
                });
            }
        }), setTimeout(function() {
            e.setData({
                systemInfo: {}
            }), wx.showToast({
                title: "持续3秒,数据已清空",
                duration: 2e3,
                success: function() {
                    console.log("消息提示框API调用成功,持续2秒");
                }
            });
        }, 3e3);
    },
    sourceTypeChange: function(e) {
        console.log(e), this.setData({
            sourceTypeIndex: e.detail.value
        });
    },
    sizeTypeChange: function(e) {
        console.log(e), this.setData({
            sizeTypeIndex: e.detail.value
        });
    },
    countChange: function(e) {
        console.log(e), this.setData({
            countIndex: e.detail.value
        });
    },
    chooseImage: function() {
        var e = this;
        wx.chooseImage({
            sourceType: t[this.data.sourceTypeIndex],
            sizeType: o[this.data.sizeTypeIndex],
            count: this.data.count[this.data.countIndex],
            success: function(t) {
                console.log(t), console.log(t.tempFilePaths), wx.setStorageSync("imageList", t.tempFilePaths), 
                e.setData({
                    imageList: t.tempFilePaths
                }), wx.showModal({
                    title: "上传成功",
                    content: "下次进入应用时，图片仍存在",
                    cancelColor: "red"
                });
            }
        });
    },
    previewImage: function(e) {
        console.log(e);
        var t = e.target.dataset.src;
        wx.previewImage({
            current: t,
            urls: this.data.imageList
        });
    },
    clearFile: function() {
        wx.removeStorageSync("imageList"), this.setData({
            imageList: []
        }), console.log("点击了清除图片按钮");
    },
    login: function() {
        var t = this;
        wx.login({
            success: function(o) {
                console.log(o), e.globalData.hasLogin = !0, t.setData({
                    hasLogin: e.globalData.hasLogin
                });
            }
        });
    },
    getUserInfo: function() {
        var t = this;
        !1 === e.globalData.hasLogin ? wx.showModal({
            title: "还未登录",
            content: "请先登录..."
        }) : wx.getUserInfo({
            success: function(e) {
                console.log(e), t.setData({
                    userInfo: e.userInfo
                });
            }
        });
    },
    previewUser: function(e) {
        var t = e.target.dataset.userImage, o = [];
        o.push(t), wx.previewImage({
            current: t,
            urls: o
        });
    },
    clearUserInfo: function() {
        this.setData({
            userInfo: {}
        });
    },
    payment: function(e) {
        console.log(e);
        var t = this;
        console.log("时间戳：" + t.createTimeStamp()), console.log("随机字符串：" + t.createNonceStr()), 
        wx.requestPayment({
            timeStamp: new Date().getTime(),
            nonceStr: t.createNonceStr(),
            package: "prepay_id=u802345jgfjsdfgsdg888",
            signType: "MD5",
            paySign: "70EA570631E4BB79628FBCA90534C63FF7FADD89",
            success: function(e) {
                console.log("支付成功");
            },
            fail: function(e) {
                console.log("支付失败");
            },
            complete: function() {
                console.log("支付结束");
            }
        }), console.log("支付...");
    },
    createNonceStr: function() {
        return Math.random().toString(36).substr(2, 15);
    },
    createTimeStamp: function() {
        return parseInt(new Date().getTime() / 1e3) + "";
    }
});