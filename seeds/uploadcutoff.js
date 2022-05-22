const mongoose = require('mongoose');
const cutoffs = require('./cutoff');
const Cutoff = require('../models/cutoff');


mongoose.connect('mongodb+srv://nglikwai:dse00com@cluster0.hwgq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async() => {
    await Cutoff.deleteMany({});
    for (let i = 0; i < cutoffs.length; i++) {
        const cutoff = new Cutoff(cutoffs[i])
        console.log(cutoff)
        await cutoff.save();
    }
}


seedDB().then(() => {
    mongoose.connection.close();
})