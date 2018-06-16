var mongoose = require("mongoose");

var Campgrounds = require("./models/campground");

function seedDB(){

    Campgrounds.remove({},function(err){
        if(err)
        {
            console.log(err);
        }
        console.log("all removed");
    });
}

module.exports = seedDB;