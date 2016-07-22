'use strict';

(function(){

class IndexComponent {
  constructor() {

  }
}

angular.module('pgtechApp')
  .component('index', {
    templateUrl: 'components/index/index.html',
    controller: IndexComponent,
    controllerAs: 'indexCtrl'
  });

})();
