const Listing = require('./models/listing.js');
const Review = require('./models/review.js');
const { listingSchema, reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

module.exports.isLoggedIn = (req,res,next)=>{

    if(req.isAuthenticated()){
      
      next();
    }else{
      
      req.session.redirectUrl = req.originalUrl;
        req.flash('error',"You must be logged in to create a listing!")
        res.redirect('/login')
    }

}

module.exports.saveRedirectUrl = (req,res,next)=>{

  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }

  next();
}

module.exports.isOwner = async (req,res,next)=>{
      const { id } = req.params;
     let listing = await Listing.findById(id);
      if(!listing.owner._id.equals(res.locals.currUser._id)){
  
          req.flash('error',"you are not the owner of this listing")
          return res.redirect(`/listings/${id}`)
      }
      next();

}

module.exports.validateListing = (req, res, next) => {

    let { error } = listingSchema.validate(req.body);


    if (error) {

        throw new ExpressError(400, error);
    } else {
        next();
    }
}

module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body)

    if(error){
        throw new ExpressError(400,error)
    }else{
        next()
    }
}

module.exports.isReviewAthor = async (req,res,next)=>{
      const { id ,reviewId} = req.params;
     let review = await Review.findById(reviewId);
      if(!review.author._id.equals(res.locals.currUser._id)){
  
          req.flash('error',"you are not the owner of this review")
          return res.redirect(`/listings/${id}`)
      }
      next();

}


