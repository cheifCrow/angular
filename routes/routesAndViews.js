angular.module('routesAndViews', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/View/:ViewId', {
			templateUrl: 'templates/sample.html',
			controller: 'ViewCtrl',
			controllerAs: 'view'
		});

		$locationProvider.html5Mode(true);
	}
])
.controller('MainCtrl', ['$scope', '$route', '$routeParams', '$location', 
	function MainCtrl($scope, $route, $routeParams, $location) {
		$scope.counter = 0;
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;

		$scope.buttonFunction = function() {
			$location.path('View/'+$scope.counter);
			$scope.counter++;
		};
	}
])
.controller('ViewCtrl', ['$routeParams',
	function ViewCtrl($routeParams) {
		this.name = 'ViewCtrl';
		this.params = $routeParams;
		console.log(this.params);
	}
]);