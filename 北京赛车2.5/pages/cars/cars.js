Page({
    data: {
       
        car_title: [ "法拉利", "捷豹", "凯迪拉克", "劳斯莱斯", "兰博基尼", "雪佛兰", "迈凯伦" ]
    },
    remen_click: function() {
        wx.navigateTo({
            url: "../car_detail/super_car/super_car"
        });
    },
    aodi_click: function() {
        wx.navigateTo({
            url: "../car_detail/ao_di/ao_di"
        });
    }
});