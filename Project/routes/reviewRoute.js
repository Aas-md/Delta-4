const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const  {reviewSchema}  = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js")
const {isLoggedIn, validateReview,isReviewAthor} = require('../midlewares.js');

// Reviews Post Route

router.post('/',isLoggedIn, validateReview,wrapAsync(async (req,res)=>{
 
    let id = req.params.id;
    console.log(id,"hello I am review post route");
    let listing = await Listing.findById(id);
    let review = Review(req.body.review);
    listing.reviews.push(review);
    review.author = req.user._id;
    console.log(review);
    await review.save();
    await listing.save();
      req.flash("success","Review Added Successfuly");
    res.redirect(`/listings/${listing._id}`);
}))

//  Review delete route

router.delete('/:reviewId',isLoggedIn,isReviewAthor, wrapAsync(async (req,res)=>{

        let {id,reviewId} = req.params;
        
        await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success","Review Deleted Successfuly");
        res.redirect(`/listings/${id}`);
}))


module.exports = router;