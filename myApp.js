var app = angular.module('myApp', []);

app.controller('FirstController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount) {
		$scope.counter += amount;
	}
	$scope.subtract = function(amount) {
		$scope.counter -= amount;
	}
});

app.controller('MyController', function($scope) {
	$scope.person = {
		name: "Duncan Robertson"
	};
});

app.controller('ParentController', function($scope) {
	$scope.person = {greeted: true};
});

app.controller('ChildController', function($scope) {
	$scope.sayHello = function () {
		$scope.person.name = "Duncan Robertson";
	}
});

app.controller('ParseController', 
function($scope, $parse) {
	$scope.$watch('expr', function(newVal, oldVal, scope) {
    if (newVal != oldVal) {
			var parseFun = $parse(newVal);
			$scope.parsedValue = parseFun(scope);
		}
	});
});