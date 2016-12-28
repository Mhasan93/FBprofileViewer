/**
 *
 * Created by maali hasan on 12/24/2016.
 */

var express = require('express');
var fs= require('fs');
var path = require('path');
var mongojs= require('mongojs');
var db= mongojs("usersList",['usersList'])

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

//app.use('/controllers',express.static(path.join(__dirname,'/public/controllers/')));

app.use('/js',express.static(path.join(__dirname, '/js')));




app.get('/index2.html', function (req, res) {
      res.sendFile( __dirname + "/public" + "/"+"index2.html" );

});

app.get('/usersList', function (req, res) {
  console.log("i recived a Get Req");
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
     var usersList=[person1,person2];

     console.log( res.json(usersList));


 });


var server=app.listen(3000, function () {
    var host =server.address().host;
    var port=server.address().port;

    console.log('Example app listening  at %s %s',host,port)
});
