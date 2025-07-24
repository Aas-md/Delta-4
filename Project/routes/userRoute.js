const express = require("express");
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require("../utils/wrapAsync")
const passport = require('passport')


// sign up form

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs')
})

// sign up rout

router.post('/signup', wrapAsync(async (req, res) => {

    try {

        let { email, username, password } = req.body;
        const newUser = new User({
            username: username,
            email: email,
        })
        let registeredUser = await User.register(newUser, password)
        console.log(registeredUser)
        req.flash('success', "Welcome to Wanderlust")
        res.redirect('/listings');
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/signup');
    }

}))

// login form 

router.get('/login', async (req, res) => {
    res.render('users/login.ejs')
})

// login route

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}),
    async (req, res) => {
        req.flash('success', 'Welcome to Wanderlust')
        res.redirect('/listings')
    }
);


//logout

router.get('/logout',(req,res)=>{

    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash('success',"You are logged out!")
        res.redirect('/listings');
    })
})



module.exports = router