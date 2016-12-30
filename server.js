/**
 *
 * Created by maali hasan on 12/24/2016.
 */

var express = require('express');
var fs= require('fs');
var path = require('path');
var mongojs= require('mongojs');
var db= mongojs("usersList",['users ']);
var parser=require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(parser.json());

//app.use('/controllers',express.static(path.join(__dirname,'/public/controllers/')));

app.use('/js',express.static(path.join(__dirname, '/js')));


app.get('/', function (req, res) {
    console.log("hi");
    res.sendFile( __dirname + "/public" + "/"+"fbapi.html" );

});



app.get('/index.html', function (req, res) {
      res.sendFile( __dirname + "/public" + "/"+"index.html" );

});
app.get('/FBprofile.html', function (req, res) {
    res.sendFile( __dirname + "/public" + "/"+"FBprofile.html" );

});
app.get('/fbapi.html', function (req, res) {
    res.sendFile( __dirname + "/public" + "/"+"fbapi.html" );

});


app.get('/usersList', function (req, res) {

    console.log("i recived a Get Req");
    db.users.find(function (err,user) {
        res.json(user);

    })
 });

app.post('/addUser',function (req,res) {
    console.log("from add user");
    console.log(req.body);
    db.users.insert(req.body,function (err,user) {
        res.json(user);


    })

});
app.delete('/deleteUser/:id',function (req,res) {
    var userId= req.params.id;
    //find a document using a native ObjectId
    db.users.remove({_id:mongojs.ObjectId(userId)},function (err,user) {
        res.json(user);
        
    });
    console.log(userId);

})
app.get('/listUserById/:id',function (req,res) {
    var userId=req.params.id;
     //console.log(userId);
    db.users.findOne({
        _id:mongojs.ObjectId(userId)},function(err,user){
        console.log(user.json);
        res.json(user);

        }
    )

});
app.get('/listUser/:id',function (req,res) {
    var userId=req.params.id;
    console.log(userId);
    res.sendFile( __dirname + "/public" + "/"+"FBprofile.html" );
    // db.users.findOne({
    //     FacebookID:mongojs.ObjectId(userId)},function(err,user){
    //         console.log(user.json);
    //         res.json(user);
    //
    //     }
    // )

});
app.put('/editUser/:id',function (req,res) {
    var userId=req.params.id;
    db.users.findAndModify({
        query: {_id: mongojs.ObjectId(userId)},
        update:{
            $set:{name:req.body.name, email:req.body.email, phone:req.body.phone}},
            new:true},function (err,user) {
        res.json(user);
        
    }
);

});

var server=app.listen(5000, function () {

    var port=server.address().port;

    console.log('Server Runing   at   %s' ,port)
});
