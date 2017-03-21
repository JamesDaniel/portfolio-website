angular.module('app', []);

angular.module('app').controller('sayingsCtrl', function($scope) {
    $scope.quote = '\"Measuring programming progress by lines of code is like measuring aircraft building progress by weight\" ~Bill Gates';
});