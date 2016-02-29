(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('customAuthForm', customAuthForm);

  function customAuthForm() {
    return {
      templateUrl: 'app/auth/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {

      }
    };
  }

  function AuthFormController() {

  }
})();
