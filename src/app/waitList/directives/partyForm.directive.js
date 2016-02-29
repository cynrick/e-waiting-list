(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('customPartyForm', customPartyForm);

  function customPartyForm() {
    return {
      templateUrl: 'app/waitList/directives/partyForm.html',
      restrict: 'E',
      scope: {
        parties: '='
      },
      controller: PartyFormController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  PartyFormController.$inject = ['partyService'];

  function PartyFormController(partyService) {
    var vm = this;

    vm.newParty = new partyService.Party();
    vm.addParty = addParty;

    function addParty() {
      vm.parties.$add(vm.newParty);
      vm.newParty = new partyService.Party();
    }
  }

})();
