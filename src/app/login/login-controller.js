(function () {
  'use strict';

  angular.module('app')
    .controller('LoginCtrl', ['UserModel', '$state','$rootScope', LoginCtrl]);

  function LoginCtrl(UserModel, $state, $rootScope) {
    var self = this;

    function _init () {
      self.reset();
    };

    self.submit = function () {
      self.loading = true;
      self.user.register ? register() : login();
    };

    function register() {
      UserModel.register({
        email: self.user.email,
        password: self.user.password
      })
        .then(function () {
          $rootScope.$broadcast('userLogin');
          $state.go('boards');
        })
        .finally(function () {
          self.error = UserModel.error;
          self.reset();
        });
    }

    function login() {
      UserModel.login({
        email: self.user.email,
        password: self.user.password
      })
        .then(function () {
          $rootScope.$broadcast('userLogin');
          UserModel.error ? self.error = UserModel.error : $state.go('boards');
        }, function (error) {
          self.error = UserModel.error;
        })
        .finally(function (reason) {
          self.reset();
        });
    }

    self.reset = function () {
      self.loading = false;
      self.user = {
        email: '',
        password: '',
        register: false
      };
    };

    self.socialLogin = function (provider) {
      UserModel.socialLogin(provider.name, self.user.register)
        .then(function () {
          $rootScope.$broadcast('userLogin');
          UserModel.error ? self.error = UserModel.error : $state.go('boards');
        }, function () {
          self.error = UserModel.error;
        }
      );
    };

    _init();
  }

})();