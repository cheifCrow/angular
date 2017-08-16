angular.module('emailApp', ['emailParser'])
.controller('EmailController',
  ['$scope', 'EmailParser',
    function($scope, EmailParser) {
      $scope.$watch('emailBody', function(body) {
        if (body) {
          $scope.previewText =
            EmailParser.parse(body, {
              to: $scope.to
            });
        }
      });
}]);