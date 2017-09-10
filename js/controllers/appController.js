app.controller('myCtrl', function ($scope) {
  $scope.firstName = 'XINUO';
  $scope.nickName =  'JOHN';
  $scope.lastName = 'ZHAO';
  $scope.fullName = $scope.nickName + ' (' + $scope.firstName + ') ' + $scope.lastName;
  $scope.jobName = 'Electrical Engineer and Web Developer';
});