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
	.when('/blogs/:id', {
		templateUrl: '/templates/blog-show.html',
		controllerAs: 'blogShowCtrl',
		controller: 'BlogShowController'
	})
    .otherwise({
		redirectTo: '/'
    });

    $locationProvider.html5Mode({
		enabled: true,
		requireBase: false
  });
}

