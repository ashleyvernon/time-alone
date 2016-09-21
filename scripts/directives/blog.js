angular.module('blogApp')
	.directive('blogDirective', blogDirective);

function blogDirective() {
	var directive = {
		restrict: 'E',
		templateUrl: '/templates/blog.html',
		replace: true,
		scope: {
			// blog: '@'   /// this means that its expecting a string
		}
		controllerAs:
		controller: ['$http', function($http){
			var vm = this;
			vm.test = 'this is a test';
  			vm.blogs = [];

			// initialize data
			getBlogs();

			// implementations
			function getBlogs() {
				BlogService.query().then(function(data){
					console.log('here\'s the blog data in the controller', data);
					vm.blogs = data;
				});
			}
		}]
	};

	return directive;
};