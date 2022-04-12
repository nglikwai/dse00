const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    school: String,
    location: [String],
    teachingSubjects: [String],
    teachingSubjectsPrice: [Number],
    price: Number,
    intro: String,
    details: [String]
}, { timestamps: true });

module.exports = mongoose.model("Tutor", tutorSchema);