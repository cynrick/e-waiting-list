(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('customPartyTable', customPartyTable);

  function customPartyTable() {
    return {
      templateUrl: 'app/waitList/directives/partyTable.html',
      restrict: 'E',
      scope: {
        parties: '='
      },
      controller: PartyTableController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  PartyTableController.$inject = ['textMessageService'];

  function PartyTableController(textMessageService) {
    var vm = this;

    vm.removeParty = removeParty;
    vm.toggleDone = toggleDone;
    vm.sendTextMessage = sendTextMessage;

    function removeParty(party) {
      vm.parties.$remove(party);
    }

    function toggleDone(party) {
      vm.parties.$save(party);
    }

    function sendTextMessage(party) {
      textMessageService.sendTextMessage(party, vm.parties);
    }
  }

})();
