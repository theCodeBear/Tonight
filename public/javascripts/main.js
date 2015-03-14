angular.module('tonight')

.controller('homeCtrl', ['$scope', 'User', '$auth', function($scope, User, $auth) {

  $scope.intro = "Tonight";

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider);
  };

  // $scope.createUser = function() {
  //   User.create({name: $scope.name}).then(function(data, status, headers, config) {
  //     $scope.users = data.data;
  //     $scope.name = '';
  //   },
  //   function(data, status, headers, config) {
  //     console.log('ERROR CREATING USER');
  //   });
  // };

}]);