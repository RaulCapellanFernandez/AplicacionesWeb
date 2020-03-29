module.exports = function () { 
    var fs = require('fs');
    var arrayImprmir = [];
    var data = fs.readFileSync('alumnos.txt', 'utf8').toString().split('\r\n');

        for(i in data){
    
            var aux = {
                nombre: data[i],
            }
            arrayImprmir.push(aux);
        }
    console.log(arrayImprmir);
    return(arrayImprmir);
};