angular.module('tonight')

.controller('AccountCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

  // so that the account form doesn't change user info in $rootScope
  $scope.accountUser = angular.extend({}, $rootScope.user);

}]);