require('dotenv').config();
var request  = require('request');

const username = process.env.CK_USER,
    password = process.env.CK_PASSWORD,
    url = 'http://' + username + ':' + password + '@110.232.86.18:5000/validate_user';

request({url}, function (error, response, body) {
   // Do more stuff with 'body' here
   var parsedData = JSON.parse(body);
   console.log(parsedData);
});