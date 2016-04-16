define( ['App', 'backbone', 'marionette', 'jquery',
        'models/StocksModel',
        'hbs!templates/stocks/all'],
    function(App, Backbone, Marionette, $, Model, template) {
        //ItemView provides some default rendering logic
        return Marionette.CompositeView.extend({
            template: template,
            tagName: "div",
            className: "panel panel-default",
            model: new Model(),

            events: {

            }
        });

    });


