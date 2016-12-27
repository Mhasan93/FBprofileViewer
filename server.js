/**
 *
 * Created by maali hasan on 12/24/2016.
 */

var express = require('express')
var fs= require('fs');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

//app.use('/controllers',express.static(path.join(__dirname,'/public/controllers/')));

app.use('/js',express.static(path.join(__dirname, '/js')));

console.log(path.join(__dirname,'/public/controllers'));


app.get('/index2.html', function (req, res) {
      res.sendFile( __dirname + "/public" + "/"+"index2.html" );

});

app.get('/childinfo.html', function (req, res) {
    res.sendFile( __dirname + "/" + "childinfo.html" );

});
// app.get('/process_get', function (req, res) {
//     // Prepare output in JSON format
//
//     response = {
//          first_name:req.body.first_name,
//         last_name:req.body.last_name
//     };
//
// //console.log(response);
//     res.end(JSON.stringify(response));
//    // console.log(req);
// });


var server=app.listen(3000, function () {
    var host =server.address().host;
    var port=server.address().port;

    console.log('Example app listening  at %s %s',host,port)
});
//
//  const http= require('http');
//  const fs= require('fs');
//  const url =require('url');
//
//  http.createServer(function (request,respone) {
//      var pathname= url.parse(request.url).pathname;
//      pathname=pathname.substr(1);
//      console.log("request for "+pathname+"recived!"+"\n");
//       fs.readFile(pathname,function (err,data) {
//          if(err ){
//              respone.writeHead(404,{'Content-Type': 'text/html'})
//              return err.error();
//          }
//           respone.writeHead(200,{'Content-Type': 'text/html'})
//           respone.write(data.toString());
//          respone.end();
//
//
//      })
//
//  }).listen(3000);
// console.log('Server running at http://127.0.0.1:3000/');
//
