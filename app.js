var express=require("express");
var app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
})

app.listen(2000,function(){
    console.log("connected");
});