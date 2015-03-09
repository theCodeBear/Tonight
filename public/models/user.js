angular.module('prototype')

.factory('User', ['$http', function($http) {

  function create(user) {
    return $http.post('/users', user);
  }

  return {create: create};

}]);