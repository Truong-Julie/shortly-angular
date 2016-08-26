angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll()
    .then(function(links) {
      console.log('invokes: ', links);
      $scope.data.links = links;
    });
});
