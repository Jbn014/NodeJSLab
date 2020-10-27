let path =  require('path');
let fs = require('fs');
let request = require

var dataPathChirp = path.join(__dirname, '../chirps.json')
console.log(dataPathChirp)
let data = JSON.stringify({
    encoding: "UTF-8",
    hair: "red",
   eyes: "blue",
    shirt: "blue",
   shoes: "swag"
})
fs.writeFile(dataPath, data,
function (err) {
    console.log(err)
},

)



