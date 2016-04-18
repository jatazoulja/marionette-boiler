define( ['App', 'backbone', 'marionette', 'jquery',
        'models/stocksHdata',
        'hbs!templates/stocks/candles'],
    function(App, Backbone, Marionette, $, Model, template) {

        //ItemView provides some default rendering logic
        return Marionette.CompositeView.extend({
            template: template,
            tagName: "div",
            className: "panel panel-default",
            model: new Model(),
            data: {},
            modelEvents: {
                "change": "render"
            },
            initialize: function() {
                var _this = this;
                App.vent.on('stockModel:getStocks', function(e, t){
                    $.ajax({
                        url: requirejs.s.contexts._.config.api.hdata + e.toJSON().id,
                        success: function(resp) {
                            var resp = (typeof resp == "object") ? resp : JSON.parse(resp),
                                ar = new Array(); // The 0 there is the key, which sets the date to the epoch
                                $.each(resp, function (item) {
                                    ar.push({
                                        x: new Date(resp[item].Date * 1000),
                                        y: [
                                            resp[item].Open,
                                            resp[item].High,
                                            resp[item].Low,
                                            resp[item].Close,
                                        ]
                                    })
                                });

                            _this.data = {
                                raw: resp,
                                chart:ar.slice(Math.max(ar.length - 30, 1))

                            };
                            _this.renderChart(_this.data);

                        }
                    });

                });
            },
            render: function() {
                this.constructor.__super__.render.apply(this, arguments);
                console.log("StocksCandleStickView");
                if(!this.model.toJSON().length) return;
                console.log(this.model.toJSON());


            },

            renderChart: function(data) {
                require(['canvasjs'], function(CanvasJS){
                    var chart = new CanvasJS.Chart("candleStick",
                        {
                            title: {
                                text: "Philippines Stock Exchange",
                            },
                            exportEnabled: true,
                            axisY: {
                                includeZero: false,
                                prefix: "$",
                            },
                            axisX: {
                                valueFormatString: "DD-MMM",
                            },
                            data: [
                                {
                                    type: "candlestick",
                                    dataPoints: data.chart
                                }
                            ]
                        });
                    chart.render();
                });
            }


        });

    });


