angular.module("Comic", [
  "ui.router"
  ])
  .controller("CommentController", function($scope, CommentAdder) {
    $scope.comments = [];

    $scope.addComment = function(username, comment) {
      $scope.comments.push(CommentAdder(username, comment));
      $scope.username = "";
      $scope.message = "";
    }
  })
  .service("CommentAdder", function(){
    return function(username, comment){
      return {username: username, comment: comment};
    }
  })
  .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "pages/home.html"
    })
    .state("archive", {
      url: "/archive",
      templateUrl: "pages/archive.html"
    })
    .state("comic",{
      url: "/comic",
      controller: "CommentController",
      templateUrl: "pages/comicPage.html"
    });
});