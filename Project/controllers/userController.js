const User = require('../models/user');

module.exports.signupForm = (req, res) => {
    res.render('users/signup.ejs')
}

module.exports.signup = async (req, res) => {

    try {

        let { email, username, password } = req.body;
        const newUser = new User({
            username: username,
            email: email,
        })
        let registeredUser = await User.register(newUser, password)
        console.log(registeredUser)
        req.login(registeredUser, (err) => {
            if (err)
                return next(err)
            req.flash('success', "Welcome to Wanderlust")
            res.redirect('/listings');
        })

    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/signup');
    }

}

module.exports.logingForm = async (req, res) => {
    res.render('users/login.ejs')
}

module.exports.login = async (req, res) => {
    req.flash('success', 'Welcome to Wanderlust')
    const url = res.locals.redirectUrl || '/listings';
    res.redirect(url)
}

module.exports.logout = (req, res, next) => {

    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', "You are logged out!")
        res.redirect('/listings');
    })
}