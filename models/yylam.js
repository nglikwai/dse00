const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yylamSchema = new Schema({
    title: String,
    author: String,
});

module.exports = mongoose.model("Yylam", yylamSchema);