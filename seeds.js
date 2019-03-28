var mongoose = require("mongoose");
var Student = require("./models/student");
var faker = require('faker');
var students = [];

for(var i=0; i<10; i++){
    const Student = {
        studentID: faker.random.uuid(),
        name: faker.name.findName(),
        picture: faker.internet.avatar(),
        class: faker.random.arrayElement(["SD","SMA","SMP"]) + faker.random.number({min:1, max:3}),
        atSchool: faker.random.boolean(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        bio: faker.lorem.paragraph(),
      };
    
    students.push(Student);
};


function seedDB(){
   //Remove all students
   Student.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed students!");
        //add a few students
        students.forEach(function(seed){
            Student.create(seed, function(err, student){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a student");
                }
            });
        });
    });
};

module.exports = seedDB;
