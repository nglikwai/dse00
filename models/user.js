const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Campground'
    }],
    intro: {
        type: String,
        default: '考到心儀嘅大學'
    },
    coin: {
        type: Number,
        default: 1
    },
    grade: {
        type: String,
        default: 1
    },
    identity: {
        type: String,
        default: 'member'
    },
    username: {
        type: String,
        default: 'DSEJJ'
    }


}, { timestamps: true });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);