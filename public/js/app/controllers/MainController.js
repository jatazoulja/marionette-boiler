define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/HeaderView', "views/public/LoginView", "views/layouts/MainStocksLayout"],
    function (App,
              Backbone,
              Marionette,
              WelcomeView,
              HeaderView,
              LoginView,
              StocksView
    ) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.mainRegion.show(new WelcomeView());
        },

        login: function() {
            App.mainRegion.show(new LoginView());
        },
        stocks: function() {
            var stocks = new StocksView();
            App.mainRegion.show(new StocksView());

        }
    });
});