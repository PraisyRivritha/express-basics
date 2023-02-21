const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>hello,world</h1>");
});

app.get("/contact",function(req,res){
res.send("contact me at : rivrithapraisym@gmail.com");
});

app.get("/about", function(req,res){
    res.send("I'm PRAISY RIVRITHA.M")
});

app.get("/hobbies", function(req,res){
    res.send("I'm interested in learning and knowing new things")
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});