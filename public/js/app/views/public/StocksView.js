define( ['App', 'backbone', 'marionette', 'jquery', 'models/StocksModel', 'hbs!templates/login', "collections/StocksCollection"],
    function(App, Backbone, Marionette, $, Model, template, collection) {
        //ItemView provides some default rendering logic
        return Marionette.CompositeView.extend({
            template: template,
            model: new Model(),
            collection: new collection(),
            initialize: function() {
                // this.collection.fetch();
            },
            collectionChanged: function() {
                this.render();
                console.log(this.model.toJSON());
            },

            /*collectionEvents: {
                "change": "collectionChanged"
            },*/
            // View Event Handlers*/
            events: {

            }
        });

    });


