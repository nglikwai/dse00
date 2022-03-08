const Campground = require('../models/campground');
const Review = require('../models/review');
const User = require('../models/user');

module.exports.createReview = async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    const user = await User.findById(req.user._id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    review.post = campground;
    campground.reviews.push(review);
    user.reviews.push(review);
    user.posts.push(campground)
    user.coin += 1;
    await review.save();
    await campground.save();
    await user.save();
    req.flash('success', '成功留言!');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.deleteReview = async(req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    const user = await User.findById(req.user._id);
    user.coin -= 1;
    await user.save();
    req.flash('success', '成功刪除')
    res.redirect(`/campgrounds/${id}`);
}