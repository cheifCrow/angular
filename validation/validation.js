var app = angular.module('validation', []);

app.directive('ensureUnique', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function() {
				/*Insert http post code here later
				$http({
					method: 'POST',
					url: 'api url',
					data: {
						field: attrs.ensureUnique,
						value: scope.ngModel
					}
				}).success(function(data, status, headers, cfg) {
					c.$setValidity('unique', data.isUnique);
				}).error(function(data, status, headers, cfg) {
					c.$setValidity('unique', false);
				})
				*/
				if(c.$modelValue === 'Duncan') {
					console.log('valid');
					c.$setValidity('unique', true);
				} else {
					c.$setValidity('unique', false);
				}
			});
		}
	};
});