var express = require("express");
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

server.listen(4000, function(){
    console.log("server is running");
});
