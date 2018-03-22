var express=require("express");
var app=express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds=[
    {name:"camp1",img:"https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144394f5c27ea2edb4_340.jpg"},
    {name:"camp2",img:"https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144394f5c27ea2edb4_340.jpg"},
    {name:"camp3",img:"https://pixabay.com/get/ea35b8062cf1063ed1584d05fb1d4e97e07ee3d21cac104497f1c47aa0e8b5b9_340.jpg"}
];

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
   
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
   
    var name = req.body.name;
    var image = req.body.image;

    var newCampground = {name:name, img:image};

    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});


app.listen(2000,function(){
    console.log("connected");
});