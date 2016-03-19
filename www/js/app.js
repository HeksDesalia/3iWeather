angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-material'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
// setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tab.weather', {
      url: '/weather',
      views: {
        'tab-weather': {
          templateUrl: 'templates/tab-weather.html',
          controller: 'WeatherCtrl'
        }
      }
    })
    .state('tab.prev', {
      url: '/prev',
      views: {
        'tab-prev': {
          templateUrl: 'templates/tab-prev.html',
          controller: 'PrevCtrl'
        }
      }
    });
// if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/weather');
});
