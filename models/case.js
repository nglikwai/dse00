const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caseSchema = new Schema({
    name: String,
    subject: String,
    price: Number,
    form: Number,
    region: String,
    building: String,
    case: Number,
    hour: Number,
    lession: Number,
    createdAt: Date,
    gender: String
});

module.exports = mongoose.model("Case", caseSchema);