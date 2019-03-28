var express = require("express");
var router = express.Router();
var Student = require("../models/student");
var middleware = require("../middleware");
let dateandtime = require('../library/date-and-time');
date = dateandtime.format(new Date(), 'dddd, DD MMMM YYYY')

router.get('/', middleware.isLoggedIn, function(req, res){
    // Get all students from server.
    Student.find({}, function(err, allStudents){
      if (err) {
        console.log(err);
      } else {
        res.render('students/index', {students: allStudents, date:date});
      }
    });
});

// SHOW - Displays info about one student.
router.get("/:id", function(req, res){
    console.log(Student.findById(req.params.id));
    Student.findById(req.params.id).exec(function(err, foundStudent){
      if (err) {
        console.log(err);
      } else {
        console.log(foundStudent);
        res.render("students/show", {student: foundStudent});
      }
    });
});


module.exports = router;