var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NodeProje');
var db = require('./app_server/models/db');



app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'/app_server/views'));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(ejsLayouts)

app.use('/public', express.static(path.join(__dirname, 'public')));

//yönlendiriciler ekleniyor
require("./app_server/routes/routeManager")(app);

var Kullanici = require("./app_server/models/kullanici");



app.listen(8000);