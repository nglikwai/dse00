const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yylamSchema = new Schema({
    title: String,
    author: String,
}, { timestamps: true });

module.exports = mongoose.model("Yylam", yylamSchema);