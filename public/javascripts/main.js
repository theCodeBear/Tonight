angular.module('prototype')

.controller('homeCtrl', ['$scope', 'User', function($scope, User) {

  $scope.intro = "Welcome to Todd Kronenberg's Hapi.js, Mongoose, and AngularJS prototype";

  $scope.createUser = function() {
    User.create({name: $scope.name}).then(function(data, status, headers, config) {
      $scope.users = data.data;
      $scope.name = '';
    },
    function(data, status, headers, config) {
      console.log('ERROR CREATING USER');
    });
  };

}]);