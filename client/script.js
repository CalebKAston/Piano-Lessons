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
    })
    .state('comic',{
      url: "/comic",
      controller: "CommentController",
      templateUrl: "pages/comicPage.html"
    });
});

angular.module('Comments', [])

  .controller('CommentController', function($scope) {
    $scope.comments = [{username: 'testing', comment: 'This is great!'}];

    $scope.addComment = function(username, comment) {
      $scope.comments.push({username: username, comment: comment});
    }
  });