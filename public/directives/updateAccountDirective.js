angular.module('tonight')

.directive('updateAccount', ['User', '$state', '$rootScope', function(User, $state, $rootScope) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.parent().removeClass('ng-dirty');
        elem.parent().removeClass('ng-invalid');
      // if passwords match, save to database
        if (scope.password === scope.password2) {
          if (scope.password && scope.password.length >= 3) {
            scope.accountUser.password = scope.password;
          } else if (scope.password && scope.password.length < 3) {
            elem.parent().addClass('ng-invalid');
            return;
          }
          User.update(scope.accountUser).then(function(data) {
            $rootScope.user = data.data.user;
          });
          elem.parent().removeClass('ng-invalid');
          $state.go('dashboard.feed');
        } else {
          elem.parent().addClass('ng-invalid');
        }
      });
    }
  };

}]);