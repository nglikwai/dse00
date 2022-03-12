const Pastpaper = require('../models/pastpaper');

module.exports.renderRegister = (req, res) => {
    res.render('/users/register');
}