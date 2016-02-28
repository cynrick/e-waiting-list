(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  WaitListController.$inject = ['$firebaseArray'];

  function WaitListController($firebaseArray) {
    var vm = this;

    var fireParties = new Firebase('https://e-waiting-list.firebaseio.com/parties');
    var fireTextMessages = new Firebase('https://e-waiting-list.firebaseio.com/textMessages');

    vm.parties = $firebaseArray(fireParties);
    vm.newParty = new Party();
    vm.addParty = addParty;
    vm.removeParty = removeParty;
    vm.sendTextMessage = sendTextMessage;

    function Party() {
      this.name = '';
      this.phone = '';
      this.size = '';
      this.done = false;
      this.notified = false;
    }

    function addParty() {
      vm.parties.$add(vm.newParty);
      vm.newParty = new Party();
    }

    function removeParty(party) {
      vm.parties.$remove(party);
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
