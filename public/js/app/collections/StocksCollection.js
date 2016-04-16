define(["jquery","backbone","models/StocksModel"],
    function($, Backbone, Model) {
        // Creates a new Backbone Collection class object
        var api = requirejs.s.contexts._.config.api,
            Collection = Backbone.Collection.extend({
                urlRoot: api.stocks,

                initialize: function() {
                    this.fetch();
                },
                url: function() {
                    return this.urlRoot;
                },
                // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
                model: Model,

                parse: function(response) {
                    console.log(response)
                    if (response.as_of) {
                        var listSource = new Array();
                        var _this = this;
                        _.each(response.stock, function(element, index, list) {
                            listSource.push(new _this.model(element));

                        });
                        return listSource;
                    } else {
                        alert("ErrorCode 222: We got Qype Data but still someting went wrong...");
                        return [];
                    }
                },
        });

        return Collection;
    });