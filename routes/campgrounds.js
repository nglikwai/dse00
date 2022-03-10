const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const user = require('../controllers/users');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground, checkLogin } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Campground = require('../models/campground');

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(upload.array('image'), validateCampground, user.updateUser, checkLogin, catchAsync(campgrounds.createCampground))


router.route('/iframe')
    .get(catchAsync(campgrounds.iframe))
    .post(upload.array('image'), validateCampground, user.updateUser, catchAsync(campgrounds.createCampgroundForIframe))

router.route('/search')
    .get(catchAsync(campgrounds.indexSearch))
    .post(upload.array('image'), validateCampground, user.updateUser, checkLogin, catchAsync(campgrounds.createCampground))

router.route('/iframe/:id')
    .get(catchAsync(campgrounds.showIframeCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, user.updateUser, catchAsync(campgrounds.updateIframeCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteIframeCampground));

router.get('/new', campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, user.updateUser, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))



module.exports = router;