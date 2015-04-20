angular.module('tonight')

.factory('User', ['$http', '$rootScope', function($http, $rootScope) {

  function create(user) {
    return $http.post('/users', user);
  }

  function login(user) {
    return $http.post('/login', user);
  }

  function update(user) {
    return $http.post('/users/'+ $rootScope.user._id, user);
  }

  return { create: create, login: login, update: update };

}]);