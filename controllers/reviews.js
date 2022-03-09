const Campground = require("../models/campground");
const Review = require("../models/review");
const User = require("../models/user");

module.exports.createReview = async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    if (req.user) {
        const user = await User.findById(req.user._id);
        review.author = req.user._id;
        user.reviews.push(review);
        user.coin += 1;
        await user.save();
    }
    review.post = campground;
    campground.reviews.push(review);
    await review.save();
    await campground.save();

    req.flash("success", "成功留言!");
    res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteReview = async(req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    const user = await User.findById(req.user._id);
    user.coin -= 1;
    await user.save();
    req.flash("success", "成功刪除");
    res.redirect(`/campgrounds/${id}`);
};