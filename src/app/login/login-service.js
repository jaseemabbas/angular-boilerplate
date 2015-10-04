(function () {
    'use strict';

    angular
        .module('app')
        .factory('loginService', ['$http', 'URI', LoginService]);

    function LoginService($http, URI) {

        function login(username, password) {
            return $http.get(URI.login).then(handleSuccess, handleError('Error logging in'));
        }

        // private functions

        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return {
                    success: false,
                    message: error
                };
            };
        }

        return {
            login: login
        };
    }
})();