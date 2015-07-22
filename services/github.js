(function(){

    var gitHub = function($http){

        var getUser = function(username){

            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });

        };

        var getRepositories = function(user){

            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getUser: getUser,
            getRepositories: getRepositories
        };
    };

    var module = angular.module("gitHubRepositories");
    module.factory("gitHub", gitHub);
}());
