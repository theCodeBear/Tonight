angular.module('tonight', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Entry page
  .state('landing', {
    url: '/',
    templateUrl: 'views/landing/landing.html'
  })

  // Registration page
  .state('register', {
    url: '/register',
    templateUrl: 'views/register/register.html',
    controller: 'RegisterCtrl'
  })

  // abstract page for all the pages once logged in
  .state('dashboard', {
    url: '/home',
    templateUrl: 'views/home/home.html',
    abstract: true
  })

  // Main/Search page of website
  .state('dashboard.feed', {
    url: '/',
    views: {
      'main': {
        templateUrl: 'views/feed/feed.html',
        controller: 'FeedCtrl'
      },
      'sidebar': {
        templateUrl: 'views/matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

  // FAQ page
  .state('dashboard.faq', {
    url: '/faq',
    views: {
      'main': {
        templateUrl: 'views/faq/faq.html'//,
        // controller: 'FaqCtrl'
      },
      'sidebar': {
        templateUrl: 'views/matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

  // account page of the current user
  .state('dashboard.account', {
    url: '/account',
    views: {
      'main': {
        templateUrl: 'views/account/account.html',
        controller: 'AccountCtrl'
      },
      'sidebar': {
        templateUrl: 'views/matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

  .state('dashboard.premium', {
    url: '/premium',
    views: {
      'main': {
        templateUrl: 'views/premium/premium.html',
        controller: 'PremiumCtrl'
      },
      'sidebar': {
        templateUrl: 'views/matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

  .state('dashboard.profile', {
    url: '/profile',
    views: {
      'main': {
        templateUrl: 'views/profile/profile.html',
        controller: 'ProfileCtrl'
      },
      'sidebar': {
        templateUrl: 'views/matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

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

  // your current date you propose
  .state('dashboard.myDate', {
    url: '/myDate',
    views: {
      'main': {
        templateUrl: 'views/dateStory/myDate.html',
        controller: 'MyDateCtrl'
      },
      'sidebar': {
        templateUrl: 'views/matches/matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

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