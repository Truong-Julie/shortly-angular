angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  var sortUrls = function(urlArray) {
    urlArray.sort(function(a, b) {
      return b.visits - a.visits;
    });
    return urlArray;
  };
  Links.getAll()
    .then(function(links) {
      console.log('invokes: ', links);
      $scope.data.links = sortUrls(links);
    });
  $scope.signout = function() {
    Auth.signout();
  };

});
