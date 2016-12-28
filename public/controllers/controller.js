var app = angular.module('myApp', []);
app.controller('appCtrl', function($scope ,$http) {
    console.log("hello from controller");

    $http.get('/usersList').then(function(response) {
      console.log("  I recived json data i requested");
      console.log(response.data);
      $scope.usersList=response.data;


    });


});

