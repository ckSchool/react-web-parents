var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var students = require("../models/students");
let dateandtime = require('./date-and-time');
date = dateandtime.format(new Date(), 'dddd, DD MMMM YYYY')

router.get('/', function(req, res){
    res.render('index');
});

router.get('/home', middleware.isLoggedIn, function(req, res){
    res.render('home', {students: students, date:date});
});

module.exports = router;