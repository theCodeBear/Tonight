angular.module('tonight')

.directive('loginDirect', ['User', '$state', '$rootScope', function(User, $state, $rootScope) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        User.login(scope.login).then(function(data) {
          console.log('data from server:', data.data.user);
          // if no database record of user, send them to register view
          if (!data.data.user) {
            $rootScope.pendingAccount = {};
            $rootScope.pendingAccount.email = scope.login.email;
            $rootScope.pendingAccount.password = scope.login.password;
            scope.login.email = '';
            scope.login.password = '';
            $state.go('register');
          } else {  // if user is in database: log them in, send them to dashboard
            $rootScope.user = data.data.user;
            $state.go('home.search');
          }
        });
      });
    }
  };
}]);