const Campground = require('../models/campground');
const User = require('../models/user');

const { cloudinary } = require("../cloudinary");


module.exports.index = async(req, res) => {
    const campgrounds = await Campground.find({}).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author').sort({ updatedAt: -1 });;
    res.render('campgrounds/index', { campgrounds })
}

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
}

module.exports.createCampground = async(req, res, next) => {
    const campground = new Campground(req.body.campground);
    campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    campground.author = req.user._id;
    const user = await User.findById(req.user._id);
    user.posts.push(campground);
    user.coin += 1;
    await user.save();
    await campground.save();
    req.flash('success', '成功建立POST');
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.showCampground = async(req, res) => {
    const campground = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    if (!campground) {
        req.flash('error', 'Cannot find that POST!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { campground });
}

module.exports.renderEditForm = async(req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)
    if (!campground) {
        req.flash('error', '收不到POST');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground });
}

module.exports.updateCampground = async(req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }))
    campground.images.push(...imgs);
    console.log(req.body);
    await campground.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    }
    req.flash('success', '成功更新');
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteCampground = async(req, res) => {
    const { id } = req.params;
    const user = await User.findById(req.user._id);
    user.coin -= 1;
    await user.save();
    await Campground.findByIdAndDelete(id);
    req.flash('success', '成功刪除')
    res.redirect('/campgrounds');
}