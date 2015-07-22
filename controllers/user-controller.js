(function() {

    var app = angular.module("gitHubRepositories");

    var UserController = function($scope, $routeParams, $location, gitHub) {

        var onRepositoriesComplete = function(data) {

            $scope.repos = data;

        };

        var onUserComplete = function(data) {

            $scope.user = data;

            gitHub.getRepositories($scope.user).then(onRepositoriesComplete, onError);

        };

        var onError = function(response) {

            $scope.error = "Could not fetch the data!";

        };

        $scope.search = function(username) {

            $location.path("/" + username);

        };

        $scope.username = $routeParams.username;

        gitHub.getUser($scope.username).then(onUserComplete, onError);

    };

    app.controller("UserController", ["$scope", "$routeParams", "$location", "gitHub", UserController]);

}());
