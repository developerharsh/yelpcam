var express=require("express");
var app=express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose"),
Campground = require("./models/campground"),
Comment = require("./models/comment"),
seedDB = require("./seeds");

seedDB();

mongoose.connect("mongodb://localhost/yelp_cam");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));


// Campground.create(
//     {
//         name:"camp2",
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUp1CgJzkPMKjSkRDxR5ZPxtQLokdagxa7LdrkwIarr6OAeM3",
//         description: "this is description about the campground"
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
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    });
    
});


app.post("/campgrounds",function(req,res){
   
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;

    var newCampground = {name:name, img:image, description: desc};

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
    res.render("campgrounds/new");
});


app.get("/campgrounds/:id",function(req,res){

    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("campgrounds/show",{campground: foundCampground});
        }
    })
    
});

//=================================
// Comments Routes
//=================================

app.get("/campgrounds/:id/comments/new",function(req,res){

    Campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{campground: campground});
        }
    })
    
});

app.post("/campgrounds/:id/comments",function(req,res){

    Campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            Comment.create(req.body.comment,function(err,comment){
                if(err){
                    console.log(err);
                }else{
                    campground.comments.push(comment);
                    campground.save(function(err,camp){
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/campgrounds/"+campground._id);                                           
                        }
                    })
                }
            })
            
        }
    })
    
});

app.listen(2000,function(){
    console.log("connected");
});