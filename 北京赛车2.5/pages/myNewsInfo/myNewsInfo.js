Page({
    data: {
        title: "",
        leirong: "",
        imgs: "",
        cingt: []
    },
    onLoad: function(n) {
        var o = this;
        o.setData({
            title: n.title,
            leirong: n.leirong,
            imgs: n.imgs
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});