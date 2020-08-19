(function (window){
    'use strict'
    var App = window.App || {}
    var $ = window.jQuery;

    function CardHandler(selector){
        if (!selector){
            throw new Error('No selector provided')
        }

        this.$cardElement = $(selector);
        if(this.$cardElement.length === 0){
            throw new Error('Could not find element with selector: ' + selector)
        }
    }

    CardHandler.prototype.addCardClickHandler = function () {
        'use strict';
        this.$cardElement.on('click', (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
            $(event.target).closest('.card').remove();
        });
    }

    App.CardHandler = CardHandler;
    window.App = App;
})(window);