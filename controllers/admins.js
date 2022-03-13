const User = require('../models/user');

module.exports.seeall = async(req, res) => {
    const users = await User.find({}).populate('posts').populate('reviews');
    res.render('admins/seeall', { users });
}

module.exports.activity = async(req, res) => {
    const users = await User.find({}).populate('posts').populate('reviews').sort({ updatedAt: 1 });
    res.render('admins/seeall', { users });
}