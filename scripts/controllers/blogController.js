angular.module('blogApp')
  .controller('blogController', blogController);

blogController.$inject=['BlogService'];
function blogController( BlogService) {

}