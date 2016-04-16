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

        });
    });


