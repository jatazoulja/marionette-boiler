define(["jquery","backbone","models/StocksTickerModel"],
    function($, Backbone, Model) {
        // Creates a new Backbone Collection class object
        var api = requirejs.s.contexts._.config.api,
            Collection = Backbone.Collection.extend({
                urlRoot: api.ticker,

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
                    if (response) {
                        var listSource = new Array();
                        var _this = this;
                        _.each(response, function(element, index, list) {
                            if(listSource.length>1000) return false;
                            element.id = element.securitySymbol;
                            element.color = (element.Price<0) ? "red" : "green";
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