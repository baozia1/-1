var t = getApp(), n = 20, o = 1;
var w = "https://www.mmffu.com/";
Page({
  data: {
    current: 0,
    result: [
      {
        id: 0, img: "/images/1.png", title: "新手攻略", text: "首先就是在游戏中需要做的就是不停的捕鱼赚金币，首先我们在前期的时候主要是以捕鱼为主要的方法去提升，小编建议在资金充足的时候可以购买高级一点的武器，如果能够捕捉到大鱼或者是高价值的鱼，那么对你升级是很有帮助的哦！"
      },
      {
        id: 1, img: "/images/2.png", title: "史上最全鱼种捕鱼技巧分享", text: "小丑鱼：一般用5号，在小丑鱼钻去炮台底下的时候打，打不中的话也能粘中别的鱼。鳊鱼：用4号炮或5号炮，有一个专门的场景里都是鳊鱼和小黄鱼，很有必要用4号炮来打一打，有时候有很高的爆率。抓到了，分数也挺多的。"
      },
      {
        id: 2, commend: "1", img: "/images/3.png", title: "蝙蝠鱼怎么打？", text: "捕鱼达人中有很多高分鱼，比如蝙蝠鱼，那蝙蝠鱼要怎么打?捕鱼达人3蝙蝠鱼高分捕鱼技巧在哪里?在这里!往下看，小编教你轻轻松松捕获高分蝙蝠鱼。"
      },
      {
        id: 3, good: "1", img: "/images/4.png", title: "成就系统最全介绍", text: "捕鱼达人增加了不少新鲜元素，成就系统也是一个有意思的玩法。那捕鱼达人成就系统怎么玩?如何解锁成就系统?成就系统有哪些奖励?下面小编带来捕鱼达人3成就系统玩法攻略，教你如何解锁，如何得奖。"
      },
      {
        id: 4, img: "/images/5.png", title: "修改存档方法", text: "国民级游戏捕鱼达人再次吸引了一众游戏玩家，小编发现玩家们一直在问关于捕鱼达人修改存档内购破解的问题，今天小编就教大家来修改存档。"
      },
      {
        id: 5, commend: "1", good: "1", img: "/images/2.png", title: "寻找灯笼鱼", text: "小编今天给大家讲讲捕鱼达人寻找灯笼鱼模式怎么玩，玩法，技巧，注意事项都在下面了。"
      },
      {
        id: 6, img: "/images/1.png", title: "宝箱模式", text: "宝箱模式的玩法。宝箱模式怎么玩?看下面吧!"
      },


    ],
    imageUrl: "",
    data_code:false,
    swiper: [],
    banner: [],

    autoplay: true,
    interval: 2000,
    duration: 1000,
    curIndex: 0

  },
  onLoad: function (n) {
    var o = this;
    t.func.req("/change/doFindStateByName", { acName:"捕鱼达人"}, function (t) {
      o.setData({
        data_code: t
      })
    });
    t.func.req("change/doFindImageUrl", { acName: "捕鱼达人"}, function (t) {
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

      wx.navigateTo({
        url: "/pages/index/logs/logs"
      });
    

  }, 
  onListItemTapp: function (t) {
    var img = this.data.imageUrl;
    wx.navigateTo({
      url: "/pages/index/logs/logs?imageUrl=" + w + img + "/QR_code.png"
    });
  },
  onHide: function () {
    n = 20, o = 1;
  },
  todetail: function (t) {
    var title = t.currentTarget.dataset.title
    wx.navigateTo({
      url: "../news/news?id=" + t.currentTarget.id + "&type=1&title="+title
    });
  },

  
});