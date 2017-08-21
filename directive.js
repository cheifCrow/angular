angular.module('myApp', [])
.run(function($rootScope, $timeout) {
	$rootScope.isDisabled = true;
	$timeout(function() {
		$rootScope.isDisabled = false;
		$rootScope.myHref = 'http://google.com';
		$rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
	}, 2000);
})
.controller('LotteryController', function($scope) {
	$scope.x = null;
	$scope.generateNumber = function() {
		return Math.floor((Math.random()*10)+1);
	};
})
.controller('PeopleFormController', function($scope) {
	$scope.person = {
		name: null
	};

	$scope.people = [];

	$scope.submit = function() {
		if ($scope.person.name) {
			$scope.people.push({name: $scope.person.name});
			$scope.person.name = '';
		}
	};
})
.controller('CityController', function($scope) {
	$scope.cities = [
	{name: 'Seattle'},
	{name: 'San Francisco'},
	{name: 'Chicago'},
	{name: 'New York'},
	{name: 'Boston'}
	];
})
.controller('FormController', function($scope) {
	$scope.fields = [
		{placeholder: 'Username', isRequired: true},
		{placeholder: 'Password', isRequired: true},
		{placeholder: 'Email (optional', isRequired: false}
	];

	$scope.submitForm = function() {
		alert('it worked');
	};
})
.controller('MyController', ['$scope', function($scope) {
	$scope.renderModel = 'render test';
	$scope.$viewValue = function() {
		return $scope.renderModel;
	};
}])
.controller('fishController', ['$scope', function($scope) {
	$scope.isTwoFish = false;
	$scope.fishChange = function() {
		if ($scope.fishSelect === 'Two Fish') {
			$scope.isTwoFish = true;
		} else {
			$scope.isTwoFish = false;
		}
	};
}])
.controller('PeopleController', function($scope) {
	$scope.people = [
		{name:  "Duncan", city: "Caledonia"},
		{name: "Erik", city: "Seattle"}
	];
})
.directive('myDirective', function() {
	return {
		restrict: 'A',
		replace: true,
		scope: {
			myUrl: '=someAttr',
			myLinkText: '@',
		},
		templateUrl: 'templates/link.html'
	};
})
.directive('myCompile', function() {
	return {
		compile: function(tEle, tAttrs, transcludeFn) {
			var tp1E1 = angular.element('<div>' +
				'<h2></h2>' +
				'</div>');
			var h2 = tp1E1.find('h2');
			h2.attr('type', tAttrs.type);
			h2.attr('ng-model', tAttrs.ngModel);
			h2.val("hello");
			for (var i=0; i < h2.length; i++) {
				h2[i].innerHTML="hello";
			}
			tEle.replaceWith(tp1E1);
			return function(scope, element, attrs) {
				var h2 = element.find('h2');
				console.log(h2);
				/*for (var i = 0; i < h2.length; i++) {
					h2[i].innerHTML="Hi there";
				}*/
			};
		}
	};
})
.directive('modelDirective', function() {
	return {
		require: '?ngModel',
		link: function(scope, ele, attrs, ngModel) {
			if(!ngModel) return;

			$(function() {
				ele.datepicker({
					onSelect: function(date) {
						// set the view and call apply
						scope.$apply(function() {
							ngModel.$setViewValue(date);
						});
					}
				});
			});
		}
	};
})
.directive('renderDirective', function() {
	return {
		require: '?ngModel',
		link: function(scope, ele, attrs, ngModel) {
			if (!ngModel) {
				console.log('no model defined');
				return;
			}

			console.log(ngModel);
			ngModel.$render = function() {
				ele.html(
					ngModel.$modelValue || ngModel.$viewValue || 'None'
				);
			};
		}
	};
});