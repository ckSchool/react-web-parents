var express = require("express"),
    app = express(),
    time = new Date().toLocaleTimeString(),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User = require("./models/user");
var listener = app.listen(process.env.PORT, process.env.IP, function(){
    var address = listener.address().address;
    var port = listener.address().port;
  
    console.log('React App server listening on : ' + address + ':' + port);
    console.log('Time : ' + time);
    console.log('Database in use :  \n' + databaseurl);
});
