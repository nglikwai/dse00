const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const { findById } = require('../models/user');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/users/login' }), users.login)

router.route('/forget')
    .get(users.renderForget)
    .put(users.checkIdEmailMatch)

router.route('/user/:id')
    .get(catchAsync(users.loadUser))

router.get('/logout', users.logout)

router.get('/dse00coin', (req, res) => {
    res.render('users/dse00coin')
});

module.exports = router;