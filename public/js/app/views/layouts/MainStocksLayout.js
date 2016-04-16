define( ['App', 'backbone', 'marionette', 'jquery', 'models/StocksModel', 'hbs!templates/layout/stocks',
    "views/collectionViews/StocksCollectionView", "views/items/StocksItemsView"],
    function(App, Backbone, Marionette, $, Model, template, StocksCollectionView, StocksItemsView) {
        //ItemView provides some default rendering logic
        return Marionette.LayoutView.extend({
            className: 'row',
            template: template,
            regions: {
                list: '#list',
                details: '#details'
            },
            onShow: function() {
                this.showChildView('list', new StocksCollectionView());
                this.showChildView('details', new StocksItemsView());
            }
        });

    });


