(function(){

    var app = angular.module("gitHubRepositories", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "views/search.html",
                controller: "SearchController"
            })
            .when("/:username", {
                templateUrl: "views/user.html",
                controller: "UserController"
            })
            .otherwise({redirectTo: "/"})
    });

}());
