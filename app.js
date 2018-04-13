var express=require("express");
var app=express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_cam");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campgroundSchema = new mongoose.Schema({
    name: String,
    img: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name:"camp2",
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUp1CgJzkPMKjSkRDxR5ZPxtQLokdagxa7LdrkwIarr6OAeM3"
//     }, function(err, campground){
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//             console.log("added successfully");
//             console.log(campground);
//         }
//     }
// );

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    
    Campground.find({},function(err,allCampgrounds){
        if(err)
        {
            console.log(err);
        }
        else{
            res.render("campgrounds",{campgrounds:allCampgrounds});
        }
    });
    
});

app.post("/campgrounds",function(req,res){
   
    var name = req.body.name;
    var image = req.body.image;

    var newCampground = {name:name, img:image};

    Campground.create(newCampground,function(err,newCampground){
        if(err)
        {
            console.log(err);

        }
        else
        {
            res.redirect("/campgrounds");
        }
    })

    
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});


app.listen(2000,function(){
    console.log("connected");
});