(function () {
    'use strict';

    angular
        .module('app.common')
        .factory('httpInterceptor', ['$q', '$location', httpInterceptor]);

    function httpInterceptor($q, $location) {
        return {
            responseError: function (rejection) {
                if ((rejection.config.url + "").indexOf('token') === -1) {
                    if (rejection.status === 401) {
                        $location.path('/login');
                        return $q.reject(rejection);
                    }
                }
                return $q.reject(rejection);
            }
        };
    }
})();