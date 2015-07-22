(function() {

  var app = angular.module("gitHubRepositories");

  var UserController = function($scope, $routeParams, gitHub) {

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

      gitHub.getUser($routeParams.username).then(onUserComplete, onError);

  };

  app.controller("UserController", ["$scope", "$routeParams", "gitHub", UserController]);

}());
