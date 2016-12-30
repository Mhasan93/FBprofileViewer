var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
//var app = angular.module("myApp", ['ui.router', 'angularUtils.directives.dirPagination']);
app.filter('startFrom',function($filter){
    return function(user,start){
        return user.slice(start);

    }
})
app.controller('appCtrl', function($scope ,$http,$attrs,$filter) {
    console.log("hello from controller");

    var refresh=function () {
        $http.get('/usersList').then(function(response) {
            console.log("  I recived json data i requested");
            console.log(response.data);
            $scope.usersList=response.data;
            var data=$scope.usersList;



        });

    }


    $scope.sortColumn="name";
    $scope.reverseSort= false;
    $scope.sortData=function (coulmn) {
        $scope.reverseSort=($scope.sortColumn==coulmn)?!$scope.reverseSort :false;
        $scope.sortColumn=coulmn;
    }
    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        } return '';// remove arrow from other columns till i preess it
    }


    refresh();

    $scope.addUser=function () {
        console.log("from add user");
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


