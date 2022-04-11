const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const Tutor = require('../models/tutor');
const tutors = require('../controllers/tutors');



router.route('/')
    .get(catchAsync(tutors.renderTutors))

router.route('/:id')
    .get(catchAsync(tutors.renderTutor))

module.exports = router;