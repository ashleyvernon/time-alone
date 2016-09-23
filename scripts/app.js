angular
	.module('blogApp', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
		templateUrl: '/templates/blog.html',
		controllerAs: 'indexCtrl',
		controller: 'IndexController'
    })
	.when('/:id', {
		templateUrl: '/templates/blog.html',
		controllerAs: 'indexCtrl',
		controller: 'IndexController'
	})
    .otherwise({
		redirectTo: '/'
    });

    $locationProvider.html5Mode({
		enabled: true,
		requireBase: false
  });
}

