(function() {

  var app = angular.module("gitHubRepositories");

  var SearchController = function($scope, $location, gitHub) {

    $scope.search = function(username) {

        $location.path("/" + username);

    };
  };

  app.controller("SearchController", ["$scope", "$location", SearchController]);

}());
