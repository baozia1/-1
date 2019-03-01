var t = getApp(), n = 20, o = 1;
var w = "https://www.mmffu.com/";
Page({
  data: {
    current: 0,
    result: [
      {
        id: 0, img: "/images/1.png", title: "南昌麻将基本规则", text: "南昌麻将游戏是江西省南昌地区流行的麻将，南昌麻将与流行于国内其他地区的麻将打法有较大的差异，在长期的游戏实践活动中，形成了自己的鲜明特色。南昌麻将使用无花牌的136张麻将，分别为东、南、西、北，门风东者为庄家，其余均为旁家。 每人手里抓13张牌，通过吃牌、碰牌、杠牌等方式，使手牌按照相关规定的牌型条件和牌。在游戏中对和牌没有要求，和牌者胜，被和牌者负，荒庄时计和局。"
      },
      {
        id: 1, img: "/images/2.png", title: "南昌麻将之埋雷和回雷", text: "埋雷和回头都是南昌麻将的专有玩法"
      },
      {
        id: 2, commend: "1", img: "/images/3.png", title: "南昌麻将“随精”玩法全解析", text: " 1、每场必到，从不迟到早退。↵↵　　说明时间观念强。↵↵　　2、不抱怨、不嫌弃环境：小小几平方，抽烟的、有脚气的、都可接受。↵↵　　说明在通往成功的过程中，忍受一切恶劣环境因素。↵↵　　3、三缺一时心急如麻。↵↵　　说明有团队精神。↵↵　　4、一场输个几千元，脸不红心不跳，输赢一笑而过！今天输了，"
      },
      {
        id: 3, good: "1", img: "/images/4.png", title: "计算庄家14张配牌中有7张精的概率", text: "计算庄家14张配牌中有7张精的概率。"
      },
      {
        id: 4, img: "/images/5.png", title: "南昌麻将照镜子玩法.", text: " 我给大家南昌麻将最大的特色是三张不重复的同类字牌可以组成一副顺子，再加上比全不靠更容易胡的“十三烂”使胡牌更容易；又由于“正精”“副精”的出现，天糊、地糊的出现频度大幅增加。"
      },
      {
        id: 5, commend: "1", good: "1", img: "/images/2.png", title: "麻将技巧", text: " 如何碰牌——碰牌不同于吃牌，因为吃牌毕竟只有一种选择，就是说上家打什么你就吃什么，对碰牌来讲呢除你之外其余三家的牌你都可以碰，这种情况往往会有一种比较不好的后果由其是对于初学者他可能会乱碰一气。我自己打牌的时候就有这种经历在刚学牌的时候特别喜欢碰，有对子这样的话来一碰一个，感觉这样比较容易胡了"
      },
      {
        id: 6, img: "/images/1.png", title: "打麻将防骗技巧之一", text: " 在长期的麻战实战中，对于牌的路数，“老麻师”总结出不少预测的熟语，学习掌握这些熟语，有利于防骗。如，“想碰又不碰，不防一九碰”。它是根据有的地方打麻将规定，用一、九牌当将牌有番，因此，手牌中有一、九牌对子时不会去碰而总结归纳出来的猜牌路数。如图："
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
    t.func.req("/change/doFindStateByName", { acName:"南昌麻将"}, function (t) {
      o.setData({
        data_code: t
      })
    });
    t.func.req("change/doFindImageUrl", { acName: "南昌麻将"}, function (t) {
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
      url: "../news/news?id=" + t.currentTarget.id + "&type=1&title=" + title
    });
  },

  
});