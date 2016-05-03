"use strict";

(function(){

  angular
  .module("wdinstagram", ["ui.router"])
  .config(["$stateProvider","$locationProvider", RouterFunction])
  .controller("PostIndexController", PostIndexControllerFunc)
  .controller("PostShowController", PostShowControllerFunc)
  .factory("PostFactory", PostFactoryFunc);

  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ]);


  function RouterFuction($stateProvider) {
    $stateProvider
    .state("postIndex", {
      url: "/posts",
      templateUrl: "js/index.html",
      controller: "PostIndexController",
      controllerAs: "indexVm"
    })
    .state("PostsShow", {
      url: "/posts/:id",
      templateUrl: "js/show.html",
      controller: "PostShowController",
      controllerAs: "posyshowVm"
    });
  }

}
})();
