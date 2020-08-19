(function (window){
    'use strict'
    var App = window.App || {};
    var $ = window.jQuery;

    function RollHandler(selector){
        if (!selector){
            throw new Error('No selector provided');
        }

        this.$rollElement = $(selector);
        if (this.$rollElement.length === 0){
            throw new Error('Could not find element with selector: ' + selector)
        }
    }
    
    RollHandler.prototype.addRollHandler = function(cb){
        this.$rollElement.on('click', () => {
            var yourCivs = []
            var $remainingCivs = $('a').find("h5")
            $remainingCivs.each((_, v) => {
                yourCivs.push(v.textContent);
            });

            var myCiv = cb(yourCivs)

            $('p').replaceWith('<p>'+myCiv+'</p>')
            $("#myModal").modal();            
        })
    }

    RollHandler.prototype.getRandomCiv = function (civArr) {
        return civArr[Math.floor(Math.random() * civArr.length)];
    }

    RollHandler.prototype.displayCiv = function () {

    }


    App.RollHandler = RollHandler;
    window.App = App;
})(window);