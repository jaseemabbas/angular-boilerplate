'use strict';

angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngCookies',
  'app.common'
])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.interceptors.push('httpInterceptor');
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                templateUrl: 'app/main/main.tmpl.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state('login', {
                url: 'login',
                parent: 'root',
                templateUrl: 'app/login/login.tmpl.html',
                controller: 'LoginCtrl',
                controllerAs: 'loginCtrl'
            })
    });