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
                "click": "getId"
            },

            getId: function(e) {
                console.log(e);
                var id = $(e.target).data().id;
                console.log(id);

                console.log(this.model.get());
            }
        });

    });


