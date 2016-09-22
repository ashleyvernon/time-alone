angular.module('blogApp')
	.directive('blogDirective', blogDirective);

function blogDirective() {
	var directive = {
		restrict: 'E',
		templateUrl: '/templates/blog.html',
		replace: true,
		scope: {
			// blog: '@'   /// this means that its expecting a string
		},
		controllerAs: 'blogCtrl',
		controller: ['$http', function($http){
			var vm = this;
			vm.test = 'this is a test';
  			// vm.blogs = {};

			// initialize data

			$http({
				method: 'GET',
				url: "data/blog.json"
			}).then(onBlogSuccess, onError)

			function onBlogSuccess(response){
				console.log('request for blog data', response.data);
				vm.blogs = response.data;
			}

			function onError(error) {
				console.log('There was an error', error);
			}
			// getBlogs();


			// function getBlogs() {
			// 	BlogService.query().then(function(data){
			// 		console.log('here\'s the blog data in the controller', data);
			// 		vm.blogs = data;
			// 	});
			// }
		}]
	};

	return directive;
};