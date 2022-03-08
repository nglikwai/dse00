const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor, isAdmin } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const User = require('../models/user');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');
const admins = require('../controllers/admins');

router.get('/', isLoggedIn, isAdmin, admins.seeall)

module.exports = router;