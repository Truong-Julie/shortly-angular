angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    Links.addOne($scope.link);
  };
  $scope.signout = function() {
    Auth.signout();
  };
});
