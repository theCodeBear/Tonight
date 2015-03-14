angular.module('tonight')

.controller('homeCtrl', ['$scope', 'User', function($scope, User) {

  $scope.intro = "Tonight";

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