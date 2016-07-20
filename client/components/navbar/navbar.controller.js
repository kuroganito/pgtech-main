'use strict';

(function(){

class NavbarComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pgtechApp')
  .component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarComponent,
    controllerAs: 'navbarCtrl'
  });

})();
