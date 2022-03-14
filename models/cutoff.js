const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cutoffSchema = new Schema({
    title: String,
    years: [String],
    category: String,
    fullScore: [Number],
    '7': [Number],
    '6': [Number],
    '5': [Number],
    '4': [Number],
    '3': [Number],
    '2': [Number]
}, { timestamps: true });

module.exports = mongoose.model("Cutoff", cutoffSchema);