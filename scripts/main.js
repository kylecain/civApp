(function (window){
    'use strict';
    var App = window.App;
    var CARD_SELECTOR = '[data-image-role="trigger"]'
    var BUTTON_SELECTOR = '[data-btn-role="roll"]'
    var CardHandler = App.CardHandler;
    var RollHandler = App.RollHandler;

    var cardhandler = new CardHandler(CARD_SELECTOR);
    cardhandler.addCardClickHandler();

    var rollHandler = new RollHandler(BUTTON_SELECTOR);
    rollHandler.addRollHandler(rollHandler.getRandomCiv);

})(window);