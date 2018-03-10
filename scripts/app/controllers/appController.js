var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', function ($scope) {
  $scope.firstName = 'John';
  $scope.lastName = 'Zhao';
  $scope.chineseName = '赵夕诺';
  $scope.fullName = $scope.firstName + ' ' + $scope.lastName;
  $scope.jobName = 'Electronic Engineer and Web Developer';
  $scope.chineseJobName = '电子工程师 / 网页开发者';
  $scope.showWechatQR = true;
});
