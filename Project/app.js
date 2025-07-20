const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require("./utils/ExpressError.js");
const Joi = require("joi");
const  schema  = require("./schema.js");

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

const validateListing = (req, res, next) => {
     
    let {error} = schema.listingSchema.validate(req.body);
  
   
    if (error) {
       
        throw new ExpressError(404, error);
    }else{
        next();
    }
}

// index route

app.get('/listings', wrapAsync(async (req, res) => {
    const listings = await Listing.find();
    res.render("listings/index.ejs", { listings });
}))

//new Route

app.get('/listings/new', (req, res) => {

    res.render('listings/new.ejs');
})

// add route

app.post('/listings',validateListing, wrapAsync(async (req, res, next) => {

    // let {title, description,image,price,location,country} = req.body;

    const listing = req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect('/listings');

}));


//show route

app.get('/listings/:id', wrapAsync(async (req, res) => {

    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });


}))


//edit route

app.get('/listings/:id/edit', wrapAsync(async (req, res) => {

    let { id } = req.params;
    const listing = await Listing.findById(id);
    console.log(listing)
    res.render("listings/edit", { listing });

}))

//Update route

app.put('/listings/:id',validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);

}))


// Delete Route

app.delete('/listings/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect('/listings');

}))

// error handler for general cases

// app.use((err, req, res, next) => {
//     res.send("somethinf went wrong");
// })


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


