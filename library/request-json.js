require('dotenv').config();
var ck_username = process.env.CK_USER;
var ck_password = process.env.CK_PASSWORD;
var request  = require('request');

request('http://110.232.86.18:5000/absent_dict', function(error, res, body){
    if(!error && res.statusCode ==200){
        var parsedData = JSON.parse(body);
        // console.log(ck_username)
        // console.log(parsedData);
        for (var myKey in parsedData){ 
            console.log(parsedData[myKey].absen_id, parsedData[myKey].absen_nama, parsedData[myKey].absen_not_active, parsedData[myKey].absent_name);
        }
    } else {
        console.log("Something went very wrong.");
        console.log(error);
    }
});


request.get('http://110.232.86.18:5000/validate_user').auth('ck_username', 'ck_password');
console.log(request['get']);
// or
// request.get('http://some.server.com/', {
//   'auth': {
//     'user': 'username',
//     'pass': 'password',
//     'sendImmediately': false
//   }
// });