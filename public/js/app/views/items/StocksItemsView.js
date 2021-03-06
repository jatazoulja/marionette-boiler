define( ['App', 'backbone', 'marionette', 'jquery',
        'models/StocksModel',
        'hbs!templates/stocks/details', 'canvasjs'],
    function(App, Backbone, Marionette, $, Model, template, CanvasJS) {
        //ItemView provides some default rendering logic
        return Marionette.CompositeView.extend({
            template: template,
            tagName: "div",
            className: "panel panel-default",
            model: new Model(),
            modelEvents: {
                "change": "render"
            },
            initialize: function() {
                var _this = this;
                App.vent.on('stockModel:getStocks', function(e, t){
                    _this.model.fetch({
                        id: e.toJSON().id,
                        success: function(resp) {
                            console.log(resp);

                        }
                    });

                });
            },
            render: function() {
                this.constructor.__super__.render.apply(this, arguments);
                console.log(this.model.toJSON());

            }


        });

    });


