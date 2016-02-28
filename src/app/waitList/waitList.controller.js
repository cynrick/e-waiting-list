(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  WaitListController.$inject = ['$firebaseArray', 'FIREBASE_URL', 'partyService'];

  function WaitListController($firebaseArray, FIREBASE_URL, partyService) {
    var vm = this;

    var fireParties = new Firebase(FIREBASE_URL + 'parties');
    var fireTextMessages = new Firebase(FIREBASE_URL + 'textMessages');

    vm.parties = $firebaseArray(fireParties);
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
      var newTextMessage = {
        name: party.name,
        phoneNumber: party.phone,
        size: party.size
      };

      fireTextMessages.push(newTextMessage);
      party.notified = true;
      vm.parties.$save(party);
    }
  }

})();
