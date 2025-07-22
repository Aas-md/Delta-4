const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError.js");
const  {reviewSchema}  = require("../schema.js");
const Listing = require("../models/listing");
const Review = require("../models/review.js")




const validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body)

    if(error){
        throw new ExpressError(400,error)
    }else{
        next()
    }
}


// Reviews Post Route

router.post('/',validateReview,wrapAsync(async (req,res)=>{
 
    let id = req.params.id;
    console.log(id,"hello I am review post route");
    let listing = await Listing.findById(id);
    let review = Review(req.body.review);
    listing.reviews.push(review);
    
    await review.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
}))

//  Review delete route

router.delete('/:reviewId', wrapAsync(async (req,res)=>{

        let {id,reviewId} = req.params;
        
        await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/listings/${id}`);
}))


module.exports = router;