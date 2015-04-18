angular.module('tonight')

.controller('RegisterCtrl', ['$scope', '$rootScope', 'User', '$state', function($scope, $rootScope, User, $state) {

  $scope.register = {};
  $scope.register.email = $rootScope.pendingAccount.email;
  $scope.register.password = $rootScope.pendingAccount.password;

  $scope.registerUser = function() {
    console.log($scope.register);
    User.create($scope.register).then(function(data) {
      console.log('user added to db i hope:', data.data);
      $state.go('home.search');
    });
  };

}]);