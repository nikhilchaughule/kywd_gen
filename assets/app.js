var app = angular.module('kywd', []);

app.controller('MainCtrl', function($scope,$timeout) {
  $scope.name = '';
  $scope.$watch('name', function() {
        $scope.name = $scope.name.toLowerCase().replace(/[^a-zA-Z0-9_]/g,'_');
  });
});