var e = {
    createNew: function() {
        var e = {};
        return e.level = -1, e.feature = [], e.getLevel = function() {
            return e.level;
        }, e.getFeature = function() {
            return e.feature;
        }, e.setCardType = function(r, t) {
            e.level = r, e.feature = t;
        }, e.singleCompare = function(e, r) {
            var t = (e + 11) % 13, n = (r + 11) % 13;
            return t > n ? 1 : t == n ? 0 : t < n ? -1 : void 0;
        }, e.compareWithAnother = function(r) {
            var t = e.getLevel(), n = r.getLevel(), u = e.getFeature(), a = r.getFeature();
            if (t > n) return 1;
            if (t < n) return -1;
            for (var i = 0; i < u.length; i++) {
                var o = e.singleCompare(u[i], a[i]);
                if (0 != o) return o;
            }
            return 0;
        }, e;
    }
};

module.exports = {
    CardType: e
};