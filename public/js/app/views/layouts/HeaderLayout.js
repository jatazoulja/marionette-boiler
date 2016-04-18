define( ['App', 'backbone', 'marionette', 'jquery', 'models/StocksModel', 'hbs!templates/desktopHeader',
        "views/collectionViews/StocksCollectionTickerView"],
    function(App, Backbone, Marionette, $, Model, template, StocksCollectionTickerView) {
        //ItemView provides some default rendering logic
        return Marionette.LayoutView.extend({
            className: 'row',
            template: template,
            regions: {
                ticker: '#stockTicker'
            },
            onShow: function() {
                this.showChildView('ticker', new StocksCollectionTickerView());
            }
        });

    });


