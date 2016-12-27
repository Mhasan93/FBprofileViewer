var app = angular.module('myApp', []);
app.controller('appCtrl', function($scope) {
    console.log("hello from controller");
    person1={
        name:'ahmad',
        email:'ahmad@hotmail.com',
        phone:'0597828105'
    };
    person2={
        name:'maali',
        email:'maali@hotmail.com',
        phone:'0597828105'
    };

    var contactList=[person1,person2];
    $scope.contactList=contactList;
});

