'use strict';

(function(){

class SliderComponent {
  constructor() {
    $('.slider').slider({full_width: true});
  }
}

angular.module('pgtechApp')
  .component('slider', {
    templateUrl: 'components/slider/slider.html',
    controller: SliderComponent,
    controllerAs: 'sliderCtrl'
  });

})();
