const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync")
const passport = require('passport')
const { saveRedirectUrl } = require('../midlewares.js')
const userController = require('../controllers/userController.js')


//sign up forma sign up route
router.route('/signup')
    .get(userController.signupForm)
    .post(wrapAsync(userController.signup))

//login form and logon route

router.route('/login')
    .get(userController.logingForm)
    .post(saveRedirectUrl, passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }),
        userController.login
    );

//logout

router.get('/logout', userController.logout)



module.exports = router