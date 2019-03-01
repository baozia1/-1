Page({
    data: {
        imgUrls: [ "http://img1.xcarimg.com/b63/s7736/c_20160511153957007951768554208.jpg", "http://img1.xcarimg.com/b63/s7736/c_20160511153948903325305587219.jpg", "http://img1.xcarimg.com/b63/s7736/c_20160324172935416694857347161.jpg", "http://img1.xcarimg.com/b63/s7736/c_20160918132004359674866549395.jpg", "http://img1.xcarimg.com/b63/s7736/c_20160918132002131163573867539.jpg", "http://img1.xcarimg.com/b63/s7736/c_20160729071450170685818327422.jpg" ],
        duration: 3e3,
        btn_load: !1,
        plain: !0,
        hidden: !1
    },
    setLoad: function() {
        this.setData({
            btn_load: !this.data.btn_load
        });
    },
    loadingChange: function() {
        var t = this;
        setTimeout(function() {
            t.setData({
                hidden: !0
            });
        }, 1200);
    },
    onLoad: function() {
        this.loadingChange();
    }
});