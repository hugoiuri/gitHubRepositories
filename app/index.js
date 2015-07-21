(function() {

  var app = angular.module("githubViwer", []);

  var MainController = function($scope, $http) {

    $scope.message = "Hello Angular!";


    var onRepos = function(response) {

      $scope.repos = response.data;

      console.log($scope.repos);
    };

    var onUserComplete = function(response) {

      $scope.user = response.data;

      console.log($scope.user.repos_url);

      $http.get($scope.user.repos_url)
        .then(onRepos, onError);

    };

    var onError = function(response) {

      $scope.error = "Could not fetch the data!";

    }

    $scope.search = function(username) {

      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);

    }
  };

  app.controller("MainController", ["$scope", "$http", MainController]);


}());
