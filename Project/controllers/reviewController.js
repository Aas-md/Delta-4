const Listing = require('../models/listing.js');
const Review = require('../models/review.js');


module.exports.addReview = async (req,res)=>{
 
    let id = req.params.id;
    let listing = await Listing.findById(id);
    let review = Review(req.body.review);
    listing.reviews.push(review);
    review.author = req.user._id;
    console.log(review);
    await review.save();
    await listing.save();
      req.flash("success","Review Added Successfuly");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.deleteReview = async (req,res)=>{

        let {id,reviewId} = req.params;
        
        await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success","Review Deleted Successfuly");
        res.redirect(`/listings/${id}`);
}