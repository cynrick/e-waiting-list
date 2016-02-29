(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  WaitListController.$inject = ['textMessageService', 'partyService', 'user'];

  function WaitListController(textMessageService, partyService, user) {
    var vm = this;

    vm.parties = partyService.getPartiesByUser(user.uid);
    vm.newParty = new partyService.Party();
    vm.addParty = addParty;
    vm.removeParty = removeParty;
    vm.toggleDone = toggleDone;
    vm.sendTextMessage = sendTextMessage;

    function addParty() {
      vm.parties.$add(vm.newParty);
      vm.newParty = new partyService.Party();
    }

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
