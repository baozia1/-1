var r = require("./poker.js"), e = require("./cardtype.js"), t = {
    createNew: function() {
        var t = {};
        t.list = new Array(7);
        for (var n = 0; n < t.list.length; n++) t.list[n] = r.Poker.createNew();
        return t.setList = function(r) {
            t.list = r, t.CalculateCardType();
        }, t.cardType = e.CardType.createNew(), t.getCardType = function() {
            return t.cardType;
        }, t.isBiggerThan = function(r) {
            return t.getCardType().compareWithAnother(r.getCardType());
        }, t.hasFigure = function(r) {
            for (var e = 0; e < t.list.length; e++) if (t.list[e].getFigure() == figure) return !0;
            return !1;
        }, t.fourSubList = function() {
            for (var r = new Array(), e = 0; e < 4; e++) {
                var n = new Array();
                r.push(n);
            }
            for (e = 0; e < t.list.length; e++) r[t.list[e].getSuit()].push(t.list[e]);
            return r;
        }, t.figureSubList = function() {
            for (var r = new Array(), e = 0; e < 13; e++) {
                var n = new Array();
                r.push(n);
            }
            for (e = 0; e < t.list.length; e++) r[t.list[e].getFigure() - 1].push(t.list[e]);
            return r;
        }, t.hasFigure = function(r, e) {
            for (var t = 0; t < r.length; t++) if (r[t].getFigure() == e) return !0;
            return !1;
        }, t.hasStraight = function(e) {
            if (e.length < 5) return -1;
            if (t.hasFigure(e, r.pokerCanshu.ACE) && t.hasFigure(e, r.pokerCanshu.KING) && t.hasFigure(e, r.pokerCanshu.QUEEN) && t.hasFigure(e, r.pokerCanshu.JACK) && t.hasFigure(e, r.pokerCanshu.TEN)) return 1;
            for (var n = 13; n >= 5; n--) {
                for (var u = !0, a = n; a > n - 5; a--) if (!t.hasFigure(e, a)) {
                    u = !1;
                    break;
                }
                if (u) return n;
            }
            return -1;
        }, t.CalculateCardType = function() {
            if (-1 != t.hasStraighFlush()) {
                var r = [ t.hasStraighFlush() ];
                t.cardType.setCardType(8, r);
            } else null != t.hasFourOfAKind() ? t.cardType.setCardType(7, t.hasFourOfAKind()) : null != t.hasFullHouse() ? t.cardType.setCardType(6, t.hasFullHouse()) : null != t.hasFlush() ? t.cardType.setCardType(5, t.hasFlush()) : -1 != t.hasStraight(t.list) ? t.cardType.setCardType(4, [ t.hasStraight(t.list) ]) : null != t.hasThreeOfAKind() ? t.cardType.setCardType(3, t.hasThreeOfAKind()) : null != t.hasTwoPairs() ? t.cardType.setCardType(2, t.hasTwoPairs()) : null != t.hasOnePair() ? t.cardType.setCardType(1, t.hasOnePair()) : t.cardType.setCardType(0, t.returnHighCard());
        }, t.hasStraighFlush = function() {
            for (var r = t.fourSubList(), e = 0; e < 4; e++) {
                var n = t.hasStraight(r[e]);
                if (-1 != n) return n;
            }
            return -1;
        }, t.hasFourOfAKind = function() {
            var r = t.figureSubList(), e = new Array(2);
            if (4 != r[0].length) {
                for (u = 12; u >= 1; u--) if (4 == r[u].length) {
                    if (e[0] = u + 1, 0 != r[0].length) return e[1] = 1, e;
                    for (var n = 12; n >= 1; n--) if (n != e[0] - 1 && 0 != r[n].length) return e[1] = n + 1, 
                    e;
                }
                return null;
            }
            e[0] = 1;
            for (var u = 12; u >= 1; u--) if (0 != r[u].length) return e[1] = u + 1, e;
        }, t.hasFullHouse = function() {
            var r = t.figureSubList(), e = new Array(2);
            if (3 == r[0].length) {
                e[0] = 1;
                for (n = 12; n >= 1; n--) if (r[n].length >= 2) return e[1] = n + 1, e;
                return null;
            }
            for (var n = 12; n >= 1; n--) if (3 == r[n].length) {
                if (e[0] = n + 1, 2 == r[0].length) return e[1] = 1, e;
                for (var u = 12; u >= 1; u--) if (u != e[0] - 1 && r[u].length >= 2) return e[1] = u + 1, 
                e;
                return null;
            }
            return null;
        }, t.hasFlush = function() {
            for (var r = t.fourSubList(), e = 0; e < 4; e++) if (r[e].length >= 5) {
                var n = r[e], u = new Array(), a = 5;
                t.hasFigure(n, 1) && (a--, u.push(1));
                for (var i = 13; i > 1 && a > 0; i--) t.hasFigure(n, i) && (a--, u.push(i));
                return u;
            }
            return null;
        }, t.hasThreeOfAKind = function() {
            var r = t.figureSubList(), e = new Array(3);
            if (3 == r[0].length) {
                e[0] = 1;
                for (var n = 1, u = 12; u >= 1 && n <= 2; u--) 0 != r[u].length && (e[n] = u + 1, 
                n++);
                return e;
            }
            for (u = 12; u >= 1; u--) if (3 == r[u].length) {
                e[0] = u + 1;
                n = 1;
                r[0].length >= 0 && (e[n] = 1, n++);
                for (var a = 12; a >= 1 && n <= 2; a--) a != e[0] - 1 && r[a].length >= 1 && (e[n] = a + 1, 
                n++);
                return e;
            }
            return null;
        }, t.hasTwoPairs = function() {
            var r = t.figureSubList(), e = new Array(3);
            if (2 == r[0].length) {
                e[0] = 1;
                for (var n = !1, u = 12; u >= 1; u--) if (2 == r[u].length) {
                    e[1] = u + 1, n = !0;
                    break;
                }
                if (!n) return null;
                for (u = 12; u >= 1; u--) if (u != e[1] - 1 && r[u].length > 0) return e[2] = u + 1, 
                e;
                return null;
            }
            for (u = 12; u >= 1; u--) if (2 == r[u].length) {
                e[0] = u + 1;
                for (var n = !1, a = u - 1; a >= 1; a--) if (2 == r[a].length) {
                    e[1] = a + 1, n = !0;
                    break;
                }
                if (!n) return null;
                if (1 == r[0].length) return e[2] = 1, e;
                for (a = 12; a >= 1; a--) if (a != e[1] - 1 && a != e[0] - 1 && r[a].length > 0) return e[2] = a + 1, 
                e;
            }
            return null;
        }, t.hasOnePair = function() {
            var r = t.figureSubList(), e = new Array(4);
            if (2 == r[0].length) {
                e[0] = 1;
                for (var n = 1, u = 12; u >= 1 && n <= 3; u--) 1 == r[u].length && (e[n] = u + 1, 
                n++);
                return e;
            }
            for (u = 12; u >= 1; u--) if (2 == r[u].length) {
                e[0] = u + 1;
                n = 1;
                1 == r[0].length && (e[n] = 1, n++);
                for (var a = 12; a >= 1 && n <= 3; a--) a != e[0] - 1 && r[a].length > 0 && (e[n] = a + 1, 
                n++);
                return e;
            }
            return null;
        }, t.returnHighCard = function() {
            var r = t.figureSubList(), e = new Array(5), n = 0;
            1 == r[0].length && (e[n] = 1, n++);
            for (var u = 12; u >= 1 && n <= 4; u--) 1 == r[u].length && (e[n] = u + 1, n++);
            return e;
        }, t;
    }
};

module.exports = {
    PokerList: t
};