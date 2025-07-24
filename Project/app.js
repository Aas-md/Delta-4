const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError.js");
const listings = require('./routes/listingRoute.js')
const reviews = require('./routes/reviewRoute.js')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user.js')
const userRoute= require('./routes/userRoute.js')



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")))



main().then(() => {
    console.log("connected to db")
}).catch((e) => {
    console.log(e)
})

async function main() {
    await mongoose.connect(mongoose_url);
}

app.listen(port, () => {
    console.log("App os listening on ", port)
})

//home route

app.get('/', (req, res) => {
    res.send("app is working fine");
})

//sessions options

const sessionOptions = {
    secret : "secretCode",
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge :  7 * 24 * 60 * 60 * 1000,
        httpOnly : true
    }

}

app.use(session(sessionOptions))
app.use(flash());

// set passport ->  just after the session because it needs session


app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// fakeUser registerd
app.get('/demouser',async (req,res)=>{

    let fakeUser = new User({
        email : "aas7071@gmail.com",
        username : 'aasmohd7071'
    })

    let registeredUser = await User.register(fakeUser,'abc')
    res.send(registeredUser)
})


app.use('/listings',listings);
app.use('/listings/:id/reviews',reviews)
app.use('/',userRoute)


// Catch-all 404 handler
app.all("{*any}", (req, res, next) => {
    next(new ExpressError(404, "page not found"));///{*any}"
});


// Error-handling middleware (must be last)
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    // res.status(statusCode).send(message);
    // console.log(err.message,err.stack)

      // Extract first line after the error message from the stack
    const stackLines = err.stack?.split('\n');
    const locationLine = stackLines && stackLines[1] ? stackLines[1].trim() : "Location not found";
    // console.log(message,locationLine);
    res.render('error.ejs', { message });
});
















// error handler for general cases

// app.use((err, req, res, next) => {
//     res.send("somethinf went wrong");
// })

//added from notepad


