define( ['App',
    'backbone',
    'marionette',
    'jquery',
    'models/StocksModel',
    'hbs!templates/login',
    "views/stocksView",
    "collections/StocksCollection"
],
    function(App,
             Backbone,
             Marionette,
             $,
             Model,
             template,
             childView,
             collection) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.CollectionView.extend({
            collection: new collection(),
            childView: childView,
            events: {
                "click ": 'getStocksID'
            },
            getStocksID: function(e){
                var id = $(e.target).data().id;
                console.log(this.collection.get(id));

                App.vent.trigger('stockModel:getStocks', this.collection.get(id));
            }

        });
    });


