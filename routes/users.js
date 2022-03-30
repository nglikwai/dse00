const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const admins = require('../controllers/admins');
const { findById } = require('../models/user');
const { isLoggedIn, isAuthor, validateCampground, checkLogin, isAdmin } = require('../middleware');
const campground = require('../models/campground');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/users/login' }), users.login)

router.route('/forget')
    .get(users.renderForget)
    .put(users.checkIdEmailMatch)

router.route('/intro')
    .get(isLoggedIn, users.renderIntro)

router.route('/addfriend')
    .get(isLoggedIn, users.renderAddFriend)
    .put(isLoggedIn, users.addFriendFirst)

router.route('/user/:id')
    .get(users.updateUser, catchAsync(users.loadUser))
    .put(isLoggedIn, catchAsync(users.intro))
    .delete(isLoggedIn, isAdmin, catchAsync(admins.deleteUser))

router.route('/user/:id/friend')
    .get((req, res) => { res.redirect(`/users/user/${req.params.id}`) })
    .put(isLoggedIn, catchAsync(users.addFriend))
    .delete(isLoggedIn, catchAsync(users.removeFriend))

router.get('/logout', users.logout)

router.get('/dse00coin', (req, res) => {
    res.render('users/dse00coin')
});

module.exports = router;