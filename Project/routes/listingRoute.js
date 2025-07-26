require('dotenv').config();
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const middleware = require('../midlewares.js');
const { populate } = require("../models/review.js");
const { isLoggedIn, validateListing } = middleware;
const listingController = require('../controllers/listingController.js');
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage})



//  index and add listing route
router.route('/')
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,  
        upload.single('listing[image]'),validateListing,wrapAsync(listingController.addNewListing))

//new Route form

router.get('/new', isLoggedIn, listingController.renderNewForm)

// show update and delete route 

router.route('/:id')
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, middleware.isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, middleware.isOwner, wrapAsync(listingController.deleteListing))

//edit route

router.get('/:id/edit', isLoggedIn, middleware.isOwner, wrapAsync(listingController.editListing))


module.exports = router;