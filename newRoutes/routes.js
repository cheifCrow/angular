var app = angular.module('myApp', ['ngRoute', 'myApp.services']);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController',
		controllerAs: 'home'
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

app.controller('HomeController', function($scope, $timeout, githubService) {
	var timeout;

	$scope.$watch('username', function(newUsername) {
		if(newUsername) {
			if (timeout) $timeout.cancel(timeout);
			timeout = $timeout(function() {
				githubService.setUsername(newUsername);
				
				githubService.events()
				.success(function(data, status, headers) {
					$scope.events = data;
				});
			}, 350);
		}
	});
});

app.controller('LoginController', function($scope) {

});