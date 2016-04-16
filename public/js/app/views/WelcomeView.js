define( ['App', 'backbone', 'marionette', 'jquery', 'models/Model', 'hbs!templates/welcome'],
    function(App, Backbone, Marionette, $, Model, template) {
        //ItemView provides some default rendering logic
        var collectionView = Backbone.Marionette.ItemView.extend( {
            template: template,
            model: new Model({
                mobile: App.mobile
            }),

            // View Event Handlers
            events: {

            }
        });

        return Backbone.Marionette.CollectionView.extend({
            childView: collectionView,
            childViewOptions: function(model, index) {
                // do some calculations based on the model
                return {
                    foo: "bar",
                    childIndex: index
                }
            }
        });
    });