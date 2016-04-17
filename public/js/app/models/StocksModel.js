define(["jquery", "backbone"],
    function($, Backbone) {
        // Creates a new Backbone Model class object
        var api= requirejs.s.contexts._.config.api,
            Model = Backbone.Model.extend({
                urlRoot: api.stocks,

                initialize: function() { },

                url: function() {
                    var id = this.id || "";
                    console.log(id);
                    return this.urlRoot + '/' + id;
                },
                defaults: {
                    name:"2GO Group",
                    percent_change:-0.95,
                    price: {
                        amount: 7.3,
                        currency: "PHP",
                    },
                    symbol: "2GO",
                    volume : 69000
                },
                // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
                fetch: function(options) {
                    this.id = options.id || "";
                    this.constructor.__super__.fetch.apply(this, arguments);
                },
                parse: function(item) {
                    return (this.id!=="" || this.id!== null) ? item[0] : item;
                }

        });

        // Returns the Model class
        return Model;

    }

);