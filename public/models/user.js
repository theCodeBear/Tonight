angular.module('tonight')

.factory('User', ['$http', function($http) {

  function create(user) {
    return $http.post('/users', user);
  }

  function login(user) {
    return $http.post('/login', user);
  }

  return { create: create, login: login };

}]);