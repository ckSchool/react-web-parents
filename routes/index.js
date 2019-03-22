var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");

text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias blanditiis quod sit fugiat placeat eaque aspernatur est qui. Vel, ipsa?"

router.get('/', function(req, res){
    res.render('index');
});

router.get('/home', middleware.isLoggedIn, function(req, res){
    var sections = [
        {title: "Heading 1", image: "imgs/teach.png", paragraph: text},
        {title: "Heading 2", image: "imgs/apples.png", paragraph: text},
        {title: "Heading 3", image: "imgs/glasses.png", paragraph: text}
    ]

    res.render('home', {articles: sections});
});

module.exports = router;