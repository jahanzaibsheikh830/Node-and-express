var express = require("express");
const PORT = process.env.PORT || 5000
var server = express();

server.get("/", (req,res,next) =>{
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
});

server.get("/water", (req,res,next) =>{
    res.send("here is water");
});

server.get("/food", (req,res,next) =>{
    res.send("here is food");
});

server.listen(PORT, function(){
    console.log("server is running");
});
