const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const Jupas = require('../models/jupas');
const jupas = require('../controllers/jupas');

router.get('/', catchAsync(jupas.searchCode))
router.get('/code', catchAsync(jupas.searchCode))




module.exports = router;