const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Tutor = require('../models/tutor');
const tutors = require('../controllers/tutors');



router.route('/')
    .get(catchAsync(tutors.renderTutors))

router.route('/search')
    .get(catchAsync(tutors.searchTutors))

router.route('/case')
    .get(catchAsync(tutors.renderCase))

router.route('/case/:id')
    .get(catchAsync(tutors.renderCaseUnit))

router.route('/:id')
    .get(catchAsync(tutors.renderTutor))



module.exports = router;