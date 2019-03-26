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

// //requiring routes
var authRoutes = require("./routes/auth");
var indexRoutes = require("./routes/index");

// Secret data outside source control, see .env file.
require('dotenv').config();
var password = process.env.PASSWORD;
var databaseurl = process.env.DATABASEURL;
mongoose.connect(databaseurl, { useNewUrlParser: true });

// Stops deprecation warning about collection.findAndModify
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());
app.set('view engine', 'ejs');

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: password,
    resave: false,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", authRoutes);
app.use("/", indexRoutes);

// Use Environmental variables to determine PORT and IP to liston on...

app.get("/andrew", function(req, res){
    res.send("Hi there Andrew");
});

var listener = app.listen(process.env.PORT, process.env.IP, function(){
    var address = listener.address().address;
    var port = listener.address().port;
  
    console.log('React App server listening on : ' + address + ':' + port);
    console.log('Time : ' + time);
    console.log('Database in use :  \n' + databaseurl);
});
