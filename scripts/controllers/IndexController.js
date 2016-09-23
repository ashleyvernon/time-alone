angular
	.module('blogApp')
	.controller('IndexController', IndexController);

IndexController.$inject = ['$http'];

function IndexController($http) {
	var vm = this;

	$http({
		method: 'GET',
		url: "data/blog.json"
	}).then(onIndexSuccess, onError)

	function onIndexSuccess(response){
		console.log('request for blog data', response);
		vm.blogs = response.data;
	}

	function onError(error) {
		console.log('There was an error', error);
	}

}
