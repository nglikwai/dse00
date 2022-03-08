const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async(req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to DSE00!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', "Goodbye!");
    res.redirect('/campgrounds');
}

module.exports.loadUser = async(req, res) => {
    const user = await User.findById(req.params.id).populate('reviews').populate('posts');
    if (!user) {
        req.flash('error', 'User not found');
        return res.redirect('/campgrounds');
    }
    console.log(user);
    if (user.coin < 10) { user.grade = 2 } else if (user.coin < 20) { user.grade = 3 } else if (user.coin < 30) { user.grade = 4 } else if (user.coin > 40) { user.grade = 5 };
    await user.save()
    res.render('users/user', { user });
}