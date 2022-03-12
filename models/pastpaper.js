const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pastpaperSchema = new Schema({
    title: String,
    years: [String],
    url: [String]
}, { timestamps: true });

module.exports = mongoose.model("Pastpaper", pastpaperSchema);