(function(){

    var app = angular.module("gitHubViewer", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "views/main-controller.html",
                controller: "MainController"
            })
            .otherwise({redirectTo: "/"})
    });

}());
