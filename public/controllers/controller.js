var app = angular.module('myApp', []);

app.controller('appCtrl', function($scope ,$http,$attrs) {
    console.log("hello from controller");

    var refresh=function () {
        $http.get('/usersList').then(function(response) {
            console.log("  I recived json data i requested");
            console.log(response.data);
            $scope.usersList=response.data;

        });

    }
    refresh();

    $scope.addUser=function () {
        console.log($scope.user );
        $http.post('/addUser',$scope.user).then(function (response) {
            console.log(response.data);
            refresh();

        })

    }

    $scope.deleteUser=function(id){
        console.log(id);
        $http.delete('/deleteUser/'+id).then(function(response){
            refresh();
        });


    }
    $scope.edit=function (id) {
        userEditId=id;

    }
    $scope.editUser=function (userEditId){
        console.log(userEditId);

        $http.get('/listUserById/'+userEditId).then(function (response) {
           console.log(response.data);
            $scope.user=response.data;
           // console.log( $scope.contactList);
        })

    }
    $scope.updateUser=function (id) {
        console.log(id);
        $http.put('/editUser/'+id,$scope.user).then(function (response) {
            refresh();

        })

    }


});

