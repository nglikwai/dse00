const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pastpaperSchema = new Schema({
    title: String,
    years: [Number],
    url: [String]
}, { timestamps: true });

module.exports = mongoose.model("Pastpaper", pastpaperSchema);