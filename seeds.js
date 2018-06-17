var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campgrounds = require("./models/campground");

var data= [
    {
        name:"night life",
        img:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439cf2c07ba4ebb7_340.jpg",
        description:"blah blah blah"
    },

    {
        name:"camping",
        img:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f9c378a5eeb3ba_340.jpg",
        description:"blah blah blah"
    },

    {
        name:"forest",
        img:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description:"blah blah blah"
    },
];

function seedDB(){

    //Removing campgrounds
    Campgrounds.remove({},function(err){
        if(err)
        {
            console.log(err);
        }
        console.log("all removed");
    });
}

//Adding campgrounds

data.forEach(function(seed){
    Campgrounds.create(seed,function(err,created){
        if(err){
            console.log(err);
        }
        else{
            console.log("added a campground");

            Comment.create({
                text: "nice place, but should have internet",
                author: "anonymous"
            },function(err,comment){
                if(err){
                    console.log(err);
                }else{
                    created.comments.push(comment);
                    created.save();
                    console.log("created new comment");
                }

            });
        }
    });
});

module.exports = seedDB;