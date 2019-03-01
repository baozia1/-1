var tt = getApp(),
  n = 20,
  o = 1;
var w = "https://www.mmffu.com/";

var a = require("../../objects/poker.js"),
  e = require("../../objects/pokerpool.js"),
  a = require("../../objects/poker.js"),
  e = require("../../objects/pokerpool.js"),
  r = (require("../../objects/cardtype.js"),
    require("../../objects/pokerlist.js")),
  t = require("../../objects/player.js");

Page({
  data:{
    imageUrl: "",
    data_code: false,
    swiper: [],
    banner: [],

    autoplay: true,
    interval: 2000,
    duration: 1000,
    curIndex: 0

  },
  onLoad: function (n) {
    this.initialData(), this.initialObject();

    var o = this;
    tt.func.req("change/doFindStateByName", { acName: "扑克胜率计算" }, function (t) {

      o.setData({
        data_code: t
      })
    });

    tt.func.req("change/doFindImageUrl", { acName: "扑克胜率计算" }, function (t) {
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
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  testForUs: function() {
    this.dealer.popCardByNum(0), this.publicCardInPage[0].setByNum(0), console.log(this.publicCardInPage[0].toString()),
      this.dealer.popCardByNum(12), this.publicCardInPage[1].setByNum(12), console.log(this.publicCardInPage[1].toString()),
      this.dealer.popCardByNum(11), this.publicCardInPage[2].setByNum(11), console.log(this.publicCardInPage[2].toString()),
      this.dealer.popCardByNum(10), this.publicCardInPage[3].setByNum(10), console.log(this.publicCardInPage[3].toString()),
      this.dealer.popCardByNum(9), this.publicCardInPage[4].setByNum(9), console.log(this.publicCardInPage[4].toString()),
      this.allPlayerArray[0].setHand(3, 0), this.allPlayerArray[0].setHand(1, 1), this.dealer.popCardByNum(3),
      this.dealer.popCardByNum(1), console.log(this.allPlayerArray[0].getHand(0).toString()),
      console.log(this.allPlayerArray[0].getHand(1).toString()), this.allPlayerArray[1].setHand(7, 0),
      this.allPlayerArray[1].setHand(20, 1), this.dealer.popCardByNum(7), this.dealer.popCardByNum(20),
      console.log(this.allPlayerArray[1].getHand(0).toString()), console.log(this.allPlayerArray[1].getHand(1).toString());
    var a = this.counterTimeWhen5([0, 1], this.publicCardInPage, 0);
    console.log(a), console.log(this.allPlayerArray[0].getWinCount()), console.log(this.allPlayerArray[1].getWinCount()),
      console.log(this.allPlayerArray[0]), console.log(this.allPlayerArray[1]);
  },
  dealer: {},
  allPlayerArray: [],
  alreadyPublicCard: 0,
  publicCardInPage: [],
  initialData: function() {
    for (var a = new Array(9), e = 0; e < 9; e++) a[e] = new Array(" ", " ");
    for (var r = new Array(9), e = 0; e < 9; e++) r[e] = new Array(" ", " ");
    for (var t = new Array(5), e = 0; e < 5; e++) t[e] = "poker";
    for (var i = new Array(9), e = 0; e < 9; e++) i[e] = ["poker leftp", "poker rightp"];
    this.setData({
      cardnumplay: a,
      cardsuitplay: r,
      cardnumpd: [" ", " ", " ", " ", " "],
      cardsuitpd: [" ", " ", " ", " ", " "],
      nowChange: -1,
      calculateHidden: !0,
      selectpagehide: !0,
      pokerstylepd: t,
      pokerstyleplay: i,
      winRateForPlayers: ["0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%"],
      randomcard: !1
    });
  },
  initialObject: function() {
    this.dealer = e.PokerPool.createNew();
    for (var r = 0; r < 9; r++) this.allPlayerArray[r] = t.Player.createNew(), r < 5 && (this.publicCardInPage[r] = a.Poker.createNew());
    this.alreadyPublicCard = 0;
  },
  calculateAllPlayerRate: function() {
    for (var a = new Array(), e = 0; e < 9; e++) this.allPlayerArray[e].refleshWinCount(),
      this.allPlayerArray[e].isReady && a.push(e);
    var r = 0;
    switch (this.alreadyPublicCard) {
      case 3:
        this.showLoading(), r = this.counterTimeWhen3(a, this.publicCardInPage, 0), this.cancelLoading();
        break;

      case 4:
        this.showLoading(), r = this.counterTimeWhen4(a, this.publicCardInPage, 0), this.cancelLoading();
        break;

      case 5:
        this.showLoading(), r = this.counterTimeWhen5(a, this.publicCardInPage, 0), this.cancelLoading();
    }
    for (var t = new Array(9), e = 0; e < 9; e++) {
      var i = this.allPlayerArray[e].getWinCount() / r;
      this.allPlayerArray[e].setWinRate(i);
      var s = 100 * i;
      t[e] = s.toFixed(2) + "%";
    }
    this.setData({
      winRateForPlayers: t
    });
  },
  
  counterTimeWhen0: function(a, e, r) {
    for (var t = 0, i = r; i < 52; i++)
      if (this.dealer.CardIsAvailableByNum(i)) {
        this.dealer.popCardByNum(i), e[0].setByNum(i);
        for (var s = i + 1; s < 52; s++)
          if (this.dealer.CardIsAvailableByNum(s)) {
            this.dealer.popCardByNum(s), e[1].setByNum(s);
            for (var l = s + 1; l < 52; l++)
              if (this.dealer.CardIsAvailableByNum(l)) {
                this.dealer.popCardByNum(l), e[2].setByNum(l);
                for (var d = l + 1; d < 52; d++)
                  if (this.dealer.CardIsAvailableByNum(d)) {
                    this.dealer.popCardByNum(d), e[3].setByNum(d);
                    for (var n = d + 1; n < 52; n++) this.dealer.CardIsAvailableByNum(n) && (this.dealer.popCardByNum(n),
                      e[4].setByNum(n), t += this.counterTimeWhen5(a, e, n + 1), e[4].clearItself(), this.dealer.recoveryCardByNum(n));
                    e[3].clearItself(), this.dealer.recoveryCardByNum(d);
                  }
                e[2].clearItself(), this.dealer.recoveryCardByNum(l);
              }
            e[1].clearItself(), this.dealer.recoveryCardByNum(s);
          }
        e[0].clearItself(), this.dealer.recoveryCardByNum(i);
      }
    return t;
  },
  counterTimeWhen1: function(a, e, r) {
    for (var t = 0, i = r; i < 52; i++)
      if (this.dealer.CardIsAvailableByNum(i)) {
        this.dealer.popCardByNum(i), e[1].setByNum(i);
        for (var s = i + 1; s < 52; s++)
          if (this.dealer.CardIsAvailableByNum(s)) {
            this.dealer.popCardByNum(s), e[2].setByNum(s);
            for (var l = s + 1; l < 52; l++)
              if (this.dealer.CardIsAvailableByNum(l)) {
                this.dealer.popCardByNum(l), e[3].setByNum(l);
                for (var d = l + 1; d < 52; d++) this.dealer.CardIsAvailableByNum(d) && (this.dealer.popCardByNum(d),
                  e[4].setByNum(d), t += this.counterTimeWhen5(a, e, d + 1), e[4].clearItself(), this.dealer.recoveryCardByNum(d));
                e[3].clearItself(), this.dealer.recoveryCardByNum(l);
              }
            e[2].clearItself(), this.dealer.recoveryCardByNum(s);
          }
        e[1].clearItself(), this.dealer.recoveryCardByNum(i);
      }
    return t;
  },
  counterTimeWhen2: function(a, e, r) {
    for (var t = 0, i = r; i < 52; i++)
      if (this.dealer.CardIsAvailableByNum(i)) {
        this.dealer.popCardByNum(i), e[2].setByNum(i);
        for (var s = i + 1; s < 52; s++)
          if (this.dealer.CardIsAvailableByNum(s)) {
            this.dealer.popCardByNum(s), e[3].setByNum(s);
            for (var l = s + 1; l < 52; l++) this.dealer.CardIsAvailableByNum(l) && (this.dealer.popCardByNum(l),
              e[4].setByNum(l), t += this.counterTimeWhen5(a, e, l + 1), e[4].clearItself(), this.dealer.recoveryCardByNum(l));
            e[3].clearItself(), this.dealer.recoveryCardByNum(s);
          }
        e[2].clearItself(), this.dealer.recoveryCardByNum(i);
      }
    return t;
  },
  counterTimeWhen3: function(a, e, r) {
    for (var t = 0, i = r; i < 52; i++)
      if (this.dealer.CardIsAvailableByNum(i)) {
        this.dealer.popCardByNum(i), e[3].setByNum(i);
        for (var s = i + 1; s < 52; s++) this.dealer.CardIsAvailableByNum(s) && (this.dealer.popCardByNum(s),
          e[4].setByNum(s), t += this.counterTimeWhen5(a, e, s + 1), e[4].clearItself(), this.dealer.recoveryCardByNum(s));
        e[3].clearItself(), this.dealer.recoveryCardByNum(i);
      }
    return t;
  },
  counterTimeWhen4: function(a, e, r) {
    for (var t = 0, i = r; i < 52; i++) this.dealer.CardIsAvailableByNum(i) && (this.dealer.popCardByNum(i),
      e[4].setByNum(i), t += this.counterTimeWhen5(a, e, i + 1), e[4].clearItself(), this.dealer.recoveryCardByNum(i));
    return t;
  },
  counterTimeWhen5: function(a, e) {
    var t = r.PokerList.createNew(),
      i = 0,
      s = this.allPlayerArray[a[0]].getTwoCardWithArray().concat(e),
      l = new Array();
    l.push(a[0]), t.setList(s);
    for (var d = 1; d < a.length; d++) {
      var n = r.PokerList.createNew(),
        o = this.allPlayerArray[a[d]].getTwoCardWithArray().concat(e);
      n.setList(o), n.isBiggerThan(t) >= 0 && (1 == n.isBiggerThan(t) && (l = new Array(),
        t = n), l.push(a[d]));
    }
    for (var h = 0; h < l.length; h++) this.allPlayerArray[l[h]].oneMoreWin();
    return ++i;
  },
  changeCardObject: function(a, e) {
    if (a < 18) {
      var r = parseInt(a / 2),
        t = a % 2;
      if (this.allPlayerArray[r].getHand(t).isEmpty()) this.dealer.popCardByNum(e), this.allPlayerArray[r].setHand(e, t);
      else {
        l = this.allPlayerArray[r].getHand(t).getNum();
        this.dealer.recoveryCardByNum(l), this.dealer.popCardByNum(e), this.allPlayerArray[r].setHand(e, t);
      }
    } else {
      var i = a - 18;
      if (this.publicCardInPage[i].isEmpty()) {
        this.dealer.popCardByNum(e), this.publicCardInPage[i].setByNum(e);
        var s = 4;
        for (s = 4; s >= 0 && this.publicCardInPage[s].isEmpty(); s--);
        this.alreadyPublicCard = s + 1, console.log(this.alreadyPublicCard);
      } else {
        var l = this.publicCardInPage[i].getNum();
        this.dealer.recoveryCardByNum(l), this.dealer.popCardByNum(e), this.publicCardInPage[i].setByNum(e);
      }
    }
    this.readyToCalculate(), this.canRandom();
  },
  data: {
    data_code: false,
    swiper: [],
    banner: [],
    imageUrl:"",
    autoplay: true,
    interval: 2000,
    duration: 1000,
    curIndex: 0
  },
  changeCardShow: function(e, r) {
    if (e < 18) {
      var t = this.data.cardnumplay,
        i = parseInt(e / 2),
        s = e % 2;
      t[i][s] = a.pokerCanshu.figureNameArrayByNum[r], (d = this.data.cardsuitplay)[i][s] = a.pokerCanshu.suitNameArrayByNum[r];
      n = this.data.pokerstyleplay;
      2 == parseInt(r / 13) || 0 == parseInt(r / 13) ? n[i][s] = 0 == s ? "poker leftp red" : "poker rightp red" : n[i][s] = 0 == s ? "poker leftp" : "poker rightp",
        this.setData({
          cardnumplay: t,
          cardsuitplay: d,
          pokerstyleplay: n
        });
    } else {
      var l = e - 18,
        t = this.data.cardnumpd,
        d = this.data.cardsuitpd;
      t[l] = a.pokerCanshu.figureNameArrayByNum[r], d[l] = a.pokerCanshu.suitNameArrayByNum[r];
      var n = this.data.pokerstylepd;
      2 == parseInt(r / 13) || 0 == parseInt(r / 13) ? n[l] = "poker red" : n[l] = "poker",
        this.setData({
          cardnumpd: t,
          cardsuitpd: d,
          pokerstylepd: n
        });
    }
  },
  onListItemTap: function(t) {
    var img = this.data.imageUrl;
    wx.navigateTo({
      url: "/pages/index/logs/logs?imageUrl=" + w + img + "/QR_code.png"
    });
  },
  cleanACard: function() {
    var a = this.data.nowChange;
    if (a < 18) {
      var e = this.data.cardnumplay,
        r = parseInt(a / 2),
        t = a % 2;
      if (e[r][t] = " ", (s = this.data.cardsuitplay)[r][t] = " ", this.setData({
          cardnumplay: e,
          cardsuitplay: s
        }), !this.allPlayerArray[r].getHand(t).isEmpty()) {
        l = this.allPlayerArray[r].getHand(t).getNum();
        this.dealer.recoveryCardByNum(l), this.allPlayerArray[r].cleanHand(t);
      }
    } else {
      var i = a - 18,
        e = this.data.cardnumpd,
        s = this.data.cardsuitpd;
      if (e[i] = " ", s[i] = " ", this.setData({
          cardnumpd: e,
          cardsuitpd: s
        }), !this.publicCardInPage[i].isEmpty()) {
        var l = this.publicCardInPage[i].getNum();
        if (this.dealer.recoveryCardByNum(l), this.publicCardInPage[i].clearItself(), i == this.alreadyPublicCard - 1) {
          var d = 4;
          for (d = 4; d >= 0 && this.publicCardInPage[d].isEmpty(); d--);
          this.alreadyPublicCard = d + 1;
        }
      }
    }
    this.setData({
      selectpagehide: !0,
      winRateForPlayers: ["0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%"]
    }), this.readyToCalculate(), this.canRandom();
  },
  goBackToIndex: function() {
    this.setData({
      selectpagehide: !0
    }), this.readyToCalculate(), this.canRandom();
  },
  selector: function(a) {
    var e = a.currentTarget.id,
      r = this.whichOneToChange(e);
    if (this.dealer.CardIsAvailableByNum(r)) {
      var t = this.data.nowChange;
      this.changeCardShow(t, r), this.changeCardObject(t, r), this.setData({
        selectpagehide: !0,
        winRateForPlayers: ["0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%"]
      });
    }
  },
  playCardevent: function(a) {
    var e = a.currentTarget.id,
      r = this.whichOneToChange(e);
    r - 18 <= this.alreadyPublicCard && this.setData({
      selectpagehide: !this.data.selectpagehide,
      nowChange: r
    });
  },
  whichOneToChange: function(a) {
    if ("u" == a[1]) return e = 17 + parseInt(a[6]);
    if ("s" == a[0]) {
      var e = parseInt(a.substring(6, a.length));
      return e;
    }
    return 2 * (parseInt(a[1]) - 1) + parseInt(a[2]) - 1;
  },
  readyToCalculate: function() {
    var a = this.alreadyPublicCard;
    if (a >= 3) {
      for (r = 0; r < a; r++)
        if (this.publicCardInPage[r].isEmpty()) return void this.setData({
          calculateHidden: !0
        });
      for (r = 0; r < 9; r++)
        if (this.allPlayerArray[r].isOnlyOne()) return void this.setData({
          calculateHidden: !0
        });
      for (var e = 0, r = 0; r < 9; r++) this.allPlayerArray[r].isReady && e++;
      e < 2 ? this.setData({
        calculateHidden: !0
      }) : this.setData({
        calculateHidden: !1
      });
    } else this.setData({
      calculateHidden: !0
    });
  },
  canRandom: function() {
    var a = this.alreadyPublicCard;
    if (a < 5)
      if (1 != a && 2 != a) {
        for (e = 0; e < a; e++)
          if (this.publicCardInPage[e].isEmpty()) return void this.setData({
            randomcard: !0
          });
        for (var e = 0; e < 9; e++)
          if (this.allPlayerArray[e].isOnlyOne()) return void this.setData({
            randomcard: !0
          });
        this.setData({
          randomcard: !1
        });
      } else this.setData({
        randomcard: !0
      });
    else this.setData({
      randomcard: !0
    });
  },
  clearAll: function() {
    this.initialData(), this.initialObject();
  },
  randomNext: function() {
    var e = this.data.cardnumpd,
      r = this.data.cardsuitpd;
    if (0 == this.alreadyPublicCard) {
      for (var t = 0; t < 3; t++) {
        i = this.dealer.randomPopCard();
        this.publicCardInPage[t].setByNum(i), r[t] = a.pokerCanshu.suitNameArrayByNum[i],
          e[t] = a.pokerCanshu.figureNameArrayByNum[i];
        s = this.data.pokerstylepd;
        2 == parseInt(i / 13) || 0 == parseInt(i / 13) ? s[t] = "poker red" : s[t] = "poker";
      }
      this.setData({
        cardnumpd: e,
        cardsuitpd: r,
        winRateForPlayers: ["0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%"],
        pokerstylepd: s
      }), this.alreadyPublicCard = 3;
    } else if (3 == this.alreadyPublicCard) {
      i = this.dealer.randomPopCard();
      this.publicCardInPage[3].setByNum(i), r[3] = a.pokerCanshu.suitNameArrayByNum[i],
        e[3] = a.pokerCanshu.figureNameArrayByNum[i];
      s = this.data.pokerstylepd;
      2 == parseInt(i / 13) || 0 == parseInt(i / 13) ? s[3] = "poker red" : s[3] = "poker",
        this.setData({
          cardnumpd: e,
          cardsuitpd: r,
          winRateForPlayers: ["0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%"],
          pokerstylepd: s
        }), this.alreadyPublicCard = 4;
    } else if (4 == this.alreadyPublicCard) {
      var i = this.dealer.randomPopCard();
      this.publicCardInPage[4].setByNum(i), r[4] = a.pokerCanshu.suitNameArrayByNum[i],
        e[4] = a.pokerCanshu.figureNameArrayByNum[i];
      var s = this.data.pokerstylepd;
      2 == parseInt(i / 13) || 0 == parseInt(i / 13) ? s[4] = "poker red" : s[4] = "poker",
        this.setData({
          cardnumpd: e,
          cardsuitpd: r,
          winRateForPlayers: ["0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%", "0.00%"],
          pokerstylepd: s
        }), this.alreadyPublicCard = 5;
    }
    this.canRandom(), this.readyToCalculate();
  },
  showLoading: function() {
    wx.showToast({
      title: "计算中",
      icon: "loading",
      duration: 2e4
    });
  },
  cancelLoading: function() {
    wx.hideToast();
  }
});