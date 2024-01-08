// need to make 2 variables


var express = require('express');
var app = express();

// select a file for the cloud conputing
app.use(express.static("public"));

// make a variable for the proper path
var path = require("path")
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(5020, function(){
    console.log("Successfully connected.")
})