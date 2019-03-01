var e = require("./poker.js"), n = (require("./pokerpool.js"), require("./cardtype.js"), 
require("./pokerlist.js"), {
    createNew: function() {
        var n = {};
        return n.winRate = 0, n.hand1 = e.Poker.createNew(), n.hand2 = e.Poker.createNew(), 
        n.isReady = !1, n.count = 0, n.getWinRateWithPercent = function() {
            return (100 * n.winRate).toFixed(2);
        }, n.getHand = function(e) {
            return 0 == e ? n.hand1 : n.hand2;
        }, n.getTwoCardWithArray = function() {
            var e = new Array(2);
            return e[0] = n.getHand(0), e[1] = n.getHand(1), e;
        }, n.getWinCount = function() {
            return n.count;
        }, n.refleshWinCount = function() {
            n.count = 0;
        }, n.setWinRate = function(e) {
            n.winRate = e;
        }, n.setHand = function(e, t) {
            0 == t ? n.hand1.setByNum(e) : n.hand2.setByNum(e), n.reflashReady();
        }, n.cleanHand = function(e) {
            0 == e ? n.hand1.clearItself() : n.hand2.clearItself(), n.reflashReady();
        }, n.reflashReady = function() {
            n.hand1.isEmpty() || n.hand2.isEmpty() ? n.isReady = !1 : n.isReady = !0;
        }, n.isOnlyOne = function() {
            return !(n.hand1.isEmpty() || !n.hand2.isEmpty()) || !(!n.hand1.isEmpty() || n.hand2.isEmpty());
        }, n.clearAllFeature = function() {
            n.winRate = 0, n.hand1 = e.Poker.createNew(), n.hand2 = e.Poker.createNew(), n.isReady = !1, 
            n.count = 0;
        }, n.oneMoreWin = function() {
            n.count = n.count + 1;
        }, n;
    }
});

module.exports = {
    Player: n
};