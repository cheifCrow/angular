var app = angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginController'
	})
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	/*.when('/dashboard', {
		templateUrl: 'views/dashboard.html',
		controller: 'DashboardController',
		resolve: {
			user: function(SessionService) {
				return SessionService.getCurrentUser();
			}
		}
	})*/
	.otherwise({redirectTo: '/'});
}]);

app.controller('HomeController', function($scope) {

});

app.controller('LoginController', function($scope) {

});