(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('customPartyForm', customPartyForm);

  function customPartyForm() {
    return {
      templateUrl: 'app/waitList/directives/partyForm.html',
      restrict: 'E'
    };
  }

})();
