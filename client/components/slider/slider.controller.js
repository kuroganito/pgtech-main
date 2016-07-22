'use strict';

(function(){

class SliderComponent {
  constructor() {
    $('.slider').slider({indicators: false,height:"100vh"});
  }
}

angular.module('pgtechApp')
  .component('slider', {
    templateUrl: 'components/slider/slider.html',
    controller: SliderComponent,
    controllerAs: 'sliderCtrl'
  });

})();
