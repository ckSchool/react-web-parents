var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temparament: String
});

var Cat = mongoose.model("Cat", catSchema);

// Cat.find() remove() create()

// Created in JS
var george = new Cat({
    name: "George",
    age: 11,
    temparament: "Grouchy"
});

// Adding to DB
george.save(function(err, cat){
    if(err){
        console.log("Error")
    } else {
        console.log("Saved a cat")
        console.log(cat); // Returned from DB

    }
});

Cat.create({
    name: "Snow White",
    age: 15,
    temparament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error saving cat")
        console.log(err)
    } else {
        console.log("All Cats found")
        console.log(cats);
    }
})