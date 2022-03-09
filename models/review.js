const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default:'622874ccc8ed254d82edf591'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Camground'
    }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);