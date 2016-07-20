'use strict';

(function(){

class SidemenuComponent {
  constructor() {
    $(".button-collapse").sideNav();
  }
}

angular.module('pgtechApp')
  .component('sidemenu', {
    templateUrl: 'components/sidemenu/sidemenu.html',
    controller: SidemenuComponent,
    controllerAs: 'sidemenuCtrl'
  });

})();
