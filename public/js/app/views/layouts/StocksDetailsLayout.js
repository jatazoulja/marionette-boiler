define( ['App', 'backbone', 'marionette', 'jquery', 'models/StocksModel', 'hbs!templates/layout/stocksDetails',
        "views/items/StocksItemsView", "views/items/StocksCandleStickView"],
    function(App, Backbone, Marionette, $, Model, template, StocksItemsView, StocksCandleStickView) {
        //ItemView provides some default rendering logic
        return Marionette.LayoutView.extend({
            className: '',
            template: template,
            regions: {
                stocks: '#stockDetails',
                candle: '#candleStick'
            },
            onShow: function() {
                this.showChildView('stocks', new StocksItemsView());
                this.showChildView('candle', new StocksCandleStickView());
            }
        });

    });

