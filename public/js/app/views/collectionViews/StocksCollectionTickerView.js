define( ['App',
        'backbone',
        'marionette',
        'jquery',
        'models/StocksTickerModel',
        'hbs!templates/stocks/ticker_layout_cont',
        "views/items/ticker",
        "collections/StocksTickerCollection"
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
            className: "row",
            render: function() {
                var _this = this;
                this.constructor.__super__.render.apply(this, arguments);
                setInterval(function() {
                    _this.$el.css({left:  _this.$el.offset().left-20})
                }, 5000);
                setInterval(function() {
                    _this.collection.fetch();
                }, 60000)
            },
/*
            events: {
                "click ": 'getStocksID'
            },
*/
            getStocksID: function(e){
                var id = $(e.target).data().id;
                console.log(this.collection.get(id));
            }

        });
    });


