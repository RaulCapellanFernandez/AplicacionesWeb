module.exports = function (body) { 
    var fs = require('fs');
    fs.appendFile('alumnos.txt', "\r\n" + body, function (err) {
    console.log(body);
    });
};