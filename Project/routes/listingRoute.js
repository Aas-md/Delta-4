const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const middleware = require('../midlewares.js');
const { populate } = require("../models/review.js");
const { isLoggedIn, validateListing } = middleware;


//home route
router.get('/', wrapAsync(async (req, res) => {
    const listings = await Listing.find();
    res.render("listings/index.ejs", { listings });
}))

//new Route form

router.get('/new', isLoggedIn, (req, res) => {

    res.render('listings/new.ejs');

})

// add route

router.post('/', isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {

    // let {title, description,image,price,location,country} = req.body;

    const listing = req.body.listing;
    const newListing = new Listing(listing);
    newListing.owner = req.user._id
    await newListing.save();
    req.flash("success", "New Listing added");
    res.redirect('/listings');

}));


//show route

router.get('/:id', wrapAsync(async (req, res) => {

    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            }
        }).populate('owner');
    if (listing)
        res.render("listings/show.ejs", { listing });
    else {
        req.flash("error", "The listing is exist");
        res.redirect('/listings')
    }


}))


//edit route

router.get('/:id/edit', isLoggedIn, middleware.isOwner, wrapAsync(async (req, res) => {

    let { id } = req.params;
    const listing = await Listing.findById(id);

    res.render("listings/edit", { listing });

}))

//Update route

router.put('/:id', isLoggedIn, middleware.isOwner, validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Edited Successfuly");
    res.redirect(`/listings/${id}`);

}))


// Delete Route

router.delete('/:id', isLoggedIn, middleware.isOwner, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted Successfuly");
    res.redirect('/listings');

}))


module.exports = router;