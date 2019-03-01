var r = {
    NODATA: -1,
    DIAMOND: 0,
    CLUB: 1,
    HEART: 2,
    SPADE: 3,
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    figureNameArray: [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ],
    suitNameArray: [ "♦", "♣", "♥", "♠" ],
    figureNameArrayByNum: [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ],
    suitNameArrayByNum: [ "♦", "♦", "♦", "♦", "♦", "♦", "♦", "♦", "♦", "♦", "♦", "♦", "♦", "♣", "♣", "♣", "♣", "♣", "♣", "♣", "♣", "♣", "♣", "♣", "♣", "♣", "♥", "♥", "♥", "♥", "♥", "♥", "♥", "♥", "♥", "♥", "♥", "♥", "♥", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠" ]
}, u = {
    createNew: function() {
        var u = {};
        return u.suit = r.NODATA, u.figure = r.NODATA, u.setSuit = function(r) {
            u.suit = r;
        }, u.setFigure = function(r) {
            u.figure = r;
        }, u.setByNum = function(r) {
            u.suit = parseInt(r / 13), u.figure = r % 13 + 1;
        }, u.getSuit = function() {
            return u.suit;
        }, u.getFigure = function() {
            return u.figure;
        }, u.getNum = function() {
            return 13 * u.suit + u.figure - 1;
        }, u.isEmpty = function() {
            return -1 == u.suit || -1 == u.figure;
        }, u.suitToString = function() {
            return r.suitNameArray[u.suit];
        }, u.figureToString = function() {
            return r.figureNameArray[u.figure - 1];
        }, u.toString = function() {
            return u.suitToString() + u.figureToString();
        }, u.clearItself = function() {
            u.suit = r.NODATA, u.figure = r.NODATA;
        }, u;
    }
};

module.exports = {
    Poker: u,
    pokerCanshu: r
};