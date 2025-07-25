const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const  {reviewSchema}  = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js")
const {isLoggedIn, validateReview,isReviewAthor} = require('../midlewares.js');
const reviewController = require('../controllers/reviewController.js')

// Reviews Post Route

router.post('/',isLoggedIn, validateReview,wrapAsync(reviewController.addReview))

//  Review delete route

router.delete('/:reviewId',isLoggedIn,isReviewAthor, wrapAsync(reviewController.deleteReview))


module.exports = router;