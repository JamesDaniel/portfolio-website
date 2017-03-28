angular.module('app', ['ngResource']);

angular.module('app').controller('sayingsCtrl', function($scope, $resource) {
    $scope.quote = '\"Measuring programming progress by lines of code is like measuring aircraft building progress by weight\" ~Bill Gates';
    $scope.quote = $resource('/api/sayings/first').query();
});