var o = {
    createNew: function() {
        var o = {};
        o.pool = new Array(52);
        var r = 0;
        for (r = 0; r < 52; r++) o.pool[r] = !0;
        return o.getPool = function() {
            return o.pool;
        }, o.popCardByNum = function(r) {
            o.pool[r] = !1;
        }, o.popCardBySF = function(r, n) {
            var a = 13 * r + figure - 1;
            o.pool[a] = !1;
        }, o.recoveryCardByNum = function(r) {
            o.pool[r] = !0;
        }, o.recoveryCardBySF = function(r, n) {
            var a = 13 * r + figure - 1;
            o.pool[a] = !0;
        }, o.recoveryAll = function() {
            var r = 0;
            for (r = 0; r < 52; r++) o.pool[r] = !0;
        }, o.randomPopCard = function() {
            for (var r = parseInt(52 * Math.random()); !o.pool[r]; ) r = parseInt(52 * Math.random());
            o.popCardByNum(r);
            Math.floor(r / 13);
            return r;
        }, o.CardIsAvailable = function(r, n) {
            var a = 13 * r + n - 1;
            return o.pool[a];
        }, o.CardIsAvailableByNum = function(r) {
            return o.pool[r];
        }, o;
    }
};

module.exports = {
    PokerPool: o
};