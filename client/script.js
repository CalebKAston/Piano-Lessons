angular.module('Comic', [
  'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "pages/home.html"
    })
    .state('archive', {
      url: "/archive",
      templateUrl: "pages/archive.html"
    });
});