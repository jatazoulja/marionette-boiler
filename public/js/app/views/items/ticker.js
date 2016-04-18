define( ['App', 'backbone', 'marionette', 'jquery',
        'models/StocksTickerModel',
        'hbs!templates/stocks/ticker_item'],
    function(App, Backbone, Marionette, $, Model, template) {
        //ItemView provides some default rendering logic
        return Marionette.CompositeView.extend({
            template: template,
            tagName: "div",
            className: "pull-right",
            model: new Model(),

            initialize: function() {
                var _this = this;
                App.vent.on('stockTickerModel:updateStocks', function(e, t){
                    _this.model.fetch({
                        id: e.toJSON().id,
                        success: function(resp) {
                            console.log(resp);

                        }
                    });

                });
            }


        });

    });


