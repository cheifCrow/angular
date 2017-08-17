angular.module('myApp', [])
.run(function($rootScope, $timeout) {
	$rootScope.isDisabled = true;
	$timeout(function() {
		$rootScope.isDisabled = false;
	}, 5000);
})
.directive('myDirective', function() {
	return {
		restrict: 'A',
		replace: true,
		scope: {
			myUrl: '=someAttr',
			myLinkText: '@',
		},
		template: '\
			<div>\
				<label>My URL Field:</label>\
				<input type="text"\
					ng-model="myUrl" />\
				<a href="{{myUrl}}">{{myLinkText}}</a>\
			</div>\
			'
	};
});