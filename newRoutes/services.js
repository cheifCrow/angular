var app = angular.module('myApp.services', []);

app.factory('githubService', function($http) {
	var githubUrl = 'https://api.github.com';
	var githubUsername;

	var runUserRequest = function(path) {
		return $http({
			method: 'GET',
			url: githubUrl + '/users/' +
					githubUsername + '/' +
					path + '/public'
		});
	};

	return {
		events: function() {
			return runUserRequest('events');
		},
		setUsername: function(username) {
			githubUsername = username;
		}
	};
});