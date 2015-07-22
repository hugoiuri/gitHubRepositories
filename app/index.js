(function() {

  var app = angular.module("gitHubViewer", []);

  var MainController = function($scope, gitHub) {

    $scope.message = "Hello Angular!";


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

      gitHub.getUser(username).then(onUserComplete, onError);

    };


  };

  app.controller("MainController", ["$scope", "gitHub", MainController]);

}());
