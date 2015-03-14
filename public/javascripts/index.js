angular.module('tonight', ['ui.router', 'satellizer'])

.config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  });

  $authProvider.facebook({ clientId: 'FB CLIENT ID GOES HERE' });

}]);