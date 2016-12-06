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
    .state("teacher", {
      url: "/teacher",
      templateUrl: "pages/about_me.html"
    })
    .state("contact",{
      url: "/contact",
      controller: "CommentController",
      templateUrl: "pages/contact.html"
    });
});