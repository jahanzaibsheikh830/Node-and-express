// var express = require("express");
// var server = express();

// const e = require("express");

// server.get("/", (req,res,next) =>{
//     console.log("some one get menu");
//     res.send("menu: what do you want? food or water");
// });

// server.get("/water", (req,res,next) =>{
//     res.send("here is water");
// });

// server.get("/food", (req,res,next) =>{
//     res.send("here is food");
// });

// server.listen(4000, function(){
//     console.log("server is running");
// });

const Http = new XMLHttpRequest();

function sendRequest(res){
    const url='http://192.168.50.177:3000/bulb';
    Http.open(res, url);
    Http.send();
}
Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
  document.getElementById('result').innerHTML = Http.responseText;
}