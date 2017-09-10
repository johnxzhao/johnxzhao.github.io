app.controller('myCtrl', function ($scope) {
  $scope.firstName = 'John';
  $scope.lastName = 'Zhao';
  $scope.fullName = $scope.firstName + ' ' + $scope.lastName;
  $scope.jobName = 'Electrical Engineer and Web Developer';
});