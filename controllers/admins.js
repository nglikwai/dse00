const User = require('../models/user');

module.exports.seeall = async(req, res) => {
    const users = await User.find({}).populate('posts').populate('reviews');
    res.render('admins/seeall', { users });
}

module.exports.activity = async(req, res) => {
    const users = await User.find({}).populate('posts').populate('reviews').sort({ updatedAt: 1 });
    res.render('admins/seeall', { users });
}

module.exports.setAdmin = async(req, res) => {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, {...req.body })
    user.save();
    req.flash('success', `successfully set ${req.body.identity.toUpperCase()} `)
    res.redirect(`/users/user/${id}`)
}