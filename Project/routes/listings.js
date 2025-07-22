const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError.js");
const  {listingSchema}  = require("../schema.js");
const Listing = require("../models/listing");



const validateListing = (req, res, next) => {
     
    let {error} = listingSchema.validate(req.body);
  
   
    if (error) {
       
        throw new ExpressError(400, error);
    }else{
        next();
    }
}


//home route
router.get('/', wrapAsync(async (req, res) => {
    const listings = await Listing.find();
    res.render("listings/index.ejs", { listings });
}))

//new Route

router.get('/new', (req, res) => {

    res.render('listings/new.ejs');
})

// add route

router.post('/',validateListing, wrapAsync(async (req, res, next) => {

    // let {title, description,image,price,location,country} = req.body;

    const listing = req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect('/listings');

}));


//show route

router.get('/:id', wrapAsync(async (req, res) => {

    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });


}))


//edit route

router.get('/:id/edit', wrapAsync(async (req, res) => {

    let { id } = req.params;
    const listing = await Listing.findById(id);
    console.log(listing)
    res.render("listings/edit", { listing });

}))

//Update route

router.put('/:id',validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);

}))


// Delete Route

router.delete('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect('/listings');

}))


module.exports = router;