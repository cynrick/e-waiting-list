(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  WaitListController.$inject = ['$firebaseArray'];

  function WaitListController($firebaseArray) {
    var vm = this;

    var fireParties = new Firebase('https://e-waiting-list.firebaseio.com/parties');

    vm.parties = $firebaseArray(fireParties);
    vm.newParty = new Party();
    vm.addParty = addParty;

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
  }

})();
