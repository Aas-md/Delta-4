const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError.js");
const listings = require('./routes/listings.js')
const reviews = require('./routes/review.js')

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


app.use('/listings',listings);
app.use('/listings/:id/reviews',reviews)


// Catch-all 404 handler
app.all("/{*any}", (req, res, next) => {
    next(new ExpressError(404, "page not found"));
});


// Error-handling middleware (must be last)
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    // res.status(statusCode).send(message);
    res.render('error.ejs', { message });
});
















// error handler for general cases

// app.use((err, req, res, next) => {
//     res.send("somethinf went wrong");
// })


