angular.module('tonight', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Login page
  .state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  })

  // Registration page
  .state('register', {
    url: '/register',
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  })

  // abstract page for all the pages once logged in
  .state('home', {
    url: '',
    templateUrl: 'home/home.html',
    abstract: true
  })

  // Main/Search page of website
  .state('home.search', {
    url: '/',
    views: {
      'main': {
        templateUrl: 'search/search.html',
        controller: 'SearchCtrl'
      },
      'sidebar': {
        templateUrl: 'matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

  // // FAQ page
  // .state('dating.faq', {
  //   url: '/faq',
  //   views: {
  //     'main': {
  //       templateUrl: 'templates/dating/faq.html',
  //       controller: 'FaqCtrl'
  //     },
  //     'sidebar': {
  //       templateUrl: 'templates/dating/matches.html',
  //       controller: 'MatchesCtrl'
  //     }
  //   }
  // })

  // // account page of the current user
  // .state('dating.account', {
  //   url: '/account',
  //   views: {
  //     'main': {
  //       templateUrl: 'templates/dating/account.html',
  //       controller: 'AccountCtrl'
  //     },
  //     'sidebar': {
  //       templateUrl: 'templates/dating/matches.html',
  //       controller: 'MatchesCtrl'
  //     }
  //   }
  // })

  // // individuals user pages
  // .state('dating.showUser', {
  //   url: '/users/:id',
  //   view: {
  //     'main': {
  //       templateUrl: 'templates/user/show.html',
  //       controller: 'UserShowCtrl'
  //     },
  //     'sidebar': {
  //       templateUrl: 'templates/dating/matches.html',
  //       controller: 'MatchesCtrl'
  //     }
  //   }
  // })

  // // your current date you propose
  // .state('dating.date', {
  //   url: '/date',
  //   view: {
  //     'main': {
  //       templateUrl: 'templates/users/date.html',
  //       controller: 'DateCtrl'
  //     },
  //     'sidebar': {
  //       templateUrl: 'templates/dating/matches.html',
  //       controller: 'MatchesCtrl'
  //     }
  //   }
  // })

  // // Date page for other users
  // .state('dating.userDate', {
  //   url: '/users/:id:/date',
  //   view: {
  //     'main': {
  //       templateUrl: 'templates/users/.html',
  //       controller: 'User'
  //     },
  //     'sidebar': {
  //       templateUrl: 'templates/dating/matches.html',
  //       controller: 'MatchesCtrl'
  //     }
  //   }
  // })

}]);