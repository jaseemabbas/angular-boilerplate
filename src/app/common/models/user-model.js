(function () {
    'use strict';

    angular.module('app.common')
        .service('UserModel', ['$state', 'loginService', UserModel]);

    function UserModel($state, loginService) {
        var self = this;

        var currentUser = null;

        function _init() {
            //  currentUser = Backand.getUsername();
        };

        self.getCurrentUser = function () {
            return currentUser;
        }

        self.login = function (user) {
            return loginService.login(user.email, user.password)
                .then(function (response) {
                    self.error = '';
                    _init();
                }, function (error) {
                    self.error = error && error.error_description || 'Unknown error from server';
                    console.log(self.error);
                }); 
        };

        self.register = function (user) {
            //      return Backand.signup(user.email, 'last', user.email, user.password, user.password)
            //        .then(function(userData) {
            //          _init();
            //          self.error= '';
            //          console.log('User ' + userData.data.username + ' created successfully!');
            //          return self.login(user);
            //        }, function (error) {
            //          self.error = error.error_description || 'Unknown error from server';
            //        }
            //      );
        };

        self.logout = function () {
            /*  return Backand.signout()
                  .then(_init);*/
        };

        _init();
    }

})();