var express=require("express");
var app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    var campgrounds=[
        {name:"camp1",img:"https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144394f5c27ea2edb4_340.jpg"},
        {name:"camp2",img:"https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f1c47aa0e8b5b9_340.jpg"},
        {name:"camp3",img:"https://pixabay.com/get/ea35b8062cf1063ed1584d05fb1d4e97e07ee3d21cac104497f1c47aa0e8b5b9_340.jpg"}
    ];
    res.render("campgrounds",{campgrounds:campgrounds});
});


app.listen(2000,function(){
    console.log("connected");
});