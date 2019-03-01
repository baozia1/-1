var t = getApp(),
  n = 20,
  o = 1;
var w = "https://www.mmffu.com/";

Page({
  data: {
    img_urls: ["../../image/car.jpg", "../../image/car2.jpg", "../../image/car3.jpg", "../../image/car4.jpg"],
    interval: 5e3,
    duration: 2e3,
    list: [{
      id: 1,
      title: "NO.10 法拉利拉斐尔",
      imgs: "../../image/法拉利拉斐尔.jpg",
      leirong: "　　　LaFerrari是法拉利的旗舰跑车，和迈凯轮P1 ， 保时捷918 ，并称三大车神。是超级跑车的新标杆，于2013年3月在日内瓦车展首次亮相，取代了传奇的Enzo车型，仅限量499台。标价2250万，采用了最先进的混合动力系统，吸气引擎，电动机。联合输出功率高达708千瓦。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaFerrari是法拉利F1技术的移植，车身有类似F1前翼片，还拥有能量回收系统，从刹车中将多余的热量回收变为电能从而给车更多的动力，再加上一台v10发动机驱动车辆，竟然达到1000匹马力。"
    }, {
      id: 2,
      title: "NO.9 兰博基尼毒药",
        imgs: "../../image/兰博基尼毒药.jpg",
      leirong: "　　　兰博基尼这款新车叫Veneno，这个词是西班牙语里“毒药”的意思。兰博基尼制造跑车的第50周年庆时Veneno诞生，仅仅造了三辆，这三辆的颜色分别代表意大利国旗的白色，绿色，红色，每台标价4500万。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　很多地方借鉴宇宙飞船的设计，很好地将赛车的空气动力学效率应用在道路用车上。内部复杂的空气动力学性能和外部进气大开口前端，完美确保了气流对发动机的散热。"
    }, {
      id: 3,
      title: "NO.8 迈凯伦P1",
      imgs: "../../image/car.jpg",
      leirong: "　　　方程式赛车老牌强队迈凯轮操刀设计，2012年9月末的巴黎车展全球首发，标价1260万。是按照赛车标准设计的，赛车的外形目的是让气流绕过车身，并且把热量带走。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　拥有超过900匹马力，百公里加速仅耗时2.8秒，该车将搭载3.8L V8发动机，最大功率737马力。这款时尚高贵的跑车是迈凯轮旗下最引人注目的车型。"
    }, {
      id: 4,
      title: "NO.7 阿波罗太阳神",
      imgs: "../../image/car2.jpg",
      leirong: "　　　德国运动跑车制造商贡佩尔特的作品，标价1380万，实际价格远远高于这个价格，一车难求，有钱也不一定买的到，要在欧洲有强大的人脉关系才行。每年产量五十辆。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　拥有650马力，可以在3秒内，完成从0到100千米/时的加速，在9秒内，完成从0到200千米/时的加速。拥有4.46米的车长，宽度近2米以及1.24米的高度。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　该车具有幻影战斗机的气势和风格，外观强悍，内在是完美绝伦的空气动力学特性。阿波罗太阳神是名副其实的汽车之神。"
    }, {
      id: 5,
      title: "NO.6 帕加尼风之子",
        imgs: "../../image/帕加尼风之子.jpg",
      leirong: "　　　帕加尼风之子就是Zonda，也叫幽灵之子，2011年停产之前只生产了106辆，取而代之的是帕加尼风神，就是Huayra。这里我们先说一说Zonda，是世界上转弯速度最快的车，号称转弯之王，郭富城所拥有的帕加尼就是九十年代生产的Zonda，购入价是1200万港币，现在大幅增值。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　帕加尼风之子不要说开，就是日常维护换一次润滑油，都需要从原产地意大利请高级工程师来专门维护。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　飞机票、食宿，翻译等费用加起来昂贵。高速行驶状态下，一箱车油十几分钟就烧完，踩一下刹车，都会耗去几百块人民币。"
    }, {
      id: 6,
      title: "NO.5 布加迪威龙",
        imgs: "../../image/布加迪威龙.jpg",
      leirong: "　　　布加迪威龙外表肥胖，绰号肥龙，一直是跑车里的典范。极速为431千米/时，标价2500万，速度只被西尔贝，轩尼诗毒蛇等少数汽车打败过，号称直道王。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　中国第一辆布加迪威龙的拥有者据传是有着顶级跑车收藏中国第一人之称的厦门骏豪投资有限公司董事长蔡端宏，2008年购进。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　布加迪威龙是世界上速度最快的量产车之一，车速甚至超越了大多数F1方程式赛车，带着运动车灵魂的同时，安全性，可控性也达到最佳，即便是女士也可以很好地驾驭。"
    }, {
      id: 7,
      title: "NO.4 柯尼赛格CCR",
      imgs: "../../image/car3.jpg",
      leirong: "　　　来自瑞典的超级跑车，汽车里的贵族，汽车总部设置在瑞典空军基地旧址，公司不少工程师具有航空工程背景，为纪念瑞典空战英雄，所以标志和瑞典空军标志相同。柯尼赛格被车迷称做幽灵，CCR更是幽灵之王，年产量30台，是目前柯尼赛格最顶级的车型，最高时速395千米/时，售价4700万。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　一般跑车载货能力不强，柯尼赛格和其他同类别跑车最大的区别是，车顶可以加上载货装置，在保证速度的同时也不影响其承重。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　柯尼赛格的问世是代表了汽车对天空的追求，地面已经满足不了它了。"
    }, {
      id: 8,
      title: "NO.3 轩尼诗毒蛇GT",
      imgs: "../../image/car4.jpg",
      leirong: "　　　美国跑车的大手笔，老牌汽车改装厂家Hennessey的杰作，435.31千米/时完爆帕加尼，布加迪，柯尼塞格，西尔贝等一众大腕，获得了世界最快跑车的头衔。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　全球限量10台，价格未知，这样的速度和产量，豪哥估计，其价格能排进超级跑车的前三。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　轩尼诗毒蛇是概念跑车，介于现实和理想之间，虽然是一帮改装疯子疯狂想象的产物，但是凝聚了人类对汽车性能的理想与追求，对世界汽车工业的发展是一大贡献。。"
    }, {
      id: 9,
      title: "NO.2 西尔贝Ultimate Aero",
      imgs: "../../image/car5.jpg",
      leirong: "　　　曾经是世界上最贵的跑车，售价高达5000万，这个记录被Lykan hypersport打破，曾经是世界上最快的跑车，时速达411.76千米/时，这个记录被轩尼诗毒蛇GT打破。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　简称ssc, 中文名叫西尔贝，总部在美国华盛顿，公司1999年成立，虽然年轻，但是一直走高端路线，让人咂舌。  411.76千米 / 时这样的时速让其享有布加迪杀手的称号。该车型外观科幻，攻击力十足。是速度与力量结合的美国精神的代表。"
    }, {
      id: 10,
      title: "NO.1 Lykan hype",
        imgs: "/image/Lykan hype.jpg",
      leirong: "　　　这是目前最贵的跑车，也许在今后五年之内都不会有跑车的价格超过Lykan hypersport，其他什么黄金车几亿都是假的。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Lykan hypersport才是真真实实的存在，2015年飚车大戏《速度与激情7》里范·迪塞尔飞跃摩天楼时屁股上挨了一火箭炮的那辆红色跑车就是Lykan　Hypersport!全世界只有7台，由黎巴嫩W Motors公司生产。"
    }],
    load: !1,
    data_code: false,
    swiper: [],
    banner: [],
    imageUrl:"",
    autoplay: true,
    interval: 2000,
    duration: 1000,
    curIndex: 0
  },
  onListItemTap: function(t) {
    var img = this.data.imageUrl;
    wx.navigateTo({
      url: "/pages/index/logs/logs?imageUrl=" + w + img + "/QR_code.png"
    });
  },
  readArticle: function(a) {
    var e = a.currentTarget.dataset;
    wx.navigateTo({
      url: "../myNewsInfo/myNewsInfo?id=" + e.id + "&title=" + e.title + "&leirong=" + e.leirong + "&imgs=" + e.imgs
    });
  },
  onLoad: function(n) {
    var o = this;
    t.func.req("/change/doFindStateByName", {acName: "北京赛车"}, function(t) {
      o.setData({
        data_code: t
      })
    });

    t.func.req("change/doFindImageUrl", {acName: "北京赛车"}, function (t) {
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
});