var express = require('express');
var path = require('path');
var users = require('./app/users');
var bodyParser = require('body-parser');

var app = express();

//Use bodyparser middleware
app.use(bodyParser.json());

//this function is executed for every request
app.use(function(req,res,next){
    console.log(req.method);
    console.log(req.path);
    next();
});

//app.use('/data',user);

// static files directories
app.use(express.static(path.join(__dirname, '/views')));
app.use('/angular',express.static(path.join(__dirname, '/angular')));
app.use('/app',express.static(path.join(__dirname, '/app')));
app.use('/css',express.static(path.join(__dirname, '/css')));
app.use('/images',express.static(path.join(__dirname, '/images')));
app.use('/controllers',express.static(path.join(__dirname, '/controllers')));
app.use('/factory',express.static(path.join(__dirname, '/factory')));

//Use static files from public folder
app.use('/beer',users);

app.listen(3000);