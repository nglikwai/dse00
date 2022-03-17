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
        user.coin += 3;
        await user.save();
    }
    review.post = campground;
    campground.reviews.push(review);
    campground.popular +=1 ;
    await review.save();
    await campground.save();

    req.flash("success", "成功留言!");
    res.redirect(`/${campground._id}`);
};

module.exports.createIframeReview = async(req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    if (req.user) {
        const user = await User.findById(req.user._id);
        review.author = req.user._id;
        user.reviews.push(review);
        user.coin += 3;
        await user.save();
    }
    review.post = campground;
    campground.reviews.push(review);
    await review.save();
    await campground.save();

    req.flash("success", "🪙 + 3 ");
    res.redirect(`/iframe/${campground._id}`);
};

module.exports.deleteReview = async(req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    const user = await User.findById(req.user._id);
    user.coin -= 3;
    await user.save();
    req.flash("success", "成功刪除");
    res.redirect(`/${id}`);
};

module.exports.deleteIframeReview = async(req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    const user = await User.findById(req.user._id);
    user.coin -= 3;
    await user.save();
    req.flash("success", "成功刪除");
    res.redirect(`/iframe/${id}`);
};