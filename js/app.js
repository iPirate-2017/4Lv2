var app = angular.module('app', ['ngRoute', 'ui.router', 'ngAnimate', 'ngMaterial', 'ngMessages']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('index', {
      name: 'index',
      url: '/',
      templateUrl: 'index.html',
      controller: 'homeController',
      cache: false
    });

  $urlRouterProvider.otherwise(function($injector) {
    var $state = $injector.get("$state");
    console.log("otherwise");
    $state.go("index");
  });

});
