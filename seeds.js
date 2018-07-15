var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campgrounds = require("./models/campground");

var data= [
    {
        name:"night life",
        img:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439cf2c07ba4ebb7_340.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
        name:"camping",
        img:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f9c378a5eeb3ba_340.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
        name:"forest",
        img:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

// data.forEach(function(seed){
//     Campgrounds.create(seed,function(err,created){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("added a campground");

//             Comment.create({
//                 text: "nice place, but should have internet",
//                 author: "anonymous"
//             },function(err,comment){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     created.comments.push(comment);
//                     created.save();
//                     console.log("created new comment");
//                 }

//             });
//         }
//     });
// });

module.exports = seedDB;