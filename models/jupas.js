const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String

})

const jupasSchema = new Schema({
    year: {
        type: Number,
        min: 4
    },
    code: {
        type: Number,
        min: 4
    },
    cutoffs: {
        Chinese: Number,
        English: Number,
        Maths: Number,
        LS: Number,
        E1: Number,
        E2: Number,
    },
    images: [ImageSchema]
}, { timestamps: true });

module.exports = mongoose.model("Jupas", jupasSchema);