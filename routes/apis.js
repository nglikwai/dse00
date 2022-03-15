const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const Yylam = require('../models/yylam');
const { findById } = require('../models/user');

router.get('/yylam', async(req,res)=>{
    const yylams = await Yylam.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(yylams)
    
})

module.exports = router;