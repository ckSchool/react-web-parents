var mongoose = require("mongoose");


var studentSchema = new mongoose.Schema({
    // studentID: String,
    name: String,
    picture: String,
    class: String,
    atSchool: Boolean,
    email: String,
    address: String,
    bio: String,
});

module.exports = mongoose.model("Student", studentSchema);
