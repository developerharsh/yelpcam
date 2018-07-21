var express=require("express");
var app=express();
var bodyParser = require("body-parser");
var passport= require("passport");
var localStrategy = require("passport-local");
var mongoose = require("mongoose"),
flash = require("connect-flash"),
methodOverride = require("method-override"),
Campground = require("./models/campground"),
Comment = require("./models/comment"),
seedDB = require("./seeds"),
User= require("./models/user");

var commentRoutes = require("./routes/comments"),
    campgroundRoutes= require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

//seedDB();

//mongoose.connect("mongodb://localhost/yelp_cam");
mongoose.connect("mongodb://harsh:harsh123@ds247171.mlab.com:47171/harsh_yelpcamp");



app.set("view engine","ejs");

app.use(methodOverride("_method"));
app.use(flash());


app.use(require("express-session")({
    secret: "this is a secret",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/public"));

app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT || 2000);